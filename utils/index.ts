import { Application, Status } from "@/types";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

export const timeAgo = new TimeAgo("en-US");

export const formatDateToLocaleString = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(date));

export const matchApplication = (
  application: Application,
  status: Status,
  query: string
) => {
  return (
    application.status === status &&
    (application.name?.toLowerCase().includes(query.toLowerCase()) ||
      application.company?.toLowerCase().includes(query.toLowerCase()) ||
      application.role?.toLowerCase().includes(query.toLowerCase()) ||
      application.contact?.phone?.includes(query) ||
      application.contact?.email?.toLowerCase().includes(query.toLowerCase()))
  );
};
