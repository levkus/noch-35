import { Section, Input, TextArea } from "./ui";

interface ClothingSectionProps {
  clothingLabel: string;
  clothingContent: string;
  onChange: (values: {
    clothingLabel?: string;
    clothingContent?: string;
  }) => void;
}

export function ClothingSection({
  clothingLabel,
  clothingContent,
  onChange,
}: ClothingSectionProps) {
  return (
    <Section title="Clothing">
      <Input
        label="Label"
        value={clothingLabel}
        onChange={(e) => onChange({ clothingLabel: e.target.value })}
      />
      <TextArea
        label="Content"
        value={clothingContent}
        onChange={(e) => onChange({ clothingContent: e.target.value })}
        rows={4}
      />
    </Section>
  );
}
