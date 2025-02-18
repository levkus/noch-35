import { Section, Input, TextArea } from "./ui";

interface SeriesDescriptionProps {
  descriptionHeader: string;
  descriptionContent: string;
  onChange: (values: {
    descriptionHeader?: string;
    descriptionContent?: string;
  }) => void;
}

export function SeriesDescription({
  descriptionHeader,
  descriptionContent,
  onChange,
}: SeriesDescriptionProps) {
  return (
    <Section title="Series Description">
      <Input
        label="Header"
        value={descriptionHeader}
        onChange={(e) => onChange({ descriptionHeader: e.target.value })}
      />
      <TextArea
        label="Content"
        value={descriptionContent}
        onChange={(e) => onChange({ descriptionContent: e.target.value })}
        rows={4}
      />
    </Section>
  );
}
