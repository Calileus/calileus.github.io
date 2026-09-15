export const metrics = [
  { value: "60%", description: "review effort reduction through automated GitHub Actions quality workflows" },
  { value: "58+", description: "releases delivered, including 12 customer-facing production releases" },
  { value: "99%", description: "first-pass execution success, improved from 20%" },
  { value: "14", description: "multidisciplinary engineers led through delivery" },
];

export const projects = [
  {
    name: "ohc-template-repo",
    type: "Engineering template",
    url: "https://github.com/ObsidianHonorCoders/ohc-template-repo",
    summary: "A reusable C++ foundation with Dev Containers, CMake, GoogleTest, GitHub Actions, automated code-quality controls, documentation tooling, and cross-platform CI/CD.",
    focus: ["CMake", "GoogleTest", "GitHub Actions", "Cross-platform CI/CD"],
  },
  {
    name: "inheritance-chess",
    type: "C++20 system",
    url: "https://github.com/ObsidianHonorCoders/inheritance-chess",
    summary: "A modular chess engine exploring polymorphic object-oriented design, component-based architecture, event-driven systems, and cross-platform testing.",
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
      "Sole Software Architect for a greenfield Automotive Radar Logic Model; led a 14-person multidisciplinary team through quotation, planning, architecture, implementation, validation, customer integration, and North American production deployment.",
      "Architected an object-processing pipeline for detection-list processing, tracking, classification, and customer object-list generation with protobuf interfaces and FMI simulation integration.",
      "Designed and deployed 10+ GitHub Actions workflows across 8 components, adopted by 25+ contributors, reducing review effort by 60%.",
      "Automated quality gates for MISRA C/C++, clang-format, and repository standards, improving first-pass execution success from 20% to nearly 100%.",
      "Defined cross-platform Windows/Linux architecture, branching, versioning, release process, and repository governance standards.",
      "Onboarded 17 contributors and mentored 3 junior developers to mid-level competency while serving as primary technical reviewer.",
    ],
  },
  {
    period: "2015 - 2022",
    role: "University Professor | Academic Manager | Logic Olympiad Facilitator",
    company: "Polytechnic University of Querétaro / Autonomous University of Querétaro",
    current: false,
    highlights: [
      "Taught C/C++ programming, linear algebra, differential equations, vector calculus, and formal logic to more than 100 students.",
      "Developed automated grading and contest-management software for large-scale assessment.",
      "Served as Academic Manager for the Mexican Logic Olympiad, preparing examination content and standards for national competition.",
    ],
  },
  {
    period: "2014 - 2016",
    role: "Software Development Consultant",
    company: "REXAM | IMPULSE TELECOM | Sancorzep Group | REGULES",
    current: false,
    highlights: [
      "Delivered enterprise inventory-management and operational-support systems using SQL, C++, and WinAPI technologies.",
      "Managed complete delivery from requirements through design, implementation, deployment, user training, and maintenance.",
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