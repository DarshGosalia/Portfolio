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



  return httpServer;
}
