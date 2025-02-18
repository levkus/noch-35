import { useState } from "react";
import { Section, Input, TextArea, Button } from "./ui";
import { GraffitiOption } from "@/types/options";

interface GraffitiSectionProps {
  graffitiLabel: string;
  graffitiContent: string;
  availableGraffiti: GraffitiOption[];
  onChange: (values: {
    graffitiLabel?: string;
    graffitiContent?: string;
    availableGraffiti?: GraffitiOption[];
  }) => void;
}

export function GraffitiSection({
  graffitiLabel,
  graffitiContent,
  availableGraffiti,
  onChange,
}: GraffitiSectionProps) {
  const [newGraffiti, setNewGraffiti] = useState("");
  const [editingGraffiti, setEditingGraffiti] = useState<{
    index: number;
    value: string;
  } | null>(null);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addGraffiti = () => {
    if (newGraffiti.trim()) {
      onChange({
        availableGraffiti: [
          ...availableGraffiti,
          { id: generateId(), label: newGraffiti.trim() },
        ],
      });
      setNewGraffiti("");
    }
  };

  const removeGraffiti = (id: string) => {
    onChange({
      availableGraffiti: availableGraffiti.filter(
        (graffiti) => graffiti.id !== id
      ),
    });
  };

  const startEditingGraffiti = (id: string) => {
    const graffitiIndex = availableGraffiti.findIndex((d) => d.id === id);

    if (graffitiIndex !== -1) {
      setEditingGraffiti({
        index: graffitiIndex,
        value: availableGraffiti[graffitiIndex].label,
      });
    }
  };

  const saveEditedGraffiti = () => {
    if (editingGraffiti && editingGraffiti.value.trim()) {
      const newGraffiti = [...availableGraffiti];
      newGraffiti[editingGraffiti.index] = {
        ...availableGraffiti[editingGraffiti.index],
        label: editingGraffiti.value.trim(),
      };
      onChange({ availableGraffiti: newGraffiti });
      setEditingGraffiti(null);
    }
  };

  return (
    <Section title="Graffiti">
      <Input
        label="Label"
        value={graffitiLabel}
        onChange={(e) => onChange({ graffitiLabel: e.target.value })}
      />
      <TextArea
        label="Content"
        value={graffitiContent}
        onChange={(e) => onChange({ graffitiContent: e.target.value })}
        rows={4}
      />
      <div>
        <label className="block text-sm font-medium">
          Available Graffiti Options
        </label>
        <div className="flex gap-2 mt-1">
          <Input
            value={newGraffiti}
            onChange={(e) => setNewGraffiti(e.target.value)}
            placeholder="Add new graffiti option"
          />
          <Button onClick={addGraffiti}>Add</Button>
        </div>
        <ul className="mt-2 space-y-2">
          {availableGraffiti.map((option, index) => (
            <li
              key={option.id}
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              {editingGraffiti?.index === index ? (
                <div className="flex items-center gap-2 flex-1">
                  <Input
                    value={editingGraffiti.value}
                    onChange={(e) =>
                      setEditingGraffiti({
                        ...editingGraffiti,
                        value: e.target.value,
                      })
                    }
                  />
                  <Button variant="primary" onClick={saveEditedGraffiti}>
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setEditingGraffiti(null)}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <>
                  <span>{option.label}</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="primary"
                      onClick={() => startEditingGraffiti(option.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => removeGraffiti(option.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
