import { Section, Input } from "./ui";

interface SeriesIntroProps {
  introSemiTransparentText: string;
  introOpaqueText: string;
  onChange: (values: {
    introSemiTransparentText?: string;
    introOpaqueText?: string;
  }) => void;
}

export function SeriesIntro({
  introSemiTransparentText,
  introOpaqueText,
  onChange,
}: SeriesIntroProps) {
  return (
    <Section title="Series Intro">
      <Input
        label="Semi-transparent Text"
        value={introSemiTransparentText}
        onChange={(e) => onChange({ introSemiTransparentText: e.target.value })}
      />
      <Input
        label="Opaque Text"
        value={introOpaqueText}
        onChange={(e) => onChange({ introOpaqueText: e.target.value })}
      />
    </Section>
  );
}
