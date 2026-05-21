const GlassCard = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;