import moment from "moment";
import { validateDate } from "./validateDate";

export function formatZonedDate(zndate: string | Date): string {
  if (!validateDate(zndate)) {
    return 'Invalid date';
  }
  return moment(new Date(zndate)).format("LLL");
}
