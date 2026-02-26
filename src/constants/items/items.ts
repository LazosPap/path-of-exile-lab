export const RARITY_COLOR = {
  NORMAL: {
    border: "#5a5a5a",
    headerBg: "#1a1a1a",
    bodyBg: "#0f0f0f",
    title: "#e6e6e6",
    glow: "0 0 6px rgba(255,255,255,0.25)",
  },
  MAGIC: {
    border: "#2a4d7a",
    headerBg: "#182230",
    bodyBg: "#0f141a",
    title: "#7aa6ff",
    glow: "0 0 8px rgba(122,166,255,0.5)",
  },
  RARE: {
    border: "#6b5f2a",
    headerBg: "#2a2616",
    bodyBg: "#14130d",
    title: "#d2b55b",
    glow: "0 0 10px rgba(210,181,91,0.5)",
  },
  UNIQUE: {
    border: "#8b5a2b",
    headerBg: "#2a1f18",
    bodyBg: "#14110f",
    title: "#af6025",
    glow: "0 0 12px rgba(175,96,37,0.5)",
  },
} as const;
