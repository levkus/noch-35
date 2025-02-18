import { Section, Input } from "./ui";

interface DateSectionProps {
  dateAddress: string;
  dateLink: string;
  dateLinkLabel: string;
  onChange: (values: {
    dateAddress?: string;
    dateLink?: string;
    dateLinkLabel?: string;
  }) => void;
}

export function DateSection({
  dateAddress,
  dateLink,
  dateLinkLabel,
  onChange,
}: DateSectionProps) {
  return (
    <Section title="Date Section">
      <Input
        label="Address"
        value={dateAddress}
        onChange={(e) => onChange({ dateAddress: e.target.value })}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Link"
          value={dateLink}
          onChange={(e) => onChange({ dateLink: e.target.value })}
          placeholder="URL"
        />
        <Input
          label="Link Label"
          value={dateLinkLabel}
          onChange={(e) => onChange({ dateLinkLabel: e.target.value })}
          placeholder="Text to display"
        />
      </div>
    </Section>
  );
}
