import Step2Styled from "../../StyledComponents/form_style/Step2Styled";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../assets/images/icon-advanced.svg";
import iconPro from "../../assets/images/icon-pro.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Step02(props) {
  
  const [select, setSelect] = useState("");

  useEffect(() => {

    document.querySelectorAll("label").forEach(element => element.classList.remove("selected"));

    console.log(select)

  }, [select])

  useEffect(() => {
    props.handleColorSteps(1);
  }, []);

  const handleRadio = (ev) => {
    console.log(ev.target.checked)
    if (ev.target.checked) {
      document.querySelector("form").classList.add("plans_yearly")
      document.querySelector(".price_arcade").innerHTML = "$90/yr"
      document.querySelector(".price_advanced").innerHTML = "$120/yr"
      document.querySelector(".price_pro").innerHTML = "$150/yr"

      document.querySelector(".year_plan").classList.add("active_radio")
      document.querySelector(".mon_plan").classList.remove("active_radio")

    } else {
      document.querySelector("form").classList.remove("plans_yearly")
      document.querySelector(".price_arcade").innerHTML = "$9/mo"
      document.querySelector(".price_advanced").innerHTML = "$12/mo"
      document.querySelector(".price_pro").innerHTML = "$15/mo"

      document.querySelector(".year_plan").classList.remove("active_radio")
      document.querySelector(".mon_plan").classList.add("active_radio")
    }
  }


  return (
    <Step2Styled>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <form >
        <fieldset>
          <legend className="sr-only">Select your plain, you have the option of monthly or yearly billing.</legend>

          <section className="plans">

            <label htmlFor="arcade" className="arcade">
              <img src={iconArcade} alt="" aria-hidden="true" />

              <p>Arcade
                <span className="price_arcade">$9/mo</span>
                <span className="yearly">2 months free</span>
              </p>
              <input type="radio" name="plan" id="arcade" onClick={(e) => {
                setSelect(e.currentTarget.parentElement)
              }}/>
            </label>

            <label htmlFor="advanced" className="advanced">
              <img src={iconAdvanced} alt="" aria-hidden="true" />

              <p>Advanced
                <span className="price_advanced">$12/mo</span>
                <span className="yearly">2 months free</span>
              </p>
              <input type="radio" name="plan" id="advanced" onClick={(e) => {
                setSelect(e.currentTarget.parentElement)
              } }/>
            </label>

            <label htmlFor="iconPro" className="iconPro">
              <img src={iconPro} alt="" aria-hidden="true" />

              <p>Pro
                <span className="price_pro">$15/mo</span>
                <span className="yearly">2 months free</span>
              </p>
              <input type="radio" name="plan" id="iconPro" onClick={(e) => {
              setSelect(e.currentTarget.parentElement)
              } }/>
            </label>
          </section>

          <div className="switch__container">
            <span className="mon_plan active_radio">Monthly</span>
            <input id="switch-shadow" className="switch switch--shadow" type="checkbox" />
            <label htmlFor="switch-shadow"></label>
            <span className="year_plan">Yearly</span>
          </div>

          <div className="link-router">
            <Link to="/" className="back">Go Back</Link>
            <Link to="/contact">Next Step</Link>
          </div>
        </fieldset>

      </ form>
    </Step2Styled>
  )
}