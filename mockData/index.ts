import { Application, Status } from "@/types";

export const mockApplications: Application[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Software Engineer",
    company: "Google",
    totalExperience: {
      years: 3,
      months: 6,
    },
    noticePeriod: 30,
    holdingOffer: true,
    contact: {
      email: "johndoe@yopmail.com",
      phone: "1234567890",
    },
    appliedOn: new Date("2021-07-01"),
    status: Status.APPLIED,
    verified: true,
    profilePhoto: "/user.png",
  },
  {
    id: "2",
    name: "Jane Doe",
    role: "Product Manager",
    company: "Facebook",
    totalExperience: {
      years: 5,
      months: 0,
    },
    noticePeriod: 60,
    holdingOffer: false,
    contact: {
      email: "",
      phone: "1234567890",
    },
    appliedOn: new Date("2021-07-02"),
    status: Status.REJECTED,
    verified: true,
    profilePhoto: "/user2.png",
    rejected: {
      by: "Tony Stark",
      on: new Date("2021-07-10"),
    },
  },
  {
    id: "3",
    name: "Alice",
    role: "Software Engineer",
    company: "Amazon",
    totalExperience: {
      years: 2,
      months: 6,
    },
    noticePeriod: 30,
    holdingOffer: true,
    contact: {
      email: "",
      phone: "1234567890",
    },
    appliedOn: new Date("2021-07-03"),
    status: Status.SHORTLISTED,
    shortlisted: {
      by: "Tony Stark",
      on: new Date("2021-07-10"),
    },
    verified: true,
    profilePhoto: "/user3.png",
  },
  {
    id: "4",
    name: "Bob",
    role: "Product Manager",
    company: "Microsoft",
    totalExperience: {
      years: 4,
      months: 0,
    },
    noticePeriod: 30,
    holdingOffer: false,
    contact: {
      email: "",
      phone: "1234567890",
    },
    appliedOn: new Date("2021-07-04"),
    status: Status.APPLIED,
    is_external: true,
    resume: {
      name: "Bob_Resume.pdf",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    verified: false,
    profilePhoto: "/user2.png",
  },
  {
    id: "5",
    name: "Eve",
    role: "Software Engineer",
    company: "Google",
    totalExperience: {
      years: 3,
      months: 6,
    },
    noticePeriod: 30,
    holdingOffer: true,
    contact: {
      email: "",
      phone: "1234567890",
    },
    appliedOn: new Date("2021-07-05"),
    status: Status.SHORTLISTED,
    shortlisted: {
      by: "Tony Stark",
      on: new Date("2021-07-10"),
    },
    verified: true,
    profilePhoto: "/user3.png",
  },
  {
    id: "6",
    name: "Joe",
    role: "Software Engineer",
    company: "Google",
    totalExperience: {
      years: 3,
      months: 6,
    },
    noticePeriod: 30,
    holdingOffer: true,
    contact: {
      email: "",
      phone: "1234567890",
    },
    appliedOn: new Date("2021-07-05"),
    status: Status.APPLIED,
    matched: true,
    verified: true,
    profilePhoto: "/user.png",
  },
];

export const companyActions = [
  {
    icon: "/pen.svg",
    key: "edit",
  },
  {
    icon: "/share.svg",
    key: "share",
  },
  {
    icon: "/external-link.svg",
    key: "redirect",
  },
  {
    icon: "/more.svg",
    key: "share",
  },
];

export const navigationItems = [
  {
    icon: "/home.svg",
    label: "Scroll",
    active: true,
  },
  {
    icon: "/project.svg",
    label: "Projects",
  },
  {
    icon: "/message.svg",
    label: "Inbox",
  },
  {
    icon: "/suitcase.svg",
    label: "Jobs",
  },
  {
    icon: "/search.svg",
    label: "Search",
  },
  {
    icon: "/network.svg",
    label: "My Network",
    desktopOnly: true,
  },
];
