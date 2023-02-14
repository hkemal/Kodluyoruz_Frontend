import "./App.css";

import { useFormik } from "formik";

function App() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
      gender: "female",
      hobbies: [],
      country: "Turkey",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input name="email" value={values.email} onChange={handleChange} />
        <br />
        <br />

        <span>
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={values.gender === "female"}
          />
        </span>
        <span>
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={values.gender === "male"}
          />
        </span>
        <br />
        <br />

        <div>
          Football
          <input
            type="checkbox"
            name="hobbies "
            value="Football"
            onChange={handleChange}
          />
        </div>
        <div>
          Cinema
          <input
            type="checkbox"
            name="hobbies "
            value="Cinema"
            onChange={handleChange}
          />
        </div>
        <div>
          Photography
          <input
            type="checkbox"
            name="hobbies "
            value="Photography"
            onChange={handleChange}
          />
        </div>

        <br />
        <br />
        <select name="country" value={values.country} onChange={handleChange}>
          <option value="Turkey">Turkey</option>
          <option value="England">England</option>
          <option value="USA">USA</option>
        </select>

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

export default App;
