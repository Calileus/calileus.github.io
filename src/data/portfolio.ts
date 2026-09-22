export const metrics = [
  { value: "10+", description: "years of C++ engineering experience" },
  { value: "14", description: "engineers led on automotive radar team" },
  { value: "5+", description: "major repos architected & refactored" },
  { value: "20+", description: "private projects built & shipped" },
];

export const projects = [
  {
    name: "ohc-template-repo",
    type: "C++ template",
    url: "https://github.com/ObsidianHonorCoders/ohc-template-repo",
    image: "/jaguar_profile.jpg",
    imageAlt: "Obsidian Honor Coders jaguar and Charmander programming together",
    summary: "A starter C++ repository with CMake, GoogleTest, Dev Containers, and GitHub Actions.",
    focus: ["CMake", "GoogleTest", "GitHub Actions", "Cross-platform CI/CD"],
  },
  {
    name: "inheritance-chess",
    type: "C++20 chess engine",
    url: "https://github.com/ObsidianHonorCoders/inheritance-chess",
    image: "/inheritance-chess-icon.png",
    imageAlt: "Inheritance Chess logo - a chess piece with inheritance arrows",
    summary: "A chess engine built to explore C++20 design, events, and testing.",
    focus: ["C++20", "Polymorphism", "Event-driven design", "Testing"],
  },
];

export const testimonials = [
  {
    quote: "He brings strong technical expertise and is genuinely supportive to work with. He grasps context very quickly and is always open to discussion.",
    name: "Sachin Joshi",
    title: "Radar SW Chief Architect",
    location: "AUMOVIO, Bengaluru",
  },
  {
    quote: "He orchestrates and maintains cohesion among the team tasks, allowing all efforts to push in the same direction towards the team goal.",
    name: "Mario Pantoja",
    title: "R&D Algorithms Engineer",
    location: "AUMOVIO, Querétaro",
  },
  {
    quote: "Great knowledge about C++ programming. Excellent attitude to support the team. You bring dedicated energy and consistently contribute in meaningful ways that elevate everyone around you.",
    name: "Elí Ramírez",
    title: "R&D Algorithms Engineer",
    location: "AUMOVIO, Querétaro",
  },
];

export const experience = [
  {
    period: "Apr 2022 - Present",
    role: "Software Architect & Lead Developer",
    company: "AUMOVIO / Continental Autonomous Mobility",
    current: true,
    highlights: [
      "Led a 14-person team building automotive radar software from the first design to production.",
      "Designed the pipeline that processes radar detections, tracks objects, and sends results to customers.",
      "Added more than 10 GitHub Actions workflows across 8 components, cutting review work by 60%.",
      "Automated C++ checks and formatting, raising first-pass test success from 20% to nearly 100%.",
      "Set up the Windows and Linux build, release, and versioning process.",
      "Welcomed 17 contributors and mentored 3 junior developers.",
    ],
  },
  {
    period: "2015 - 2022",
    role: "University Professor | Academic Manager | Logic Olympiad Facilitator",
    company: "Polytechnic University of Querétaro / Autonomous University of Querétaro",
    current: false,
    highlights: [
      "Taught C/C++, mathematics, and formal logic to more than 100 students.",
      "Built software for automatic grading and contest management.",
      "Managed exams and content for the Mexican Logic Olympiad.",
    ],
  },
  {
    period: "2014 - 2016",
    role: "Software Development Consultant",
    company: "REXAM | IMPULSE TELECOM | Sancorzep Group | REGULES",
    current: false,
    highlights: [
      "Built inventory and operations software with SQL, C++, and WinAPI.",
      "Handled projects from requirements to deployment, training, and maintenance.",
    ],
  },
];

export const credentials = [
  { year: "2026", name: "Google AI Essentials", issuer: "Google", description: "Responsible AI foundations and AI-assisted work practices." },
  { year: "2025", name: "Secure Software Design Specialization", issuer: "University of Colorado", description: "Secure systems design, threat modeling, and cryptographic fundamentals." },
  { year: "2024", name: "EF SET English Certificate", issuer: "EF Education First", description: "C1 Advanced proficiency for international technical collaboration." },
  { year: "2023", name: "Parallel & GPU Programming (CUDA)", issuer: "Johns Hopkins University", description: "High-performance computing concepts for signal processing and sensor fusion." },
];

export const featuredRepositories = projects.map((project) => ({
  name: project.name,
  url: project.url,
  description: project.summary,
}));