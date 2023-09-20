import { ReactNode } from "react";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  UNISEX = "UNISEX",
}

export enum Currency {
  CHF = "CHF",
  EUR = "EUR",
}

export type Person = {
  name: string;
  birthdate: string;
  gender: Gender | null;
  salaryAmount: string;
  salaryCurrency: Currency;
};

export type PersonTableData = {
  name: string;
  birthdate: string;
  gender: string;
  salary: string;
  delete: ReactNode;
};
