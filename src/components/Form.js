import React, { useState } from "react";
import Editor from "./Editor";

const Form = ({ onSubmit }) => {
  const [form, setForm] = useState({});
  const setFormValue = (key) => (e) =>
    setForm({
      ...form,
      [key]: e.target.value,
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(form);
    onSubmit(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="html">
        <div>html:</div>
        <Editor form={form} field="html" setFormValue={setFormValue} />

        <div>css:</div>
        <Editor form={form} field="css" setFormValue={setFormValue} />

        <div>js:</div>
        <Editor form={form} field="js" setFormValue={setFormValue} />
      </label>
      <button>codepan</button>
    </form>
  );
};

export default Form;
