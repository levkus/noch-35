import { Section, Input } from "./ui";

interface VideoSectionProps {
  videoLink: string;
  onChange: (values: { videoLink?: string }) => void;
}

export function VideoSection({ videoLink, onChange }: VideoSectionProps) {
  return (
    <Section title="Video Section">
      <Input
        label="Video Link"
        value={videoLink}
        onChange={(e) => onChange({ videoLink: e.target.value })}
      />
    </Section>
  );
}
