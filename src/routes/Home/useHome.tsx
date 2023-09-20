import { useMemo, useState } from "react";
import { Currency, Gender, Person, PersonTableData } from "../../types";
import Button from "../../components/Button";

const genderTranslation = {
  [Gender.MALE]: "Male",
  [Gender.FEMALE]: "Female",
  [Gender.UNISEX]: "Unisex",
};

export const useHome = () => {
  const [name, setName] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [gender, setGender] = useState<Gender | null>(null);
  const [salaryAmount, setSalaryAmount] = useState<string>("");
  const [salaryCurrency, setSalaryCurrency] = useState<Currency>(Currency.CHF);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [persons, setPersons] = useState<Person[]>([]);
  const tableData = useMemo(
    () =>
      persons.reduce((acc: PersonTableData[], item, index) => {
        acc.push({
          name: item.name,
          birthdate: item.birthdate,
          gender: item.gender ? genderTranslation[item.gender] : "",
          salary: `${item.salaryAmount} ${item.salaryCurrency}`,
          delete: (
            <Button severity="danger" onClick={() => onDeletePerson(index)}>
              Delete
            </Button>
          ),
        });
        return acc;
      }, []),
    // eslint-disable-next-line
    [persons]
  );

  const onAddNewPerson = () => {
    if (!name || !birthdate || !salaryAmount || !salaryAmount) {
      setErrorMessage("Please fill all fields");
      return;
    }

    setErrorMessage("");
    const newPersons: Person[] = [
      ...persons,
      { name, birthdate, gender, salaryAmount, salaryCurrency },
    ];
    setPersons(newPersons);
    setName("");
    setBirthdate("");
    setGender(null);
    setSalaryAmount("");
    setSalaryCurrency(Currency.CHF);
  };

  const onDeletePerson = (index: number) => {
    const newPersons = [
      ...persons.slice(0, index),
      ...persons.slice(index + 1),
    ];
    setPersons(newPersons);
  };

  const today = new Date().toISOString().split("T")[0];

  return {
    name,
    birthdate,
    gender,
    salaryAmount,
    salaryCurrency,
    errorMessage,
    tableData,
    today,
    onAddNewPerson,
    setName,
    setBirthdate,
    setGender,
    setSalaryAmount,
    setSalaryCurrency,
  };
};
