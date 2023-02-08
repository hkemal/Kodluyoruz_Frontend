import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <span>Please enter a name : </span>
      <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />

      <span>Please enter a surname : </span>
      <br />
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      <div>
        {form.name} {form.surname}
      </div>
    </div>
  );
}

export default InputExample;
