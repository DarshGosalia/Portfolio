import type { Project, Skill, Education, SocialLink } from "@shared/schema";

export const personalInfo = {
  name: "Alex Chen",
  title: "Mechanical Engineering Student",
  tagline: "Building innovative solutions through engineering excellence",
  email: "alex.chen@university.edu",
  location: "San Francisco, CA",
  about: [
    "I'm a senior Mechanical Engineering student at Stanford University with a passion for robotics and sustainable technology. My journey in engineering began when I built my first robot at age 12, and since then, I've been driven by the desire to create technology that makes a real difference.",
    "Currently, I'm focused on mechatronics and renewable energy systems, combining my mechanical engineering foundation with software development skills to build integrated solutions. I believe the future of engineering lies at the intersection of hardware, software, and sustainability.",
    "When I'm not in the lab or coding, you'll find me mentoring first-year engineering students, participating in hackathons, or exploring the latest advancements in autonomous systems."
  ],
  highlights: [
    "Dean's List - 6 consecutive semesters",
    "1st Place - National Robotics Competition 2024",
    "Published research in renewable energy optimization",
    "Led a team of 8 in senior capstone project",
    "Summer internship at Tesla (Powertrain Division)"
  ]
};

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "programming" },
  { name: "C++", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "TypeScript", category: "programming" },
  { name: "MATLAB", category: "programming" },
  { name: "Java", category: "programming" },
  
  // Software & Tools
  { name: "SolidWorks", category: "software" },
  { name: "AutoCAD", category: "software" },
  { name: "ANSYS", category: "software" },
  { name: "Fusion 360", category: "software" },
  { name: "Git/GitHub", category: "software" },
  { name: "ROS", category: "software" },
  
  // Technical Skills
  { name: "CAD/CAM Design", category: "technical" },
  { name: "FEA Analysis", category: "technical" },
  { name: "Circuit Design", category: "technical" },
  { name: "3D Printing", category: "technical" },
  { name: "CNC Machining", category: "technical" },
  { name: "Embedded Systems", category: "technical" },
  
  // Soft Skills
  { name: "Team Leadership", category: "soft" },
  { name: "Project Management", category: "soft" },
  { name: "Technical Writing", category: "soft" },
  { name: "Problem Solving", category: "soft" },
  { name: "Public Speaking", category: "soft" },
  { name: "Cross-functional Collaboration", category: "soft" },
];

export const projects: Project[] = [
  {
    id: "autonomous-rover",
    title: "Autonomous Mars Rover",
    description: "Award-winning autonomous rover capable of terrain navigation and sample collection for NASA's University Student Launch Initiative.",
    longDescription: "Led the development of a fully autonomous rover system designed for extraterrestrial exploration. The rover features advanced computer vision for obstacle detection, a custom-designed sample collection mechanism, and a robust suspension system for rough terrain navigation.",
    technologies: ["Python", "ROS", "OpenCV", "SolidWorks", "Arduino", "LiDAR"],
    imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=450&fit=crop",
    githubUrl: "https://github.com/alexchen/mars-rover",
    features: [
      "Autonomous navigation using LiDAR and computer vision",
      "Custom 6-wheel suspension for 30° incline traversal",
      "Robotic arm with 5 degrees of freedom",
      "Real-time telemetry and remote operation capability"
    ],
    problem: "Design a rover capable of autonomous navigation and sample collection on Mars-like terrain with minimal human intervention.",
    solution: "Developed an integrated system combining computer vision, machine learning for terrain classification, and a custom mechanical design optimized for rocky environments.",
    results: "Won 1st place at NASA USLI 2024. Rover successfully navigated a 500m course with 98% accuracy and collected 15 samples autonomously."
  },
  {
    id: "solar-tracker",
    title: "Smart Solar Tracking System",
    description: "IoT-enabled dual-axis solar tracker that increases panel efficiency by 40% through real-time sun position optimization.",
    longDescription: "Designed and built a smart solar tracking system that maximizes energy capture by continuously adjusting panel orientation. The system uses a combination of light sensors and astronomical algorithms for precise tracking.",
    technologies: ["Arduino", "Python", "IoT", "Fusion 360", "PCB Design"],
    imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=450&fit=crop",
    githubUrl: "https://github.com/alexchen/solar-tracker",
    liveUrl: "https://solar-tracker-dashboard.vercel.app",
    features: [
      "Dual-axis tracking with ±0.5° accuracy",
      "Cloud-connected dashboard for monitoring",
      "Weather-adaptive positioning algorithm",
      "Self-calibrating sensor array"
    ],
    problem: "Fixed solar panels lose significant efficiency due to suboptimal sun angles throughout the day and across seasons.",
    solution: "Created an intelligent tracking system that combines real-time sensor data with predictive algorithms to maximize solar exposure.",
    results: "Achieved 40% improvement in energy capture compared to fixed installations. Published research paper in IEEE Sustainable Energy journal."
  },
  {
    id: "prosthetic-hand",
    title: "3D-Printed Prosthetic Hand",
    description: "Low-cost, customizable prosthetic hand with EMG-controlled grip patterns for upper-limb amputees.",
    longDescription: "Developed an affordable prosthetic hand solution using 3D printing and EMG sensors. The design focuses on accessibility, with total material costs under $300 while maintaining functionality comparable to commercial alternatives.",
    technologies: ["SolidWorks", "EMG Sensors", "3D Printing", "C++", "Servo Motors"],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
    githubUrl: "https://github.com/alexchen/prosthetic-hand",
    features: [
      "5 configurable grip patterns",
      "EMG-based muscle signal control",
      "Modular finger design for easy replacement",
      "Open-source design files for global accessibility"
    ],
    problem: "Commercial prosthetic hands cost $10,000-$100,000, making them inaccessible to many amputees worldwide.",
    solution: "Designed a fully functional prosthetic hand using 3D-printed components and affordable electronics, with open-source plans for global distribution.",
    results: "Successfully fitted 12 patients in partnership with local hospitals. Design downloaded 5,000+ times from open-source repository."
  },
  {
    id: "hvac-optimizer",
    title: "AI-Powered HVAC Optimizer",
    description: "Machine learning system that reduces building energy consumption by 25% through predictive climate control.",
    longDescription: "Built a smart HVAC control system that learns occupancy patterns and weather data to optimize heating and cooling schedules. The system integrates with existing building management systems for seamless deployment.",
    technologies: ["Python", "TensorFlow", "IoT", "REST API", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop",
    githubUrl: "https://github.com/alexchen/hvac-optimizer",
    features: [
      "Occupancy prediction with 95% accuracy",
      "Integration with weather APIs",
      "Mobile app for manual overrides",
      "Energy usage analytics dashboard"
    ],
    problem: "Commercial buildings waste 30% of HVAC energy due to inefficient scheduling and lack of occupancy awareness.",
    solution: "Developed an AI system that predicts occupancy and weather patterns to pre-condition spaces only when needed.",
    results: "Deployed in 3 campus buildings, achieving 25% energy reduction and annual savings of $50,000."
  },
  {
    id: "drone-delivery",
    title: "Autonomous Delivery Drone",
    description: "Compact delivery drone with obstacle avoidance and precision landing capabilities for last-mile logistics.",
    longDescription: "Designed a lightweight autonomous drone platform for package delivery applications. The system features advanced flight controllers, computer vision for safe landing, and a unique package release mechanism.",
    technologies: ["Python", "PX4", "OpenCV", "Carbon Fiber", "LiPo Batteries"],
    imageUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=450&fit=crop",
    githubUrl: "https://github.com/alexchen/delivery-drone",
    features: [
      "5km operational range with 2kg payload",
      "Vision-based precision landing (±10cm)",
      "Autonomous obstacle avoidance",
      "Encrypted communication protocol"
    ],
    problem: "Last-mile delivery accounts for 50% of shipping costs and contributes significantly to urban traffic congestion.",
    solution: "Created an autonomous drone delivery system capable of navigating urban environments and performing precise package drops.",
    results: "Completed 100+ successful test deliveries. Won 2nd place at Stanford Drone Challenge."
  },
  {
    id: "water-purification",
    title: "Portable Water Purification System",
    description: "Solar-powered water purification unit designed for disaster relief and remote communities.",
    longDescription: "Engineered a compact, solar-powered water purification system capable of producing safe drinking water from various contaminated sources. The design prioritizes portability, reliability, and ease of maintenance.",
    technologies: ["CAD", "UV-C LEDs", "Solar Cells", "Embedded C", "FEA"],
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&h=450&fit=crop",
    githubUrl: "https://github.com/alexchen/water-purifier",
    features: [
      "Produces 50L of clean water daily",
      "Solar-powered, no grid connection needed",
      "Multi-stage filtration (sediment, carbon, UV)",
      "10-year maintenance-free operation"
    ],
    problem: "2 billion people lack access to safe drinking water, with existing solutions being expensive or requiring infrastructure.",
    solution: "Designed a completely self-sufficient purification system that can be deployed anywhere with sunlight.",
    results: "Deployed in 5 communities in partnership with Engineers Without Borders. Currently purifying water for 500+ people daily."
  }
];

export const education: Education = {
  institution: "Stanford University",
  degree: "Bachelor of Science",
  field: "Mechanical Engineering",
  graduationDate: "May 2025",
  gpa: "3.89/4.0",
  coursework: [
    "Advanced Robotics",
    "Thermodynamics",
    "Control Systems",
    "Machine Learning",
    "Finite Element Analysis",
    "Mechatronics",
    "Fluid Mechanics",
    "Materials Science"
  ],
  achievements: [
    "Dean's List (6 semesters)",
    "Stanford Engineering Fellowship",
    "Tau Beta Pi Engineering Honor Society",
    "Undergraduate Research Award 2024"
  ]
};

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/alexchen", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/alexchen", icon: "github" },
  { platform: "Email", url: "mailto:alex.chen@university.edu", icon: "mail" }
];
