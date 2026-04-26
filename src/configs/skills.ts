export type SkillItem = string | { name: string; highlight: boolean };

export const skills: { category: string; items: SkillItem[] }[] = [
  { category: "Frontend", items: [{ name: "Angular", highlight: true }, { name: "React", highlight: true }, "NextJS", "LitJS", "SolidJS"] },
  { category: "Backend", items: [{ name: ".NET", highlight: true }, "NodeJS", "NestJS"] },
  { category: "Cloud & Databases", items: ["AWS", "Azure", { name: "Supabase", highlight: true }, "PostgreSQL"] },
  { category: "WebGL & 3D", items: [{ name: "ThreeJS", highlight: true }, "WebGPU", "VR", "Custom Shaders"] },
  { category: "Game Dev", items: ["Unity", "Godot"] },
  { category: "Architecture & DevOps", items: [{ name: "System Architecture Design", highlight: true }, { name: "Centrifugo", highlight: true }, "CI/CD", "Docker"] }
];