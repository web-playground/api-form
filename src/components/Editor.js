const editor = (props) => {
  const { form, field, setFormValue } = props;
  return (
    <textarea
      className="outline-none border-solid border-blue-200 border-2 w-full focus:border-blue-400 h-32"
      name={field}
      id={field}
      onChange={setFormValue(field)}
    />
  );
};

export default editor;
