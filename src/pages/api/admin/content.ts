import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const content = await prisma.content.findFirst();

    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }

    const updatedContent = await prisma.content.update({
      where: { id: content.id },
      data: {
        dateAddress: req.body.dateAddress,
        dateLink: req.body.dateLink,
        dateLinkLabel: req.body.dateLinkLabel,
        introSemiTransparentText: req.body.introSemiTransparentText,
        introOpaqueText: req.body.introOpaqueText,
        descriptionHeader: req.body.descriptionHeader,
        descriptionContent: req.body.descriptionContent,
        videoLink: req.body.videoLink,
        scheduleContent: req.body.scheduleContent,
        clothingLabel: req.body.clothingLabel,
        clothingContent: req.body.clothingContent,
        presentsLabel: req.body.presentsLabel,
        presentsContent: req.body.presentsContent,
        wishlistLink: req.body.wishlistLink,
        wishlistLinkLabel: req.body.wishlistLinkLabel,
        drinksLabel: req.body.drinksLabel,
        drinksContent: req.body.drinksContent,
        availableDrinks: JSON.stringify(req.body.availableDrinks),
        attendanceLabel: req.body.attendanceLabel,
        attendanceOptions: JSON.stringify(req.body.attendanceOptions),
        submitButtonText: req.body.submitButtonText,
      },
    });

    return res.json({
      ...updatedContent,
      createdAt: updatedContent.createdAt.toISOString(),
      updatedAt: updatedContent.updatedAt.toISOString(),
    });
  } catch (error) {
    console.error("Failed to update content:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
