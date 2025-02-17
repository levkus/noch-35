import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const slugs = await prisma.allowedSlug.findMany({
        orderBy: { createdAt: "desc" },
      });
      return res.status(200).json(slugs);
    } catch (error) {
      console.error("Failed to fetch allowed slugs:", error);
      return res.status(500).json({ error: "Failed to fetch allowed slugs" });
    }
  }

  if (req.method === "POST") {
    try {
      const { slug } = req.body;

      if (!slug || typeof slug !== "string") {
        return res.status(400).json({ error: "Invalid slug" });
      }

      const normalizedSlug = slug.toLowerCase().trim();

      const existingSlug = await prisma.allowedSlug.findUnique({
        where: { slug: normalizedSlug },
      });

      if (existingSlug) {
        return res.status(400).json({ error: "Slug already exists" });
      }

      const newSlug = await prisma.allowedSlug.create({
        data: { slug: normalizedSlug },
      });

      return res.status(201).json(newSlug);
    } catch (error) {
      console.error("Failed to create allowed slug:", error);
      return res.status(500).json({ error: "Failed to create allowed slug" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const { id } = req.body;

      if (!id || typeof id !== "string") {
        return res.status(400).json({ error: "Invalid id" });
      }

      await prisma.allowedSlug.delete({
        where: { id },
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Failed to delete allowed slug:", error);
      return res.status(500).json({ error: "Failed to delete allowed slug" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
