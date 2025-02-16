import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { slug, drinks, attendance } = req.body;

    // Use the URL slug to create or update the guest
    const guest = await prisma.guest.upsert({
      where: { slug },
      update: {
        drinks,
        attendance,
      },
      create: {
        slug,
        drinks,
        attendance,
      },
    });

    return res.status(200).json({
      message: "Form submitted successfully",
      slug: guest.slug,
    });
  } catch (error) {
    console.error("Error handling form submission:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
