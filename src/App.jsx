import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const { register, watch, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const moreDetail = watch("moreDetail");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input placeholder="Bill" {...register("firstName")} />
      <label htmlFor="lastName">Last Name</label>
      <input placeholder="Luo" {...register("lastName")} />
      <label htmlFor="email">Email</label>
      <input
        placeholder="bluebill1049@hotmail.com"
        type="email"
        {...register("email")}
      />
      <label htmlFor="lastName">More Details</label>
      <input type="checkbox" {...register("moreDetail")} />

      {moreDetail && (
        <div>
          <label>Interests</label>
          <input type="text" {...register("Interests")} />
        </div>
      )}
      <input type="submit" />
    </form>
  );
}

export default App;