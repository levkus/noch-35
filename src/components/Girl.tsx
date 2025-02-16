export const Girl = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src="/girl.png" alt="Girl" width="100%" />
    </div>
  );
};
