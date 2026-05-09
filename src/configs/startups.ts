import type { Startup } from "../types";

export const startups: Startup[] = [
  {
    name: "Maplyx",
    role: "Founder & Lead Architect",
    status: "In Development",
    description: "Educational SaaS platform and real-time mind map editor. Built core real-time collaboration engine utilizing Centrifugo and Supabase.",
    links: [{ text: "View Showcase", url: "/maplyx" }]
  },
  {
    name: "Castan",
    role: "Founder & Lead Architect",
    status: "MVP Phase",
    description: "Real-time communication service where instead of traditional video feeds, users are represented by interactive 3D holograms.",
    links: []
  }
];