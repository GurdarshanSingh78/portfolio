export interface TimelineEvent {
  id: string;
  year: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "experience" | "project" | "certification";
  tags?: string[];
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "thapar-start",
    year: "2022",
    period: "August 2022",
    title: "B.Tech Computer Engineering",
    subtitle: "Thapar Institute of Engineering & Technology, Patiala",
    description:
      "Began undergraduate studies in Computer Engineering with a focus on systems programming, algorithms, and software architecture. Maintaining a CGPA of 8.0.",
    type: "education",
    tags: ["Computer Engineering", "CGPA 8.0"],
  },
  {
    id: "elc-internship",
    year: "2024",
    period: "May — July 2024",
    title: "Software Engineering Research Intern",
    subtitle: "ELC (Electronics Corporation)",
    description:
      "Conducted research in software engineering methodologies. Developed prototypes, analyzed system architectures, and contributed to production-grade engineering solutions.",
    type: "experience",
    tags: ["Research", "Software Engineering", "Prototyping"],
  },
  {
    id: "elite-projects",
    year: "2024",
    period: "2023 — 2024",
    title: "Engineering Portfolio",
    subtitle: "5 Major Systems-Level Projects",
    description:
      "Built SyncBoard (distributed CRDTs), Fleetwise (multi-agent pathfinding), Aegis (concurrency toolkit), PlaceCard (NP-hard optimization), and Peak Arbitrage Optimizer (linear programming).",
    type: "project",
    tags: [
      "Distributed Systems",
      "Algorithms",
      "Optimization",
      "Concurrency",
    ],
  },
  {
    id: "graduation",
    year: "2027",
    period: "Expected May 2027",
    title: "B.Tech Graduation",
    subtitle: "Thapar Institute of Engineering & Technology",
    description:
      "Expected graduation with a degree in Computer Engineering, carrying forward a strong foundation in systems design, algorithms, and software architecture.",
    type: "education",
    tags: ["Graduation", "Computer Engineering"],
  },
];
