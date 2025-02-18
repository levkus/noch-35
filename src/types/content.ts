import { DrinkOption, AttendanceOption } from "./options";

export interface Content {
  id: string;
  dateAddress: string;
  dateLink: string;
  dateLinkLabel: string;
  introSemiTransparentText: string;
  introOpaqueText: string;
  descriptionHeader: string;
  descriptionContent: string;
  videoLink: string;
  scheduleContent: { time: string; description: string }[];
  clothingLabel: string;
  clothingContent: string;
  presentsLabel: string;
  presentsContent: string;
  wishlistLink: string;
  wishlistLinkLabel: string;
  drinksLabel: string;
  drinksContent: string;
  availableDrinks: DrinkOption[];
  attendanceLabel: string;
  attendanceOptions: AttendanceOption[];
  submitButtonText: string;
  createdAt: string;
  updatedAt: string;
}
