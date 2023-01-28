import Step1Styled from "../../StyledComponents/form_style/Step1Styled";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useInfo, useSetInfo } from "../../context";

export default function Step01({ handleColorSteps }) {

  const getInfo = useInfo();
  const setInfo = useSetInfo();

  useEffect(() => {
    if (getInfo.name) {
      setName(getInfo.name)
      setEmail(getInfo.email)
      setPhone(getInfo.phone)
    }
  }, [])

  const handleClick = () => {
    setInfo(prevState => {
      return {
        ...prevState,
        name,
        email,
        phone,
      }
    })
  }

  const effectRan = useRef(false);
  
  useEffect(() => {
    handleColorSteps(0);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (effectRan.current === true) {
      if (name) {
        document.querySelector(".message_name").classList.remove("error_message");
        document.querySelector("#name").classList.remove("error_input");
      } else {
        document.querySelector("#name").classList.add("error_input");
        document.querySelector(".message_name").classList.add("error_message");
      };
    };
    return () => {
      effectRan.current = true;
    } ; 
  }, [name]);

  useEffect(() => {
    if (effectRan.current === true) {
      const valid = validatePhone(phone);
      
      if (valid) {
        document.querySelector("#phone").classList.remove("error_input");
        document.querySelector(".message_phone").classList.remove("error_message");
      } else {
        document.querySelector(".message_phone").classList.add("error_message");
        document.querySelector("#phone").classList.add("error_input");
      };
    }
    return () => {
      effectRan.current = true
    }
  }, [phone]);

  const validatePhone = (phone) => {
    return String(phone).match(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{3}$/);
  }; 

  useEffect(() => {
    if (effectRan.current === true) { 
      const emailValid = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      
      if (emailValid) {
        document.querySelector("#email").classList.remove("error_input");
        document.querySelector(".message_email").classList.remove("error_message");
      } else {
        document.querySelector("#email").classList.add("error_input");
        document.querySelector(".message_email").classList.add("error_message");
      };
    }
    return () => {
      effectRan.current = true
    }
  }, [email]);

  const getIsFormValid = () => {
    const valid = name && email && validatePhone(phone);

    return (
      valid
    );
  };

  return (
    <Step1Styled>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form noValidate>
        <fieldset>
          <legend className="sr-only">Enter your name, email and phone number!</legend>

          <div className="label_span">
            <label htmlFor="name">Name</label>
            <span className="message_name">This field is required</span>
          </div>

          <input type="text" value={name} name="name" id="name" placeholder="e.g. Stephen King" onBlur={(e) => setName(e.target.value) } onChange={e => setName(e.target.value) 
          } />

          <div className="label_span">
            <label htmlFor="email">Email Address</label>
            <span className="message_email">This field is required</span>
          </div>

          <input type="email" value={email} name="email" id="email" placeholder="e.g. stephenking@lorem.com" onChange={(e) => setEmail(e.target.value)} onClick={ (e) => setEmail(e.target.value) 
          }  />

          <div className="label_span">
            <label htmlFor="phone">Phone Number</label>
            <span className="message_phone">This field is required</span>
          </div>

          <input value={phone} type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" onChange={
            (e) => {
              setPhone(e.target.value);
            }
          } />
        </fieldset>
      </form>
      
      <div className="link-router">
        <Link to="/plan" className={getIsFormValid() ? "link" : "link disabled"} onClick={() => handleClick()}>Next Step</Link>
      </div>

    </Step1Styled>
  );
};