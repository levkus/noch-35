import { useState } from "react";
import { Section, Input, Button } from "./ui";

interface ScheduleItem {
  time: string;
  description: string;
}

interface ScheduleSectionProps {
  scheduleItems: ScheduleItem[];
  onChange: (items: ScheduleItem[]) => void;
}

export function ScheduleSection({
  scheduleItems,
  onChange,
}: ScheduleSectionProps) {
  const [newScheduleTime, setNewScheduleTime] = useState("");
  const [newScheduleDescription, setNewScheduleDescription] = useState("");
  const [editingSchedule, setEditingSchedule] = useState<{
    index: number;
    time: string;
    description: string;
  } | null>(null);

  const addItem = () => {
    if (newScheduleTime.trim() && newScheduleDescription.trim()) {
      const newItems = [
        ...scheduleItems,
        {
          time: newScheduleTime.trim(),
          description: newScheduleDescription.trim(),
        },
      ];
      onChange(newItems);
      setNewScheduleTime("");
      setNewScheduleDescription("");
    }
  };

  const removeItem = (index: number) => {
    const newItems = [...scheduleItems];
    newItems.splice(index, 1);
    onChange(newItems);
  };

  const saveEditedItem = (index: number) => {
    if (editingSchedule?.time.trim() && editingSchedule?.description.trim()) {
      const newItems = [...scheduleItems];
      newItems[index] = {
        time: editingSchedule.time.trim(),
        description: editingSchedule.description.trim(),
      };
      onChange(newItems);
      setEditingSchedule(null);
    }
  };

  return (
    <Section title="Schedule">
      <div>
        <label className="block text-sm font-medium">Add Schedule Item</label>
        <div className="flex gap-2 mt-1">
          <Input
            value={newScheduleTime}
            onChange={(e) => setNewScheduleTime(e.target.value)}
            placeholder="Time (e.g. 18:00)"
            className="w-1/4"
          />
          <Input
            value={newScheduleDescription}
            onChange={(e) => setNewScheduleDescription(e.target.value)}
            placeholder="Description"
          />
          <Button onClick={addItem}>Add</Button>
        </div>
      </div>
      <ul className="mt-2 space-y-2">
        {scheduleItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 bg-gray-50 rounded"
          >
            {editingSchedule?.index === index ? (
              <div className="flex items-center gap-2 flex-1">
                <Input
                  value={editingSchedule.time}
                  onChange={(e) =>
                    setEditingSchedule({
                      ...editingSchedule,
                      time: e.target.value,
                    })
                  }
                  className="w-1/4"
                />
                <Input
                  value={editingSchedule.description}
                  onChange={(e) =>
                    setEditingSchedule({
                      ...editingSchedule,
                      description: e.target.value,
                    })
                  }
                />
                <Button variant="primary" onClick={() => saveEditedItem(index)}>
                  Save
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setEditingSchedule(null)}
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <>
                <span>
                  {item.time} - {item.description}
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="primary"
                    onClick={() =>
                      setEditingSchedule({
                        index,
                        time: item.time,
                        description: item.description,
                      })
                    }
                  >
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => removeItem(index)}>
                    Remove
                  </Button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
