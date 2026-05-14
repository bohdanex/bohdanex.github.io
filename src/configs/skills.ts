import type { SkillGroup } from "../types";

export const skills: SkillGroup[] = [
  {
    category: "System Architecture",
    items: [
      "Domain-Driven Design (DDD)",
      "Clean Architecture",
      "CQRS",
      "Microservices",
      "Modular Monolith",
      "RESTful API Design",
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Angular", highlight: true },
      "React",
      "NextJS",
      "LitJS",
      "SolidJS",
    ],
  },
  {
    category: "Backend",
    items: [
      { name: ".NET", highlight: true },
      "NodeJS",
      "NestJS",
    ],
  },
  {
    category: "Cloud & CI/CD",
    items: [
      "AWS",
      { name: "Azure", highlight: true },
      "GitHub Actions",
      "Azure Pipelines",
      "Docker",
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "Supabase", highlight: true },
      "PostgreSQL",
      "MSSQL",
      "Redis",
      "MongoDB",
    ],
  },
  {
    category: "WebGL & 3D",
    items: [
      { name: "ThreeJS", highlight: true },
      "WebGPU",
      "VR",
      "Custom Shaders",
      "Linear Algebra",
    ],
  },
];