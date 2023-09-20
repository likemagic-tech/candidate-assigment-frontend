import React from "react";
import { useHome } from "./useHome";
import Form from "../../components/Form";
import Input from "../../components/Input";
import RadioButton from "../../components/RadioButton";
import { Currency, Gender } from "../../types";
import Dropdown from "../../components/Dropdown";
import Table from "../../components/Table";

const Home = () => {
  const {
    birthdate,
    name,
    gender,
    salaryAmount,
    salaryCurrency,
    errorMessage,
    tableData,
    today,
    setBirthdate,
    setName,
    setGender,
    setSalaryAmount,
    setSalaryCurrency,
    onAddNewPerson,
  } = useHome();
  return (
    <div>
      <Form className="mb-3" onSubmit={onAddNewPerson}>
        <Input
          className="mb-1"
          label="Name"
          type="text"
          required
          value={name}
          onChange={setName}
        />
        <Input
          className="mb-1"
          label="Birthdate"
          type="date"
          max={today}
          required
          value={birthdate}
          onChange={setBirthdate}
        />
        <RadioButton
          className="mb-1"
          label="Gender"
          value={gender}
          values={[
            { label: "male", value: Gender.MALE },
            { label: "female", value: Gender.FEMALE },
            { label: "unisex", value: Gender.UNISEX },
          ]}
          onChange={(value) => setGender(value as Gender)}
        />
        <div className="flex mb-1">
          <Input
            type="number"
            label="Expected Salary"
            value={salaryAmount}
            onChange={setSalaryAmount}
            required
          />
          :
          <Dropdown
            value={salaryCurrency}
            onChange={(value) => setSalaryCurrency(value as Currency)}
            options={[
              { label: "CHF", value: Currency.CHF },
              { label: "EUR", value: Currency.EUR },
            ]}
          />
        </div>
        {!!errorMessage && <div className="text-red">{errorMessage}</div>}
      </Form>
      <Table
        column={[
          { label: "Name", value: "name" },
          { label: "Gender", value: "gender" },
          { label: "Birthdate", value: "birthdate" },
          { label: "Salary", value: "salary" },
          { label: "", value: "delete" },
        ]}
        data={tableData}
      />
    </div>
  );
};

export default Home;
