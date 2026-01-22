import type { Project, Skill, Education, SocialLink, Achievement } from "@shared/schema";

export const personalInfo = {
  name: "Darsh Gosalia",
  title: "Software Developer",
  tagline: "Versatile Software Developer with comprehensive expertise in web, app, and backend development.",
  email: "darsh192006@gmail.com",
  location: "Borivali Mumbai -66",
  phone: "8097617855",
  about: [
    "Versatile Software Developer with comprehensive expertise in web, app, and backend development. Proven ability to build scalable solutions and tackle complex challenges.",
    "Adept at strategic problem-solving and leveraging key skills in API development, database management, and team leadership to drive project success.",
    "I have a strong foundation in Java programming, having successfully developed multiple mini-projects applying object-oriented principles."
  ],
  highlights: [
    "Winner of VES Technothon 2025(PS-01)",
    "Diploma in Computer Engineering with 9.2 CGPA",
    "Full-stack development expertise (React, Node, Flask, PHP)",
    "Experienced in AI/ML and Cybersecurity projects"
  ]
};

export const skills: Skill[] = [
  // Programming Languages
  { name: "Python", category: "programming" },
  { name: "C", category: "programming" },
  { name: "Java", category: "programming" },
  { name: "PHP", category: "programming" },
  { name: "JavaScript", category: "programming" },

  // Web Frameworks & Backend
  { name: "React.js", category: "software" },
  { name: "Node.js", category: "software" },
  { name: "Flask", category: "software" },
  { name: "MySQL", category: "software" },
  { name: "Firebase", category: "software" },
  { name: "Rapid API", category: "software" },
  { name: "RazorPay Integration", category: "software" },

  // App & Web Development
  { name: "Flutter", category: "technical" },
  { name: "Frontend Development", category: "technical" },
  { name: "Backend Development", category: "technical" },
  { name: "API Testing", category: "technical" },
  { name: "AI/ML", category: "technical" },

  // Soft Skills
  { name: "Leadership", category: "soft" },
  { name: "Teamwork", category: "soft" },
  { name: "Problem Solving", category: "soft" },
  { name: "Brainstorming", category: "soft" },
];

export const projects: Project[] = [
  {
    id: "cyber-sentinels",
    title: "Cyber Sentinels (PS-01)",
    description: "AI/ML platform for detecting digital threats like phishing and deep fakes.",
    longDescription: "AI/ML Developer focused on cybersecurity. Designed a web and mobile platform using machine learning and AI to detect and neutralize digital threats like phishing and deep fakes. The system includes real-time threat detection, AI-powered threat analysis, and a unique deep fake detector, demonstrating expertise in building full-stack solutions for both individual and business users.",
    technologies: ["AI/ML", "Python", "React.js", "Mobile", "Cybersecurity"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop",
    features: [
      "Real-time threat detection",
      "AI-powered threat analysis",
      "Unique deep fake detector",
      "Full-stack solution"
    ],
    problem: "Rising cyber threats including sophisticated phishing and deep fakes require advanced detection mechanisms.",
    solution: "An integrated AI/ML platform that offers real-time detection and analysis of digital threats.",
    results: "Demonstrated expertise in building full-stack solutions for cybersecurity challenges."
  },
  {
    id: "vide-ide",
    title: "VIDE: Interactive Data Structure Visualizer IDE",
    description: "Educational platform for visualizing C code execution and data structures.",
    longDescription: "Interactive Data Structure Visualizer IDE is an educational platform engineered to demystify complex C code execution for learners of Data Structures and Algorithms. The system provides a sophisticated, real-time visual debugger that synchronizes line-by-line code execution with a dynamic graphical representation of data structures. Developed using Python, GCC, and the GDB debugger.",
    technologies: ["Python", "GCC", "GDB", "C", "Visualization"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
    features: [
      "Real-time visual debugger",
      "Line-by-line code execution sync",
      "Dynamic graphical representation of data structures",
      "Modular architecture with dual-pane interface"
    ],
    problem: "Learners often struggle to visualize abstract data structures and code execution flows in C.",
    solution: "A visual IDE that bridges the gap between abstract theory and practical application through dynamic visualization.",
    results: "Provides a highly effective pedagogical tool for enhancing comprehension of computational processes."
  },
  {
    id: "college-admin-portal",
    title: "College Admin Portal in PHP",
    description: "Web-based portal for streamlining administrative tasks and communication.",
    longDescription: "Developed a comprehensive web-based admin portal using PHP to streamline administrative tasks and facilitate communication within the college community. The portal served as a centralized platform for administrators, faculty, students, and staff to access relevant information and perform various administrative functions.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop",
    features: [
      "Centralized information platform",
      "Administrative function management",
      "Communication tools for college community",
      "User role management (Admin, Faculty, Student)"
    ],
    problem: "Inefficient manual administrative processes and fragmented communication in college management.",
    solution: "A digital portal that centralizes and automates administrative tasks and communication.",
    results: "Streamlined operations and improved access to information for the college community."
  },
  {
    id: "flight-booking",
    title: "Flight Booking System",
    description: "Java GUI application for managing flight details and bookings.",
    longDescription: "In this we have used java GUI with proper flight details like arrival time and departure time and variety of places you can choose for the departure. Focus on user interface and accurate data management.",
    technologies: ["Java", "Swing/JavaFX", "Database"],
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=450&fit=crop",
    features: [
      "Flight searching and scheduling",
      "Arrival and departure time management",
      "Destination selection",
      "User-friendly GUI"
    ],
    problem: "Need for a desktop-based application to simulate or manage flight bookings efficiently.",
    solution: "A Java-based GUI application handling flight parameters and user interactions.",
    results: "Functional application demonstrating Java GUI capabilities and logic handling."
  },
  {
    id: "bus-reservation",
    title: "Bus Reservation System",
    description: "Secure online ticket booking system developed in C.",
    longDescription: "Developed a bus reservation system in C, enabling users to book tickets online securely. Implemented features such as user authentication, booking management, admin panel, and optimized seat allocation. Employed robust error handling and encryption techniques for data security.",
    technologies: ["C", "File Handling", "Encryption", "Algorithms"],
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=450&fit=crop",
    features: [
      "User authentication",
      "Booking management",
      "Admin panel",
      "Optimized seat allocation",
      "Data security encryption"
    ],
    problem: "Manual bus ticketing systems are inefficient and prone to errors.",
    solution: "A C-based digital system for checking availability, booking seats, and managing reservations.",
    results: "Secure and efficient system with robust error handling."
  },
  {
    id: "ecommerce-nike",
    title: "E-Commerce Website (Nike)",
    description: "Dynamic e-commerce platform specializing in Nike footwear.",
    longDescription: "Designed and developed a dynamic e-commerce platform specializing in Nike shoes, leveraging HTML, CSS, JavaScript, and backend technologies. The website provided users with an immersive shopping experience for purchasing Nike footwear online.",
    technologies: ["HTML", "CSS", "JavaScript", "Backend"],
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=450&fit=crop",
    features: [
      "Dynamic product showcase",
      "Immersive shopping experience",
      "Cart and checkout functionality",
      "Brand-focused design"
    ],
    problem: "Creating a branded, engaging online shopping experience for footwear.",
    solution: "A custom-built e-commerce site with dynamic features and focused design.",
    results: "Provided an immersive platform for users to browse and purchase Nike products."
  }
];

export const education: Education[] = [
  {
    institution: "SVKM's Dwarkadas J. Sanghvi College of Engineering",
    degree: "Computer Science and Engineering",
    field: "Engineering",
    graduationDate: "2025-2028",
    coursework: ["Computer Science Core", "Engineering Mathematics"],
    achievements: ["Pursuing"]
  },
  {
    institution: "Shri Bhaghubhai Mafatlal Polytechnic",
    degree: "Diploma",
    field: "Computer Engineering",
    graduationDate: "2022-2025",
    gpa: "9.2 CGPA",
    coursework: ["Data Structures", "Algorithms", "Operating Systems", "Networking"],
    achievements: ["Successfully completed with 9.2 CGPA"]
  },
  {
    institution: "St. Xavier's High School",
    degree: "High School (10th Grade)",
    field: "General",
    graduationDate: "TILL 2022",
    gpa: "80%",
    coursework: ["Mathematics", "Science", "English"],
    achievements: ["Completed 10th Grade with 80%"]
  }
];

export const achievements: Achievement[] = [
  {
    id: "ves-technothon",
    title: "Winner of VES Technothon 2025 (PS-01)",
    organization: "Vivekanand Education Polytechnic College",
    date: "2025",
    description: "Secured 1st place in the technical hackathon competition."
  },
  {
    id: "ace-hacks",
    title: "Participated in ACE Hacks 1.0",
    organization: "Atharva College of Engineering",
    date: "2024",
    description: "Participated in the 24-hour hackathon to solve real-world problems."
  },
  {
    id: "spectrum",
    title: "Participated in Spectrum 3.0",
    organization: "SBMP",
    date: "2023",
    description: "Active participation in technical event Spectrum 3.0."
  }
];

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/darshgosalia", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/darshgosalia", icon: "github" },
  { platform: "Email", url: "mailto:darsh192006@gmail.com", icon: "mail" }
];
