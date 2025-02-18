import { useState } from "react";
import { Section, Input, TextArea, Button } from "./ui";
import { DrinkOption } from "@/types/options";

interface DrinksSectionProps {
  drinksLabel: string;
  drinksContent: string;
  availableDrinks: DrinkOption[];
  onChange: (values: {
    drinksLabel?: string;
    drinksContent?: string;
    availableDrinks?: DrinkOption[];
  }) => void;
}

export function DrinksSection({
  drinksLabel,
  drinksContent,
  availableDrinks,
  onChange,
}: DrinksSectionProps) {
  const [newDrink, setNewDrink] = useState("");
  const [editingDrink, setEditingDrink] = useState<{
    index: number;
    value: string;
  } | null>(null);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addDrink = () => {
    if (newDrink.trim()) {
      onChange({
        availableDrinks: [
          ...availableDrinks,
          { id: generateId(), label: newDrink.trim() },
        ],
      });
      setNewDrink("");
    }
  };

  const removeDrink = (id: string) => {
    onChange({
      availableDrinks: availableDrinks.filter((drink) => drink.id !== id),
    });
  };

  const startEditingDrink = (id: string) => {
    const drinkIndex = availableDrinks.findIndex((d) => d.id === id);

    if (drinkIndex !== -1) {
      setEditingDrink({
        index: drinkIndex,
        value: availableDrinks[drinkIndex].label,
      });
    }
  };

  const saveEditedDrink = () => {
    if (editingDrink && editingDrink.value.trim()) {
      const newDrinks = [...availableDrinks];
      newDrinks[editingDrink.index] = {
        ...availableDrinks[editingDrink.index],
        label: editingDrink.value.trim(),
      };
      onChange({ availableDrinks: newDrinks });
      setEditingDrink(null);
    }
  };

  return (
    <Section title="Drinks">
      <Input
        label="Label"
        value={drinksLabel}
        onChange={(e) => onChange({ drinksLabel: e.target.value })}
      />
      <TextArea
        label="Content"
        value={drinksContent}
        onChange={(e) => onChange({ drinksContent: e.target.value })}
        rows={4}
      />
      <div>
        <label className="block text-sm font-medium">Available Drinks</label>
        <div className="flex gap-2 mt-1">
          <Input
            value={newDrink}
            onChange={(e) => setNewDrink(e.target.value)}
            placeholder="Add new drink"
          />
          <Button onClick={addDrink}>Add</Button>
        </div>
        <ul className="mt-2 space-y-2">
          {availableDrinks.map((drink, index) => (
            <li
              key={drink.id}
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              {editingDrink?.index === index ? (
                <div className="flex items-center gap-2 flex-1">
                  <Input
                    value={editingDrink.value}
                    onChange={(e) =>
                      setEditingDrink({
                        ...editingDrink,
                        value: e.target.value,
                      })
                    }
                  />
                  <Button variant="primary" onClick={saveEditedDrink}>
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setEditingDrink(null)}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <>
                  <span>{drink.label}</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="primary"
                      onClick={() => startEditingDrink(drink.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => removeDrink(drink.id)}
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
