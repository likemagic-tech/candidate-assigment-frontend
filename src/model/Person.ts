export interface SalaryProps {
  amount: string,
  currency: string,
}

export interface Person {
  name: string,
  birthdate: string,
  gender: string,
  salary: SalaryProps,
}

export interface PersonTableProps {
  persons: Person[];
  onDeletePerson: (index: number) => void;
}

export interface PersonFormProps {
  onAddPerson: (person: Person) => void;
}