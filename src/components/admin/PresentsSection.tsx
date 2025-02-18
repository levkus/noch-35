import { Section, Input, TextArea } from "./ui";

interface PresentsSectionProps {
  presentsLabel: string;
  presentsContent: string;
  wishlistLink: string;
  wishlistLinkLabel: string;
  onChange: (values: {
    presentsLabel?: string;
    presentsContent?: string;
    wishlistLink?: string;
    wishlistLinkLabel?: string;
  }) => void;
}

export function PresentsSection({
  presentsLabel,
  presentsContent,
  wishlistLink,
  wishlistLinkLabel,
  onChange,
}: PresentsSectionProps) {
  return (
    <Section title="Presents">
      <Input
        label="Label"
        value={presentsLabel}
        onChange={(e) => onChange({ presentsLabel: e.target.value })}
      />
      <TextArea
        label="Content"
        value={presentsContent}
        onChange={(e) => onChange({ presentsContent: e.target.value })}
        rows={4}
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Wishlist Link"
          value={wishlistLink}
          onChange={(e) => onChange({ wishlistLink: e.target.value })}
          placeholder="URL"
        />
        <Input
          label="Wishlist Link Label"
          value={wishlistLinkLabel}
          onChange={(e) => onChange({ wishlistLinkLabel: e.target.value })}
          placeholder="Text to display"
        />
      </div>
    </Section>
  );
}
