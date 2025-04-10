import React from "react";
import { useFormik } from "formik";
import contactformShema from "../shemas/ContactShema";
export default function Contact() {
  const submit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: contactformShema,
    onSubmit: submit,
  });
  return (
    <div className="form-container flex flex-col justify-center items-center bg-green-800  text-green-800 font-bold align-center h-dvh w-full">
      <h1 className="text-3xl mb-3">Contact US</h1>
      <form
        action=""
        className="flex flex-col gap-2 text-green-800"
        onSubmit={handleSubmit}
      >
        <div>
          <label>Your Name</label>
          <input
            name="name"
            type="text"
            className="p-2 outline-none border-b-1 w-full "
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-800 font-semibold">{errors.name}</p>
          )}
        </div>
        <div>
          <label>E mail</label>
          <input
            name="email"
            type="email"
            className="p-2 outline-none border-b-1 w-full "
            placeholder="E-Mail"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-800 font-semibold">{errors.email}</p>
          )}
        </div>
        <div>
          <label>Phone</label>
          <input
            name="phone"
            type="tel"
            className="p-2 outline-none border-b-1 w-full "
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-800 font-semibold">{errors.phone}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label>Message</label>
          <textarea
            name="message"
            id="message"
            className="min-h-[150px] rounded p-2 font-thin text-red-950 outline-none border-3 border-green-800 "
            placeholder="Please  write your message."
            value={values.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-800 font-semibold">{errors.message}</p>
          )}
        </div>

        <button
          className="bg-red-300 text-white font-thin p-2 mt-2 rounded-lg w-full"
          type="submit"
        >
          Contact
        </button>
      </form>
    </div>
  );
}
