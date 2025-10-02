// This maps old orange classes to new blue/cyan classes based on logo colors

export const colorMap = {
  // Background colors
  "bg-orange-500": "bg-blue-500",
  "bg-orange-600": "bg-blue-600",
  "bg-orange-500/20": "bg-blue-500/20",
  "bg-orange-500/10": "bg-blue-500/10",
  "bg-orange-600/10": "bg-blue-600/10",

  // Text colors
  "text-orange-500": "text-blue-500",
  "text-orange-400": "text-blue-400",
  "text-orange-600": "text-blue-600",

  // Border colors
  "border-orange-500": "border-blue-500",
  "border-orange-500/30": "border-blue-500/30",
  "border-orange-500/50": "border-blue-500/50",
  "border-orange-500/60": "border-blue-500/60",
  "border-orange-400/30": "border-blue-400/30",

  // Gradient colors
  "from-orange-500": "from-blue-500",
  "from-orange-600": "from-blue-600",
  "to-orange-600": "to-blue-600",
  "to-orange-700": "to-blue-700",

  // Hover states
  "hover:text-orange-500": "hover:text-blue-500",
  "hover:text-orange-400": "hover:text-blue-400",
  "hover:from-orange-600": "hover:from-blue-600",
  "hover:to-orange-700": "hover:to-blue-700",
  "hover:border-orange-500/50": "hover:border-blue-500/50",
  "hover:border-orange-500/60": "hover:border-blue-500/60",

  // Shadow colors
  "shadow-orange-500/25": "shadow-blue-500/25",
  "shadow-orange-500/40": "shadow-blue-500/40",

  // Focus states
  "focus:border-orange-500": "focus:border-blue-500",
  "focus:ring-orange-500": "focus:ring-blue-500",
} as const
