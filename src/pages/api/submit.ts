import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      slug,
      drinkBeer,
      drinkWhiteWine,
      drinkRedWine,
      drinkStrong,
      drinkNonAlcoholic,
      isAttending,
      withPartner,
      withKids,
      notComing,
    } = req.body;

    // Use the URL slug to create or update the user
    const user = await prisma.user.upsert({
      where: { slug },
      update: {
        drinkBeer,
        drinkWhiteWine,
        drinkRedWine,
        drinkStrong,
        drinkNonAlcoholic,
        isAttending,
        withPartner,
        withKids,
        notComing,
      },
      create: {
        slug,
        drinkBeer,
        drinkWhiteWine,
        drinkRedWine,
        drinkStrong,
        drinkNonAlcoholic,
        isAttending,
        withPartner,
        withKids,
        notComing,
      },
    });

    return res.status(200).json({
      message: "Form submitted successfully",
      slug: user.slug,
    });
  } catch (error) {
    console.error("Error handling form submission:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
