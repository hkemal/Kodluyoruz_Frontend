import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function Signup() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" value={values.email} onChange={handleChange} />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="passwordConfirm">PasswordConfirm</label>
        <input
          name="passwordConfirm"
          value={values.passwordConfirm}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
        <br />
        <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default Signup;
