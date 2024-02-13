import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input placeholder="bill" {...register("firstName")} />

      <label htmlFor="lastName">Last Name</label>
      <input placeholder="luo" {...register("lastName")} />

      <label htmlFor="email">Email</label>
      <input
        placeholder="bluebill1049@hotmail.com"
        type="email"
        {...register("email")}
      />

      <label>Is developer?</label>
      <input type="checkbox" {...register("isDeveloper")} />

      <label>Age group</label>
      <select {...register("ageGroup")}>
        <option value="0">0 - 1</option>
        <option value="1">1 - 100</option>
      </select>

      <label>Sex</label>
      <input type="radio" {...register("sex")} value="male" />
      <input type="radio" {...register("sex")} value="female" />

      <button
        type="button"
        onClick={() => {
          setValue("firstName", "Set value by action");
          setValue("ageGroup", "1");
          setValue("isDeveloper", true);
          setValue("sex", "male");
        }}
      >
        Set All Values
      </button>
      <input type="submit" />
    </form>
  );
}

export default App;