export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  challenges: string[];
  innovations: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "elite" | "additional";
  accent: string;
}

export const eliteProjects: Project[] = [
  {
    id: "syncboard",
    title: "SyncBoard",
    tagline: "Real-Time Collaborative Whiteboard",
    description:
      "A distributed collaborative whiteboard enabling real-time multi-user drawing and editing with conflict-free replication across clients.",
    problem:
      "Building a collaborative drawing tool where multiple users can simultaneously edit a shared canvas without conflicts or data loss — a distributed systems challenge at its core.",
    challenges: [
      "Implementing conflict-free concurrent editing across distributed clients",
      "Designing a custom RGA CRDT for ordered sequence operations",
      "Building an event sourcing pipeline with SQLite persistence",
      "Achieving sub-100ms synchronization latency",
    ],
    innovations: [
      "Custom RGA CRDT implementation for ordered operations",
      "Event sourcing architecture with full state reconstruction",
      "Operational transforms for seamless conflict resolution",
    ],
    techStack: [
      "TypeScript",
      "CRDT",
      "Event Sourcing",
      "SQLite",
      "WebSocket",
      "Canvas API",
    ],
    liveUrl: "https://syncboard-rry9.onrender.com",
    githubUrl: "https://github.com/GurdarshanSingh78/Syncboard",
    category: "elite",
    accent: "#4A7BF7",
  },
  {
    id: "fleetwise",
    title: "Fleetwise",
    tagline: "Multi-Agent Warehouse Robotics Orchestration",
    description:
      "An intelligent multi-agent path planning system for warehouse robotics that orchestrates fleet coordination using advanced algorithmic techniques.",
    problem:
      "Coordinating dozens of autonomous warehouse robots navigating shared corridors without collisions — an NP-hard multi-agent pathfinding problem requiring real-time optimal solutions.",
    challenges: [
      "Multi-agent collision avoidance in real-time grid environments",
      "Optimal task assignment across heterogeneous robot fleets",
      "Scaling conflict-based search to handle 50+ concurrent agents",
      "Visualizing complex multi-agent simulations interactively",
    ],
    innovations: [
      "Conflict-Based Search (CBS) for optimal multi-agent pathfinding",
      "Hungarian Algorithm for optimal task-to-robot assignment",
      "Real-time simulation with interactive visualization",
    ],
    techStack: [
      "Java",
      "CBS Algorithm",
      "Hungarian Algorithm",
      "Multi-Agent Systems",
      "Pathfinding",
    ],
    liveUrl: "https://fleetwise-xhzl.onrender.com",
    githubUrl: "https://github.com/GurdarshanSingh78/fleetwise",
    category: "elite",
    accent: "#3B8C6E",
  },
  {
    id: "aegis",
    title: "Aegis",
    tagline: "High-Performance Concurrency Toolkit",
    description:
      "A battle-tested Java concurrency library providing production-grade resilience patterns including circuit breakers, rate limiters, and lock-free data structures.",
    problem:
      "Modern distributed systems need resilient concurrency primitives that can handle millions of operations per second without thread contention or cascading failures.",
    challenges: [
      "Implementing lock-free algorithms using CAS loops and atomics",
      "Designing circuit breaker state machines with configurable thresholds",
      "Building token bucket rate limiters with nanosecond precision",
      "Achieving zero-allocation hot paths for maximum throughput",
    ],
    innovations: [
      "Lock-free CAS-based concurrent data structures",
      "Composable resilience patterns (circuit breaker + rate limiter)",
      "Atomic state transitions without synchronized blocks",
    ],
    techStack: [
      "Java",
      "Concurrency",
      "CAS Loops",
      "Atomics",
      "Circuit Breaker",
      "Rate Limiter",
    ],
    liveUrl: "https://aegis-mtjq.onrender.com",
    githubUrl: "https://github.com/GurdarshanSingh78/Aegis",
    category: "elite",
    accent: "#8B6914",
  },
  {
    id: "placecard",
    title: "PlaceCard",
    tagline: "NP-Hard Graph Partitioning Optimizer",
    description:
      "An optimization engine that solves the NP-hard graph partitioning problem using simulated annealing and Union-Find for VLSI placement and circuit design.",
    problem:
      "VLSI circuit placement requires partitioning millions of interconnected components to minimize wire length — an NP-hard optimization problem where brute force is computationally impossible.",
    challenges: [
      "Solving NP-hard optimization with metaheuristic approaches",
      "Implementing efficient Union-Find with path compression",
      "Designing annealing schedules that converge to near-optimal solutions",
      "Visualizing graph partitioning results in real-time",
    ],
    innovations: [
      "Simulated Annealing with adaptive cooling schedules",
      "Union-Find with path compression for partition tracking",
      "Interactive graph partitioning visualization",
    ],
    techStack: [
      "Simulated Annealing",
      "Graph Partitioning",
      "Union Find",
      "NP-Hard Optimization",
      "Algorithms",
    ],
    liveUrl: "https://placecard.onrender.com",
    githubUrl: "https://github.com/GurdarshanSingh78/placecard",
    category: "elite",
    accent: "#9B59B6",
  },
  {
    id: "peak-arbitrage",
    title: "Peak Arbitrage Optimizer",
    tagline: "Mathematical Optimization Engine",
    description:
      "A binary integer linear programming solver for energy arbitrage optimization, finding optimal buy/sell strategies across time-series electricity pricing data.",
    problem:
      "Energy traders need to identify optimal charging and discharging windows across volatile electricity markets — a combinatorial optimization problem with thousands of binary decision variables.",
    challenges: [
      "Formulating real-world trading constraints as linear programs",
      "Integrating CBC solver for production-grade optimization",
      "Handling time-series data with variable pricing windows",
      "Building intuitive visualization of optimization results",
    ],
    innovations: [
      "Binary Integer Linear Programming formulation",
      "CBC Solver integration for industrial-strength optimization",
      "Interactive visualization of optimal trading strategies",
    ],
    techStack: [
      "Python",
      "BILP",
      "CBC Solver",
      "Optimization",
      "NumPy",
      "Pandas",
    ],
    liveUrl: "https://peak-arbitrage-optimizer.vercel.app",
    githubUrl:
      "https://github.com/GurdarshanSingh78/Peak-Arbitrage-Optimizer",
    category: "elite",
    accent: "#E67E22",
  },
];

export const additionalProjects: Project[] = [
  {
    id: "tiet-resource-hub",
    title: "TIET Resource Hub",
    tagline: "Centralized Academic Resource Platform",
    description:
      "A curated platform consolidating academic resources, notes, and study materials for Thapar Institute students.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/GurdarshanSingh78/tiet-hub",
    category: "additional",
    accent: "#4A7BF7",
  },
  {
    id: "ats-resume-killer",
    title: "ATS Resume Killer",
    tagline: "AI-Powered Resume Optimization",
    description:
      "An intelligent tool that analyzes and optimizes resumes for Applicant Tracking Systems, maximizing interview callback rates.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["Python", "NLP", "Machine Learning"],
    githubUrl: "https://github.com/GurdarshanSingh78/ats-resume-heatmap",
    category: "additional",
    accent: "#3B8C6E",
  },
  {
    id: "topsis-suite",
    title: "TOPSIS Suite",
    tagline: "Multi-Criteria Decision Analysis",
    description:
      "Implementation of the TOPSIS decision-making method for ranking alternatives across multiple weighted criteria.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["Python", "NumPy", "Pandas", "MCDM"],
    githubUrl: "https://github.com/GurdarshanSingh78/Topsis-Web-Service",
    category: "additional",
    accent: "#9B59B6",
  },
  {
    id: "ledger",
    title: "Ledger",
    tagline: "Personal Finance Tracker",
    description:
      "A clean, intuitive personal finance management application for tracking expenses, income, and budgets.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["TypeScript", "React", "SQLite"],
    githubUrl: "https://github.com/GurdarshanSingh78/personal-finance-dashboard",
    category: "additional",
    accent: "#E67E22",
  },
  {
    id: "receipt-lens",
    title: "Receipt Lens",
    tagline: "OCR Receipt Scanner",
    description:
      "An optical character recognition tool that extracts and categorizes expense data from receipt images.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["Python", "OCR", "Computer Vision"],
    githubUrl: "https://github.com/GurdarshanSingh78/receipt-lens",
    category: "additional",
    accent: "#8B6914",
  },
  {
    id: "drama-discovery",
    title: "Drama Discovery",
    tagline: "Entertainment Recommendation Engine",
    description:
      "A recommendation system that surfaces personalized drama and series suggestions based on viewing preferences.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["JavaScript", "API Integration", "React"],
    githubUrl: "https://github.com/GurdarshanSingh78/movies",
    category: "additional",
    accent: "#4A7BF7",
  },
  {
    id: "focus",
    title: "focus.",
    tagline: "Productivity & Deep Work Timer",
    description:
      "A minimalist productivity application designed around deep work principles with Pomodoro timing and focus analytics.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["TypeScript", "React", "Local Storage"],
    githubUrl: "https://github.com/GurdarshanSingh78/focus-todo",
    category: "additional",
    accent: "#3B8C6E",
  },
  {
    id: "flashgenius-studio",
    title: "FlashGenius Studio",
    tagline: "AI Flashcard Generator",
    description:
      "An intelligent flashcard creation tool that automatically generates study cards from notes and documents using AI.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["Python", "AI/ML", "NLP", "React"],
    githubUrl: "https://github.com/GurdarshanSingh78/genius-flash-app",
    category: "additional",
    accent: "#9B59B6",
  },
  {
    id: "academic-ml-notebooks",
    title: "Academic ML Notebooks",
    tagline: "Machine Learning Research Collection",
    description:
      "A curated collection of Jupyter notebooks covering ML fundamentals, model implementations, and research experiments.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["Python", "PyTorch", "Scikit-learn", "Jupyter"],
    githubUrl: "https://github.com/GurdarshanSingh78/Academic-ML-Notebooks",
    category: "additional",
    accent: "#E67E22",
  },
  {
    id: "frontend-mockups-atomquest",
    title: "Frontend Mockups (AtomQuest)",
    tagline: "UI Design Exploration",
    description:
      "A pixel-perfect frontend implementation exploring modern design patterns and interaction models for the AtomQuest portal.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["HTML", "CSS", "JavaScript", "Figma"],
    githubUrl: "https://github.com/GurdarshanSingh78/atomquest-portal",
    category: "additional",
    accent: "#8B6914",
  },
  {
    id: "frontend-mockups-mansathi",
    title: "Frontend Mockups (ManSathi)",
    tagline: "UI Design Exploration",
    description:
      "A pixel-perfect frontend implementation exploring modern design patterns and interaction models for the ManSathi prototype.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["HTML", "CSS", "JavaScript", "Figma"],
    githubUrl: "https://github.com/GurdarshanSingh78/mansathi-prototype",
    category: "additional",
    accent: "#C4A882",
  },
  {
    id: "kasparro-checkout-recovery",
    title: "Kasparro Checkout Recovery",
    tagline: "E-Commerce Conversion Optimization",
    description:
      "An intelligent checkout recovery system that reduces cart abandonment through targeted engagement strategies.",
    problem: "",
    challenges: [],
    innovations: [],
    techStack: ["TypeScript", "Node.js", "Analytics"],
    githubUrl:
      "https://github.com/GurdarshanSingh78/kasparro-checkout-recovery",
    category: "additional",
    accent: "#4A7BF7",
  },
];
