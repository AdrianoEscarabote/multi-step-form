import Step1Styled from "../../StyledComponents/form_style/Step1Styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Step01(props) {
  
  useEffect(() => {
    props.handleColorSteps(0);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  
  useEffect(() => {
    if (name) {
      document.querySelector(".message_name").classList.remove("error_message");
    } else {
      document.querySelector(".message_name").classList.add("error_message");
    };
  }, [name]);
  
  useEffect(() => {
    const valid = String(phone).match(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{3}$/);
    
    if (valid) {
      document.querySelector(".message_phone").classList.remove("error_message");
    } else {
      document.querySelector(".message_phone").classList.add("error_message");
    };
  }, [phone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("funcionando!");
  };

  const validateEmail = () => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleErrorEmail = () => {
    const emailValid = validateEmail(email);
    if (emailValid) {
      document.querySelector(".message_email").classList.remove("error_message");
    } else {
      document.querySelector(".message_email").classList.add("error_message");
    };
  };

  const getIsFormValid = () => {
    const valid = name && validateEmail(email) && phone;

    return (
      valid
    );
  };

  return (
    <Step1Styled>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form onSubmit={handleSubmit} noValidate>
        <fieldset>
          <legend className="sr-only">Enter your name, email and phone number!</legend>

          <div className="label_span">
            <label htmlFor="name">Name</label>
            <span className="message_name">This field is required</span>
          </div>

          <input type="text" name="name" id="name" placeholder="e.g. Stephen King" onChange={(e) => setName(e.target.value) } />

          <div className="label_span">
            <label htmlFor="email">Email Address</label>
            <span className="message_email">This field is required</span>
          </div>

          <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" onChange={(e) => {
            setEmail(e.target.value);
            handleErrorEmail();
          }} />

          <div className="label_span">
            <label htmlFor="phone">Phone Number</label>
            <span className="message_phone">This field is required</span>
          </div>

          <input type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" onChange={
            (e) => {
              setPhone(e.target.value);
            }
          } />

          <div className="link-router">
            <Link to="/plan" className="link">Next</Link>
          </div>

          {/* <Buttons valid={!getIsFormValid()} /> */}

        </fieldset>
      </form>

    </Step1Styled>
  );
};