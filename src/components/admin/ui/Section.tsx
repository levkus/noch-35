interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`space-y-4 ${className}`}>
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
