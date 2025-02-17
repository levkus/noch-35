import { createContext, useContext } from "react";

interface Content {
  id: string;
  dateAddress: string;
  dateLink: string;
  dateLinkLabel: string;
  introSemiTransparentText: string;
  introOpaqueText: string;
  descriptionHeader: string;
  descriptionContent: string;
  videoLink: string;
  scheduleContent: string;
  clothingLabel: string;
  clothingContent: string;
  presentsLabel: string;
  presentsContent: string;
  wishlistLink: string;
  wishlistLinkLabel: string;
  drinksLabel: string;
  drinksContent: string;
  availableDrinks: { id: string; label: string }[];
  attendanceLabel: string;
  attendanceOptions: { id: string; label: string }[];
  submitButtonText: string;
  createdAt: string;
  updatedAt: string;
}

const ContentContext = createContext<Content | null>(null);

export function useContent() {
  const context = useContext(ContentContext);

  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }

  return context;
}

interface ContentProviderProps {
  content: Content;
  children: React.ReactNode;
}

export function ContentProvider({ content, children }: ContentProviderProps) {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}
