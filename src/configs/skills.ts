import type { SkillGroup } from "../types";

export const skills: SkillGroup[] = [
  {
    category: "System Architecture",
    items: [
      { name: "Microservices", highlight: true },
      { name: "Modular Monolith", highlight: true },
      "Domain-Driven Design (DDD)",
      "Clean Architecture",
      "Vertical Slice Architecture",
      "RESTful API Design",
    ],
  },
  {
    category: "Distributed Systems & Messaging",
    items: [
      "RabbitMQ",
      "MassTransit",
      "Saga Pattern",
      "Outbox Pattern",
      "Idempotency",
      "Eventual Consistency",
    ],
  },
  {
    category: "Backend Stack",
    items: [
      { name: ".NET 8+", highlight: true },
      "EF Core",
      "Dapper",
      "MediatR (CQRS)",
      "Fluent Validation",
      "Carter",
      "NodeJS",
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
    category: "DevOps & Infrastructure",
    items: [
      "Docker & Docker Compose",
      "Azure",
      "GitHub Actions",
      "PostgreSQL",
      "Redis",
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
];