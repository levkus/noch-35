import { useState } from "react";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import { DrinkOption, AttendanceOption } from "@/types/options";

interface Content {
  id: string;
  dateAddress: string;
  dateLink: string;
  introSemiTransparentText: string;
  introOpaqueText: string;
  descriptionHeader: string;
  descriptionContent: string;
  videoLink: string;
  scheduleContent: string;
  clothingLabel: string;
  clothingContent: string;
  presentsLabel: string;
  presentsContent: string;
  wishlistLink: string;
  drinksLabel: string;
  drinksContent: string;
  availableDrinks: DrinkOption[];
  attendanceLabel: string;
  attendanceOptions: AttendanceOption[];
  submitButtonText: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  content: Content;
}

export default function AdminPage({ content: initialContent }: Props) {
  const [content, setContent] = useState<Content>(initialContent);
  const [drinks, setDrinks] = useState<DrinkOption[]>(
    initialContent.availableDrinks
  );
  const [newDrink, setNewDrink] = useState("");
  const [editingDrink, setEditingDrink] = useState<{
    index: number;
    value: string;
  } | null>(null);
  const [options, setOptions] = useState<AttendanceOption[]>(
    initialContent.attendanceOptions
  );
  const [newOption, setNewOption] = useState("");
  const [editingOption, setEditingOption] = useState<{
    index: number;
    value: string;
  } | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const addDrink = () => {
    if (newDrink.trim()) {
      setDrinks([...drinks, { id: generateId(), label: newDrink.trim() }]);
      setNewDrink("");
    }
  };

  const removeDrink = (id: string) => {
    setDrinks(drinks.filter((drink) => drink.id !== id));
  };

  const startEditingDrink = (id: string) => {
    const drinkIndex = drinks.findIndex((d) => d.id === id);
    if (drinkIndex !== -1) {
      setEditingDrink({ index: drinkIndex, value: drinks[drinkIndex].label });
    }
  };

  const saveEditedDrink = () => {
    if (editingDrink && editingDrink.value.trim()) {
      const newDrinks = [...drinks];
      newDrinks[editingDrink.index] = {
        ...drinks[editingDrink.index],
        label: editingDrink.value.trim(),
      };
      setDrinks(newDrinks);
      setEditingDrink(null);
    }
  };

  const addOption = () => {
    if (newOption.trim()) {
      setOptions([...options, { id: generateId(), label: newOption.trim() }]);
      setNewOption("");
    }
  };

  const removeOption = (id: string) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  const startEditingOption = (id: string) => {
    const optionIndex = options.findIndex((o) => o.id === id);
    if (optionIndex !== -1) {
      setEditingOption({
        index: optionIndex,
        value: options[optionIndex].label,
      });
    }
  };

  const saveEditedOption = () => {
    if (editingOption && editingOption.value.trim()) {
      const newOptions = [...options];
      newOptions[editingOption.index] = {
        ...options[editingOption.index],
        label: editingOption.value.trim(),
      };
      setOptions(newOptions);
      setEditingOption(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...content,
          availableDrinks: drinks,
          attendanceOptions: options,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save");
      }

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error("Failed to save content:", error);
      alert("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Edit Website Content</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Date Section</h2>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <input
                type="text"
                value={content.dateAddress}
                onChange={(e) =>
                  setContent({ ...content, dateAddress: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Link</label>
              <input
                type="text"
                value={content.dateLink}
                onChange={(e) =>
                  setContent({ ...content, dateLink: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </section>

          {/* Series Intro Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Series Intro</h2>
            <div>
              <label className="block text-sm font-medium">
                Semi-transparent Text
              </label>
              <input
                type="text"
                value={content.introSemiTransparentText}
                onChange={(e) =>
                  setContent({
                    ...content,
                    introSemiTransparentText: e.target.value,
                  })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Opaque Text</label>
              <input
                type="text"
                value={content.introOpaqueText}
                onChange={(e) =>
                  setContent({ ...content, introOpaqueText: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </section>

          {/* Series Description Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Series Description</h2>
            <div>
              <label className="block text-sm font-medium">Header</label>
              <input
                type="text"
                value={content.descriptionHeader}
                onChange={(e) =>
                  setContent({ ...content, descriptionHeader: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Content</label>
              <textarea
                value={content.descriptionContent}
                onChange={(e) =>
                  setContent({ ...content, descriptionContent: e.target.value })
                }
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </section>

          {/* Video Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Video Section</h2>
            <div>
              <label className="block text-sm font-medium">Video Link</label>
              <input
                type="text"
                value={content.videoLink}
                onChange={(e) =>
                  setContent({ ...content, videoLink: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </section>

          {/* Schedule Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Schedule</h2>
            <div>
              <label className="block text-sm font-medium">Content</label>
              <textarea
                value={content.scheduleContent}
                onChange={(e) =>
                  setContent({ ...content, scheduleContent: e.target.value })
                }
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </section>

          {/* Clothing Info Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Clothing Info</h2>
            <div>
              <label className="block text-sm font-medium">Label</label>
              <input
                type="text"
                value={content.clothingLabel}
                onChange={(e) =>
                  setContent({ ...content, clothingLabel: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Content</label>
              <textarea
                value={content.clothingContent}
                onChange={(e) =>
                  setContent({ ...content, clothingContent: e.target.value })
                }
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </section>

          {/* Presents Info Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Presents Info</h2>
            <div>
              <label className="block text-sm font-medium">Label</label>
              <input
                type="text"
                value={content.presentsLabel}
                onChange={(e) =>
                  setContent({ ...content, presentsLabel: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Content</label>
              <textarea
                value={content.presentsContent}
                onChange={(e) =>
                  setContent({ ...content, presentsContent: e.target.value })
                }
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Wishlist Link</label>
              <input
                type="text"
                value={content.wishlistLink}
                onChange={(e) =>
                  setContent({ ...content, wishlistLink: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </section>

          {/* Drinks Selector Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Drinks Selector</h2>
            <div>
              <label className="block text-sm font-medium">Label</label>
              <input
                type="text"
                value={content.drinksLabel}
                onChange={(e) =>
                  setContent({ ...content, drinksLabel: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Content</label>
              <textarea
                value={content.drinksContent}
                onChange={(e) =>
                  setContent({ ...content, drinksContent: e.target.value })
                }
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Available Drinks
              </label>
              <div className="flex gap-2 mt-1">
                <input
                  type="text"
                  value={newDrink}
                  onChange={(e) => setNewDrink(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm"
                  placeholder="Add new drink"
                />
                <button
                  type="button"
                  onClick={addDrink}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
              <ul className="mt-2 space-y-2">
                {drinks.map((drink) => (
                  <li
                    key={drink.id}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    {editingDrink?.index === drinks.indexOf(drink) ? (
                      <div className="flex items-center gap-2 flex-1">
                        <input
                          type="text"
                          value={editingDrink.value}
                          onChange={(e) =>
                            setEditingDrink({
                              ...editingDrink,
                              value: e.target.value,
                            })
                          }
                          className="block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={saveEditedDrink}
                          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingDrink(null)}
                          className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <>
                        <span>{drink.label}</span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => startEditingDrink(drink.id)}
                            className="text-blue-500 hover:text-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => removeDrink(drink.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Attendance Form Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Attendance Form</h2>
            <div>
              <label className="block text-sm font-medium">Label</label>
              <input
                type="text"
                value={content.attendanceLabel}
                onChange={(e) =>
                  setContent({ ...content, attendanceLabel: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Options</label>
              <div className="flex gap-2 mt-1">
                <input
                  type="text"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm"
                  placeholder="Add new option"
                />
                <button
                  type="button"
                  onClick={addOption}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
              <ul className="mt-2 space-y-2">
                {options.map((option) => (
                  <li
                    key={option.id}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded"
                  >
                    {editingOption?.index === options.indexOf(option) ? (
                      <div className="flex items-center gap-2 flex-1">
                        <input
                          type="text"
                          value={editingOption.value}
                          onChange={(e) =>
                            setEditingOption({
                              ...editingOption,
                              value: e.target.value,
                            })
                          }
                          className="block w-full rounded-md border-gray-300 shadow-sm"
                        />
                        <button
                          type="button"
                          onClick={saveEditedOption}
                          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingOption(null)}
                          className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <>
                        <span>{option.label}</span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => startEditingOption(option.id)}
                            className="text-blue-500 hover:text-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => removeOption(option.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className="block text-sm font-medium">
                Submit Button Text
              </label>
              <input
                type="text"
                value={content.submitButtonText}
                onChange={(e) =>
                  setContent({ ...content, submitButtonText: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>
          </section>

          <div className="flex items-center justify-end gap-4">
            {saved && <span className="text-green-600">Changes saved!</span>}
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const content = await prisma.content.findFirst();

  if (!content) {
    const now = new Date().toISOString();
    return {
      props: {
        content: {
          id: "new",
          dateAddress: "",
          dateLink: "",
          introSemiTransparentText: "",
          introOpaqueText: "",
          descriptionHeader: "",
          descriptionContent: "",
          videoLink: "",
          scheduleContent: "",
          clothingLabel: "",
          clothingContent: "",
          presentsLabel: "",
          presentsContent: "",
          wishlistLink: "",
          drinksLabel: "",
          drinksContent: "",
          availableDrinks: [],
          attendanceLabel: "",
          attendanceOptions: [],
          submitButtonText: "",
          createdAt: now,
          updatedAt: now,
        },
      },
    };
  }

  return {
    props: {
      content: {
        ...content,
        createdAt: content.createdAt.toISOString(),
        updatedAt: content.updatedAt.toISOString(),
        availableDrinks: JSON.parse(content.availableDrinks as string),
        attendanceOptions: JSON.parse(content.attendanceOptions as string),
      },
    },
  };
};
