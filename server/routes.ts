import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  return httpServer;
}
