/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface Option {
  id: string;
  label: string;
}

export interface DrinkOption extends Option {}
export interface AttendanceOption extends Option {}

export interface GuestSelections {
  drinks: {
    selections: string[]; // Array of drink option IDs
  };
  attendance: {
    selection: string | null; // Attendance option ID
  };
}
