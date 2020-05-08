import React from "react";

import { useForm } from "react-hook-form";

const Order = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>name</label>
      <input name="name" defaultValue="" ref={register} />

      <input type="submit" />
    </form>
  );
};

export default Order;
