import type { Project } from "../types";

const propall = {
  name: "PropAll",
  logo: "https://media.licdn.com/dms/image/v2/C560BAQFaAT1ajLws1A/company-logo_200_200/company-logo_200_200/0/1663347509205?e=2147483647&v=beta&t=BslJNbGmsXUNWRYaD0mwBYWTJkZEygvQsHjasRnjn2c",
  url: null
}
export const projects: Project[] = [
  {
    name: "Employee Management App",
    description: "Built cross-platform desktop applications (Windows/macOS) focusing on native component development for optimized performance.",
    stack: ["React Native for Desktop", "Native Modules", "Swift", "Objective-C", "WPF"],
    company: undefined,
    links: [],
    isNDA: true
  },
  {
    name: "Medical App",
    description: "Mainteined a secure, scalable healthcare platform with integrated payment processing and robust MSSQL database architecture.",
    stack: ["React", ".NET Framework", "MSSQL", "Payment Gateways"],
    company: undefined,
    links: [],
    isNDA: true
  },
  {
    name: "3D Property App (Architecture & Design Editor)",
    description: "A heavy web-based architectural tool that converts 2D floorplans into interactive 3D buildings. Users can perform virtual measurements, manipulate furniture, apply wall cuts, and swap textures. My primary objective was to resolve severe performance bottlenecks through deep WebGL optimization.",
    stack: ["Three.js", "WebGL", "Performance Optimization", "Architecture"],
    company: propall,
    links: []
  },
  {
    name: "3D Walkthrough & VR Presentation Creator",
    description: "A companion application designed to import optimized architectural scenes from the primary editor and transform them into interactive, cinematic 3D walkthroughs.",
    stack: ["Three.js", "WebXR", "Node.js", "AWS Lambda", "Socket.io"],
    company: propall,
    links: []
  },
  {
    name: "Web Mini-Blender",
    description: "A fully custom 3D modeling web application built from scratch. It features a robust geometry engine that recalculates UVs and normals dynamically during complex topological operations.",
    stack: ["WebGL", "Three.js", "Design Patterns", "Linear Algebra"],
    company: propall,
    links: []
  },
  {
    name: "Arak Robotics Web Site",
    description: "Engineered scalable cloud backend components and interactive frontend interfaces for robotics management.",
    stack: ["React", "Azure Function Apps", "Cloud Architecture"],
    company: { name: "Arak Robotics", logo: null, url: "https://arakrobotics.com/" },
    links: [{ text: "Visit Website", url: "https://arakrobotics.com/" }]
  },
  {
    name: "Brick Shift",
    description: "Developed a 2D Unity game with a custom tween engine, ensuring high-performance rendering and a polished UI/UX.",
    stack: ["Unity", "C#", "Custom Tween Engine"],
    company: undefined,
    links: []
  },
  {
    name: "Business Logic Migration & Infrastructure Refactoring",
    description: "Led the strategic decoupling of core business logic from a legacy WPF desktop application, migrating it into a high-availability Windows Service.",
    stack: [".NET", "Windows Services", "WPF", "Architectural Refactoring", "C#"],
    company: { name: "Insiders", logo: null, url: null },
    links: [],
    isNDA: false
  },
];