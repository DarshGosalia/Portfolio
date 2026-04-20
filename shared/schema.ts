import { z } from "zod";

// User schema
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string()
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = InsertUser & { id: string };

// Contact form submissions
export const insertContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = InsertContact & { id: string };

// Portfolio data types (for frontend use - not database tables)
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  problem: string;
  solution: string;
  results: string;
}

export interface Skill {
  name: string;
  category: 'programming' | 'software' | 'technical' | 'soft';
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa?: string;
  coursework: string[];
  achievements: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
