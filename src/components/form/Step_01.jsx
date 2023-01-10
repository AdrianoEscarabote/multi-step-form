import Step1Styled from "../../StyledComponents/form_style/Step1Styled";
import { Buttons } from "../shared/Buttons";
import { useState } from "react";

export default function Step01() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("funcionando!");
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const getIsFormValid = () => {
    return (
      name &&
      validateEmail(email)
    );
  };

  return (
    <Step1Styled>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="sr-only">Enter your name, email and phone number!</legend>

          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="e.g. Stephen King" onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="phone">Phone Number</label>
          <input type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" />

          <Buttons valid={!getIsFormValid()} />

        </fieldset>
      </form>

    </Step1Styled>
  )
}