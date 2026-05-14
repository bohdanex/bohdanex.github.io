import type { OSSItem } from "../types";

export const ossItems: OSSItem[] = [
  {
    title: ".NET Feature Management for Minimal APIs",
    subtitle: "MIT Licensed Lightweight Feature Toggling",
    description: "Developed a specialized package for .NET Minimal APIs to handle feature flags seamlessly. It addresses the lack of native, elegant toggling in Minimal API structures, allowing developers to enable/disable endpoints or logic blocks dynamically.",
    githubUrl: "https://github.com/bohdanex/Feature-Management-For-Minimal-API",
    nugetUrl: "https://www.nuget.org/packages/Bodatero.FeatureManagementForMinimalAPI/",
    stack: [".NET", "Minimal APIs", "Feature Toggling", "MIT License"],
  },
  {
    title: ".NET Result Pattern Handler",
    subtitle: "Unified Success/Error Response Handling for AspNetCore",
    description: "Created a generic implementation of the Result Pattern to eliminate exceptions for flow control. Provides a standardized response structure that can be configured globally or per-endpoint, improving API predictability and frontend integration.",
    githubUrl: "https://github.com/bohdanex/Bodatero.Result/tree/master/Bodatero.Result.AspNetCore",
    nugetUrl: "https://www.nuget.org/packages/Bodatero.Result.AspNetCore/",
    stack: [".NET", "Result Pattern", "Architecture", "Clean Code"],
  },
];
