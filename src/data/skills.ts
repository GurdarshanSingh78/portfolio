export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "code-2",
    skills: ["Java", "Python", "C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "layers",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Spring Boot",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "SQLite", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS", "Docker", "Git", "Linux", "CI/CD", "Vercel"],
  },
  {
    title: "CS Fundamentals",
    icon: "brain",
    skills: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Design Patterns",
      "OOP",
      "SDLC",
      "System Design",
    ],
  },
  {
    title: "AI & Data Science",
    icon: "sparkles",
    skills: [
      "Machine Learning",
      "NLP",
      "Computer Vision",
      "PyTorch",
      "Scikit-learn",
    ],
  },
];
