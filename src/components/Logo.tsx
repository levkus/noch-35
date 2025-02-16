export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src="/misfits.png" alt="Misfits Logo" width="100%" />
    </div>
  );
};
