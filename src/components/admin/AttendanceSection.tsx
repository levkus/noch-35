import { useState } from "react";
import { Section, Input, Button } from "./ui";
import { AttendanceOption } from "@/types/options";

interface AttendanceSectionProps {
  attendanceLabel: string;
  attendanceOptions: AttendanceOption[];
  submitButtonText: string;
  onChange: (values: {
    attendanceLabel?: string;
    attendanceOptions?: AttendanceOption[];
    submitButtonText?: string;
  }) => void;
}

export function AttendanceSection({
  attendanceLabel,
  attendanceOptions,
  submitButtonText,
  onChange,
}: AttendanceSectionProps) {
  const [newOption, setNewOption] = useState("");
  const [editingOption, setEditingOption] = useState<{
    index: number;
    value: string;
  } | null>(null);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addOption = () => {
    if (newOption.trim()) {
      onChange({
        attendanceOptions: [
          ...attendanceOptions,
          { id: generateId(), label: newOption.trim() },
        ],
      });
      setNewOption("");
    }
  };

  const removeOption = (id: string) => {
    onChange({
      attendanceOptions: attendanceOptions.filter((option) => option.id !== id),
    });
  };

  const startEditingOption = (id: string) => {
    const optionIndex = attendanceOptions.findIndex((o) => o.id === id);

    if (optionIndex !== -1) {
      setEditingOption({
        index: optionIndex,
        value: attendanceOptions[optionIndex].label,
      });
    }
  };

  const saveEditedOption = () => {
    if (editingOption && editingOption.value.trim()) {
      const newOptions = [...attendanceOptions];
      newOptions[editingOption.index] = {
        ...attendanceOptions[editingOption.index],
        label: editingOption.value.trim(),
      };
      onChange({ attendanceOptions: newOptions });
      setEditingOption(null);
    }
  };

  return (
    <Section title="Attendance Form">
      <Input
        label="Label"
        value={attendanceLabel}
        onChange={(e) => onChange({ attendanceLabel: e.target.value })}
      />
      <div>
        <label className="block text-sm font-medium">Options</label>
        <div className="flex gap-2 mt-1">
          <Input
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder="Add new option"
          />
          <Button onClick={addOption}>Add</Button>
        </div>
        <ul className="mt-2 space-y-2">
          {attendanceOptions.map((option, index) => (
            <li
              key={option.id}
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              {editingOption?.index === index ? (
                <div className="flex items-center gap-2 flex-1">
                  <Input
                    value={editingOption.value}
                    onChange={(e) =>
                      setEditingOption({
                        ...editingOption,
                        value: e.target.value,
                      })
                    }
                  />
                  <Button variant="primary" onClick={saveEditedOption}>
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setEditingOption(null)}
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
                      onClick={() => startEditingOption(option.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => removeOption(option.id)}
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
      <Input
        label="Submit Button Text"
        value={submitButtonText}
        onChange={(e) => onChange({ submitButtonText: e.target.value })}
      />
    </Section>
  );
}
