export interface FormData {
  drinks: {
    selections: string[];
  };
  attendance: {
    selection: string | null;
  };
}

export interface GuestData {
  slug: string;
  drinks: {
    selections: string[];
  };
  attendance: {
    selection: string | null;
  };
}
