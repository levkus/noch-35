export interface FormData {
  drinks: string[];
  attendance: {
    coming: boolean;
    withPartner: boolean;
    withKids: boolean;
    notComing: boolean;
  };
}
