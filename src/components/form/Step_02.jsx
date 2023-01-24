import Step2Styled from "../../StyledComponents/form_style/Step2Styled";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../assets/images/icon-advanced.svg";
import iconPro from "../../assets/images/icon-pro.svg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSetInfo } from "../../context";
import { useInfo } from "../../context";

export default function Step02({ handleColorSteps }) { 

  const effectRan = useRef(false);
  const [select, setSelect] = useState("");
  const setInfo = useSetInfo();
  const getInfo = useInfo();

  useEffect(() => {
    handleColorSteps(1);
  }, []);

  useEffect(() => {
    if (getInfo.plan)
      setSelect(getInfo.plan);

    if (getInfo.type === "monthly") {
      setTarget(false)
    } else if (getInfo.type === "yearly") {
      setTarget(true)
    } else {
      setTarget(false)
    }
  }, [])
  
  useEffect(() => {
    if (effectRan.current === true) {
      document.querySelectorAll("label").forEach(element => element.classList.remove("selected"));

      try {
        document.querySelector(`.${select}`).classList.add("selected");
      } catch (e) {
        console.log(e)
      }
    }
    return () => {
      effectRan.current = true
    }
  }, [select])

  const [target, setTarget] = useState("");

  useEffect(() => {
    if (effectRan.current === true) {
      if (target) {
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
    return () => {
      effectRan.current = true
    }
  }, [target]);

  const getIsFormValid = () => {
    return select
  }

  const handleClick = () => {
    if (target) {
      setInfo(prevState => {
        return {...prevState, plan: select, type: "yearly"}
      })
    } else {
      setInfo(prevState => {
        return {...prevState, plan: select, type: "monthly"}
      })
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
                setSelect(e.currentTarget.parentElement.className)
              }}/>
            </label>

            <label htmlFor="advanced" className="advanced">
              <img src={iconAdvanced} alt="" aria-hidden="true" />

              <p>Advanced
                <span className="price_advanced">$12/mo</span>
                <span className="yearly">2 months free</span>
              </p>
              <input type="radio" name="plan" id="advanced" onClick={(e) => {
                setSelect(e.currentTarget.parentElement.className)
              } }/>
            </label>

            <label htmlFor="pro" className="pro">
              <img src={iconPro} alt="" aria-hidden="true" />

              <p>Pro
                <span className="price_pro">$15/mo</span>
                <span className="yearly">2 months free</span>
              </p>
              <input type="radio" name="plan" id="pro" onClick={(e) => {
                setSelect(e.currentTarget.parentElement.className)
              } }/>
            </label>
          </section>

          <div className="switch__container">
            <span className="mon_plan active_radio">Monthly</span>
            <input checked={target} id="switch-shadow" className="switch switch--shadow" type="checkbox" onChange={(e) => {
              setTarget(e.target.checked)
            }} />
            <label htmlFor="switch-shadow"></label>
            <span className="year_plan">Yearly</span>
          </div>

          <div className="link-router">
            <Link to="/" onClick={() => handleClick()} className="back">Go Back</Link>
            <Link to="/contact" className={getIsFormValid() ? "link" : "link disabled"} onClick={() => handleClick()}>Next Step</Link>
          </div>
        </fieldset>

      </ form>
    </Step2Styled>
  )
}