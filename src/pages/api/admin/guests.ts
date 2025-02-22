import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

interface Option {
  id: string;
  label: string;
}

interface DrinkSelections {
  selections: string[];
}

interface GraffitiSelections {
  selections: string[];
}

interface AttendanceSelection {
  selection: string | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Get all guests and content
    const [content, guests, allowedSlugs] = await Promise.all([
      prisma.content.findFirst(),
      prisma.guest.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.allowedSlug.findMany({
        orderBy: { createdAt: "desc" },
      }),
    ]);

    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }

    // Find slugs that haven't responded
    const respondedSlugs = new Set(guests.map((g) => g.slug));
    const unansweredSlugs = allowedSlugs
      .filter((s) => !respondedSlugs.has(s.slug))
      .map((s) => s.slug);

    // Transform guest data to include readable options
    const guestsWithReadableData = guests.map((guest) => {
      const defaultSelections = { selections: [] };
      const defaultAttendance = { selection: null };
      const defaultOptions: Option[] = [];

      let drinks: DrinkSelections = defaultSelections;
      let graffiti: GraffitiSelections = defaultSelections;
      let attendance: AttendanceSelection = defaultAttendance;
      let availableDrinks: Option[] = defaultOptions;
      let availableGraffiti: Option[] = defaultOptions;
      let attendanceOptions: Option[] = defaultOptions;

      try {
        if (guest.drinks) {
          drinks =
            typeof guest.drinks === "string"
              ? JSON.parse(guest.drinks)
              : (guest.drinks as unknown as DrinkSelections);
        }

        if (guest.graffiti) {
          graffiti =
            typeof guest.graffiti === "string"
              ? JSON.parse(guest.graffiti)
              : (guest.graffiti as unknown as GraffitiSelections);
        }

        if (guest.attendance) {
          attendance =
            typeof guest.attendance === "string"
              ? JSON.parse(guest.attendance)
              : (guest.attendance as unknown as AttendanceSelection);
        }

        if (content.availableDrinks) {
          availableDrinks =
            typeof content.availableDrinks === "string"
              ? JSON.parse(content.availableDrinks)
              : (content.availableDrinks as unknown as Option[]);
        }

        if (content.availableGraffiti) {
          availableGraffiti =
            typeof content.availableGraffiti === "string"
              ? JSON.parse(content.availableGraffiti)
              : (content.availableGraffiti as unknown as Option[]);
        }

        if (content.attendanceOptions) {
          attendanceOptions =
            typeof content.attendanceOptions === "string"
              ? JSON.parse(content.attendanceOptions)
              : (content.attendanceOptions as unknown as Option[]);
        }
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        return {
          slug: guest.slug,
          drinks: [],
          graffiti: [],
          attendance: "Error parsing data",
          createdAt: guest.createdAt,
        };
      }

      return {
        slug: guest.slug,
        drinks: drinks.selections.map(
          (id: string) => availableDrinks.find((d) => d.id === id)?.label || id
        ),
        graffiti: graffiti.selections.map(
          (id: string) =>
            availableGraffiti.find((g) => g.id === id)?.label || id
        ),
        attendance: attendance.selection
          ? attendanceOptions.find((o) => o.id === attendance.selection)
              ?.label || attendance.selection
          : "Not selected",
        createdAt: guest.createdAt,
      };
    });

    return res.status(200).json({
      guests: guestsWithReadableData,
      unansweredSlugs,
      totalAllowedSlugs: allowedSlugs.length,
    });
  } catch (error) {
    console.error("Error fetching guests:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
