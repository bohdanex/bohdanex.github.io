import type { RDItem } from "../types";

export const rdItems: RDItem[] = [
  {
    title: "A* Pathfinding Engine",
    subtitle: "DOTS-based Parallel Navigation System",
    description: "Engineered a high-performance A* pathfinding algorithm utilizing Unity's DOTS (Data-Oriented Technology Stack) and Burst Compiler. Leveraged advanced parallelization techniques to solve complex spatial navigation at scale.",
    metrics: "37.5x Performance Speedup compared to standard Monobehaviour",
    stack: ["Unity DOTS", "Burst Compiler", "C# Job System", "Spatial Algorithms"],
  },
  {
    title: "Hardware-Accelerated Signal Processor",
    subtitle: "Hybrid CPU/GPU Digital Signal Processing (.NET)",
    description: "Developed a .NET system for real-time signal and image processing. Features a dynamic routing engine for task execution across CPU, DirectX, or OpenCL backends. Includes real-time telemetry for CPU/RAM/GPU resource consumption.",
    capabilities: ["FFT", "STFT", "Wavelets", "Kernel operations", "Affine transformations"],
    stack: [".NET", "OpenCL", "DirectX", "Signal Processing", "Telemetry"],
  },
];
