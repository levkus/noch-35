import { useEffect, useState } from "react";
import { Section } from "./ui";

interface Guest {
  slug: string;
  drinks: string[];
  graffiti: string[];
  attendance: string;
  createdAt: string;
}

interface GuestsResponse {
  guests: Guest[];
  unansweredSlugs: string[];
  totalAllowedSlugs: number;
}

export function GuestsSection() {
  const [data, setData] = useState<GuestsResponse>({
    guests: [],
    unansweredSlugs: [],
    totalAllowedSlugs: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch("/api/admin/guests");
        const data = await response.json();
        console.log("API Response:", { status: response.status, data });

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch guests");
        }

        setData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching guests:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load guest data"
        );
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  if (loading) return <Section title="Guest Responses">Loading...</Section>;
  if (error)
    return (
      <Section title="Guest Responses">
        <div className="p-4 bg-red-500/10 text-red-500 rounded-lg">{error}</div>
      </Section>
    );

  // Group guests by their selections
  const groupedData = data.guests.reduce(
    (acc, guest) => {
      // Group by drinks
      guest.drinks.forEach((drink) => {
        if (!acc.drinks[drink]) {
          acc.drinks[drink] = [];
        }
        acc.drinks[drink].push(guest.slug);
      });

      // Group by graffiti
      guest.graffiti.forEach((item) => {
        if (!acc.graffiti[item]) {
          acc.graffiti[item] = [];
        }
        acc.graffiti[item].push(guest.slug);
      });

      // Group by attendance
      const attendance = guest.attendance || "Not selected";
      if (!acc.attendance[attendance]) {
        acc.attendance[attendance] = [];
      }
      acc.attendance[attendance].push(guest.slug);

      return acc;
    },
    {
      drinks: {} as Record<string, string[]>,
      graffiti: {} as Record<string, string[]>,
      attendance: {} as Record<string, string[]>,
    }
  );

  return (
    <Section title="Guest Responses">
      <div className="space-y-8">
        {data.guests.length === 0 ? (
          <p className="text-center text-gray-400">No guest responses yet</p>
        ) : (
          <>
            <div className="mb-8 p-4 bg-white/5 rounded">
              <p className="text-lg">
                Total Guests:{" "}
                <span className="font-medium">
                  {data.guests.length} of {data.totalAllowedSlugs}
                </span>
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Drinks</h3>
              <div className="space-y-2">
                {Object.entries(groupedData.drinks).map(([drink, guests]) => (
                  <div key={drink} className="p-3 bg-white/5 rounded">
                    <p className="text-sm">
                      <span className="text-gray-400">{drink}</span>{" "}
                      <span className="text-gray-400">({guests.length})</span>:{" "}
                      {guests.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Graffiti</h3>
              <div className="space-y-2">
                {Object.entries(groupedData.graffiti).map(([item, guests]) => (
                  <div key={item} className="p-3 bg-white/5 rounded">
                    <p className="text-sm">
                      <span className="text-gray-400">{item}</span>{" "}
                      <span className="text-gray-400">({guests.length})</span>:{" "}
                      {guests.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Attendance</h3>
              <div className="space-y-2">
                {Object.entries(groupedData.attendance).map(
                  ([option, guests]) => (
                    <div key={option} className="p-3 bg-white/5 rounded">
                      <p className="text-sm">
                        <span className="text-gray-400">{option}</span>{" "}
                        <span className="text-gray-400">({guests.length})</span>
                        : {guests.join(", ")}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
            {data.unansweredSlugs.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">No Response Yet</h3>
                <div className="p-3 bg-white/5 rounded">
                  <p className="text-sm">
                    <span className="text-gray-400">
                      ({data.unansweredSlugs.length} guests)
                    </span>
                    : {data.unansweredSlugs.join(", ")}
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Section>
  );
}
