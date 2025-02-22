import { useState } from "react";
import { Button } from "@/components/admin/ui";
import {
  AllowedSlugs,
  DateSection,
  SeriesIntro,
  SeriesDescription,
  VideoSection,
  ScheduleSection,
  ClothingSection,
  PresentsSection,
  DrinksSection,
  GraffitiSection,
  AttendanceSection,
  GuestsSection,
} from "@/components/admin";
import { Content } from "@/types/content";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";

interface Props {
  content: Content;
  allowedSlugs: {
    id: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const content = await prisma.content.findFirst();
    const allowedSlugs = await prisma.allowedSlug.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (!content) {
      return {
        props: {
          content: null,
          allowedSlugs: [],
        },
      };
    }

    return {
      props: {
        content: {
          ...content,
          scheduleContent: JSON.parse(content.scheduleContent as string),
          availableDrinks: JSON.parse(content.availableDrinks as string),
          availableGraffiti: JSON.parse(content.availableGraffiti as string),
          attendanceOptions: JSON.parse(content.attendanceOptions as string),
          createdAt: content.createdAt.toISOString(),
          updatedAt: content.updatedAt.toISOString(),
        },
        allowedSlugs: allowedSlugs.map((slug) => ({
          ...slug,
          createdAt: slug.createdAt.toISOString(),
          updatedAt: slug.updatedAt.toISOString(),
        })),
      },
    };
  } catch (error) {
    console.error("Failed to fetch initial data:", error);
    return {
      props: {
        content: null,
        allowedSlugs: [],
      },
    };
  }
};

export default function AdminPage({
  content: initialContent,
  allowedSlugs: initialSlugs,
}: Props) {
  const [content, setContent] = useState<Content>(
    initialContent || {
      id: "",
      dateAddress: "",
      dateLink: "",
      dateLinkLabel: "",
      introSemiTransparentText: "",
      introOpaqueText: "",
      descriptionHeader: "",
      descriptionContent: "",
      videoLink: "",
      scheduleContent: [],
      clothingLabel: "",
      clothingContent: "",
      presentsLabel: "",
      presentsContent: "",
      wishlistLink: "",
      wishlistLinkLabel: "",
      drinksLabel: "",
      drinksContent: "",
      availableDrinks: [],
      graffitiLabel: "",
      graffitiContent: "",
      availableGraffiti: [],
      attendanceLabel: "",
      attendanceOptions: [],
      submitButtonText: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  );
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      });

      if (!response.ok) {
        throw new Error("Failed to save");
      }

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error("Failed to save content:", error);
      alert("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  const updateContent = (values: Partial<Content>) => {
    setContent((prev: Content) => ({ ...prev, ...values }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <AllowedSlugs initialSlugs={initialSlugs} />

        <GuestsSection />

        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-6">Edit Website Content</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <DateSection
              dateAddress={content.dateAddress}
              dateLink={content.dateLink}
              dateLinkLabel={content.dateLinkLabel}
              onChange={updateContent}
            />

            <SeriesIntro
              introSemiTransparentText={content.introSemiTransparentText}
              introOpaqueText={content.introOpaqueText}
              onChange={updateContent}
            />

            <SeriesDescription
              descriptionHeader={content.descriptionHeader}
              descriptionContent={content.descriptionContent}
              onChange={updateContent}
            />

            <VideoSection
              videoLink={content.videoLink}
              onChange={updateContent}
            />

            <ScheduleSection
              scheduleItems={content.scheduleContent}
              onChange={(items) => updateContent({ scheduleContent: items })}
            />

            <ClothingSection
              clothingLabel={content.clothingLabel}
              clothingContent={content.clothingContent}
              onChange={updateContent}
            />

            <PresentsSection
              presentsLabel={content.presentsLabel}
              presentsContent={content.presentsContent}
              wishlistLink={content.wishlistLink}
              wishlistLinkLabel={content.wishlistLinkLabel}
              onChange={updateContent}
            />

            <DrinksSection
              drinksLabel={content.drinksLabel}
              drinksContent={content.drinksContent}
              availableDrinks={content.availableDrinks}
              onChange={updateContent}
            />

            <GraffitiSection
              graffitiLabel={content.graffitiLabel}
              graffitiContent={content.graffitiContent}
              availableGraffiti={content.availableGraffiti}
              onChange={updateContent}
            />

            <AttendanceSection
              attendanceLabel={content.attendanceLabel}
              attendanceOptions={content.attendanceOptions}
              submitButtonText={content.submitButtonText}
              onChange={updateContent}
            />

            <div className="flex items-center justify-end gap-4">
              {saved && <span className="text-green-600">Changes saved!</span>}
              <Button type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
