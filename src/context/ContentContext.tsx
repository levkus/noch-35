import { createContext, useContext } from "react";
import { Content } from "@/types/content";

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
