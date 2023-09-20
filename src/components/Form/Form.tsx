import React from "react";
import Button from "../Button";

export interface FormProps {
  className?: string;
  children: React.ReactNode;
  onSubmit: () => void;
}

const Form = ({ className, children, onSubmit }: FormProps) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className={className} onSubmit={onSubmitHandler}>
      <div>{children}</div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
