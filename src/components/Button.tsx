import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "event";
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-full font-medium text-sm transition-all duration-300 inline-block text-center";

  const variants = {
    primary:
      "bg-slate-700/80 border border-white/20 px-6 py-2.5 text-white hover:bg-slate-600/90 hover:border-white/40 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:bg-blue-500/40 active:border-blue-400/60 active:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-[0.98]",
    secondary:
      "px-6 py-2.5 bg-transparent border border-white/40 text-white hover:bg-white/10 hover:border-white/60 hover:scale-[1.02] active:bg-blue-500/40 active:border-blue-400/60 active:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-[0.98]",
    event:
      "block w-full py-2 px-5 bg-slate-600/60 border border-white/30 text-white font-semibold text-xs hover:bg-slate-600/80 hover:border-white/50 hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)] active:bg-blue-500/40 active:border-blue-400/60 active:shadow-[0_0_15px_rgba(59,130,246,0.4)] active:scale-[0.98]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
