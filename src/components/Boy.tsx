export const Boy = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-start ${className}`}>
      <img src="/boy.png" alt="Boy" width="100%" />
    </div>
  );
};
