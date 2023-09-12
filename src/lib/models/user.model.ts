export const Gender = {
    MALE: 'male',
    FEMALE: 'female',
    UNISEX: 'unisex'
} as const;

export type Genders = keyof typeof Gender;
export type Gender = (typeof Gender)[Genders];

export const Currency = {
    CHF: 'chf',
    EUR: 'eur'
} as const;

export type Currencies = keyof typeof Currency;
export type Currency = (typeof Currency)[Currencies];

export interface User {
    id: string;
    name: string;
    birthdate: Date | null;
    gender?: Gender;
    salary: number;
    currency: Currency
}
