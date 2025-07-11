export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-32 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-40 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Gradient overlays with animation */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Moving background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px] animate-[movePattern_20s_linear_infinite]"></div>
      </div>
    </div>
  );
};