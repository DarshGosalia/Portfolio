import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, id: submission.id });
    } catch (error: any) {
      if (error.errors) {
        res.status(400).json({ 
          success: false, 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to submit contact form" 
        });
      }
    }
  });

  // Resume download endpoint - generates a sample PDF
  app.get("/api/resume", async (req, res) => {
    // Generate a simple text-based resume for download
    const resumeContent = `
ALEX CHEN
Mechanical Engineering Student

CONTACT
Email: alex.chen@university.edu
Location: San Francisco, CA
LinkedIn: linkedin.com/in/alexchen
GitHub: github.com/alexchen

EDUCATION
Stanford University
Bachelor of Science in Mechanical Engineering
Expected Graduation: May 2025
GPA: 3.89/4.0

Relevant Coursework:
- Advanced Robotics
- Thermodynamics
- Control Systems
- Machine Learning
- Finite Element Analysis
- Mechatronics
- Fluid Mechanics
- Materials Science

TECHNICAL SKILLS

Programming Languages:
Python, C++, JavaScript, TypeScript, MATLAB, Java

Software & Tools:
SolidWorks, AutoCAD, ANSYS, Fusion 360, Git/GitHub, ROS

Technical Skills:
CAD/CAM Design, FEA Analysis, Circuit Design, 3D Printing, CNC Machining, Embedded Systems

FEATURED PROJECTS

Autonomous Mars Rover
- Led development of award-winning autonomous rover for NASA USLI
- Implemented LiDAR and computer vision for terrain navigation
- Designed custom 6-wheel suspension for 30° incline traversal
- Technologies: Python, ROS, OpenCV, SolidWorks, Arduino, LiDAR

Smart Solar Tracking System
- Built IoT-enabled dual-axis solar tracker increasing efficiency by 40%
- Designed weather-adaptive positioning algorithm
- Published research in IEEE Sustainable Energy journal
- Technologies: Arduino, Python, IoT, Fusion 360, PCB Design

3D-Printed Prosthetic Hand
- Developed low-cost prosthetic with EMG-controlled grip patterns
- Total material cost under $300
- Design downloaded 5,000+ times from open-source repository
- Technologies: SolidWorks, EMG Sensors, 3D Printing, C++

ACHIEVEMENTS
- Dean's List (6 consecutive semesters)
- 1st Place - National Robotics Competition 2024
- Stanford Engineering Fellowship
- Tau Beta Pi Engineering Honor Society
- Undergraduate Research Award 2024

EXPERIENCE
Tesla - Powertrain Division (Summer Internship)
- Contributed to electric motor optimization projects
- Collaborated with cross-functional engineering teams
`;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="Alex_Chen_Resume.txt"');
    res.send(resumeContent.trim());
  });

  return httpServer;
}
