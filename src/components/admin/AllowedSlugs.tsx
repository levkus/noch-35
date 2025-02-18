import { useState } from "react";
import { Input, Button } from "./ui";

interface AllowedSlug {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

interface AllowedSlugsProps {
  initialSlugs: AllowedSlug[];
}

export function AllowedSlugs({ initialSlugs }: AllowedSlugsProps) {
  const [slugs, setSlugs] = useState(initialSlugs);
  const [newSlug, setNewSlug] = useState("");
  const [slugError, setSlugError] = useState("");

  const addSlug = async () => {
    if (!newSlug.trim()) {
      setSlugError("Slug cannot be empty");

      return;
    }

    try {
      const response = await fetch("/api/admin/allowed-slugs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug: newSlug }),
      });

      if (!response.ok) {
        const data = await response.json();
        setSlugError(data.error || "Failed to add slug");

        return;
      }

      const newSlugData = await response.json();
      setSlugs([newSlugData, ...slugs]);
      setNewSlug("");
      setSlugError("");
    } catch (error) {
      console.error("Failed to add slug:", error);
      setSlugError("Failed to add slug");
    }
  };

  const removeSlug = async (id: string) => {
    try {
      const response = await fetch("/api/admin/allowed-slugs", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete slug");
      }

      setSlugs(slugs.filter((slug) => slug.id !== id));
    } catch (error) {
      console.error("Failed to delete slug:", error);
      alert("Failed to delete slug");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-6">Allowed Slugs</h1>
      <div className="space-y-4">
        <div>
          <div className="flex gap-2">
            <Input
              value={newSlug}
              onChange={(e) => setNewSlug(e.target.value)}
              placeholder="Enter new slug"
            />
            <Button onClick={addSlug}>Add</Button>
          </div>
          {slugError && (
            <p className="mt-1 text-sm text-red-600">{slugError}</p>
          )}
        </div>
        <ul className="space-y-2">
          {slugs.map((slug) => (
            <li
              key={slug.id}
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              <span>{slug.slug}</span>
              <Button variant="danger" onClick={() => removeSlug(slug.id)}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
