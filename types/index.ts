export enum Status {
  APPLIED = "applied",
  REJECTED = "rejected",
  SHORTLISTED = "shortlisted",
}

interface Action {
  by: string;
  on: Date;
}

interface File {
  name: string;
  url: string;
}

export interface Application {
  id: string;
  name: string | null;
  profilePhoto?: string;
  role: string | null;
  company: string | null;
  totalExperience: {
    years: number | null;
    months: number | null;
  };
  noticePeriod: number | null;
  holdingOffer: boolean | null;
  contact: {
    email: string | null;
    phone: string | null;
  };
  appliedOn: Date;
  status: Status;
  verified: boolean | null;
  rejected?: Action;
  is_external?: boolean;
  shortlisted?: Action;
  matched?: boolean;
  resume?: File;
}
