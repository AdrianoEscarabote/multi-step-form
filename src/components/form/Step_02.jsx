import Step2Styled from "../../StyledComponents/form_style/Step2Styled";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../assets/images/icon-advanced.svg";
import iconPro from "../../assets/images/icon-pro.svg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSetInfo, useInfo } from "../../context";
export default function Step02({ handleColorSteps }) { 

  const effectRan = useRef(false);
  const [select, setSelect] = useState("");
  const setInfo = useSetInfo();
  const getInfo = useInfo();
  const [arcadePrice, setArcadePrice] = useState("$9/mo");
  const [advancedPrice, setAdvancedPrice] = useState("$12/mo");
  const [pricePro, setPricePro] = useState("$15/mo");

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
        setArcadePrice("$90/yr")
        setAdvancedPrice("$120/yr")
        setPricePro("$150/yr")
        document.querySelector(".year_plan").classList.add("active_radio")
        document.querySelector(".mon_plan").classList.remove("active_radio")
      } else {
        document.querySelector("form").classList.remove("plans_yearly")
        setArcadePrice("$9/mo")
        setAdvancedPrice("$12/mo")
        setPricePro("$15/mo")
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
    try { 
      const chosenPlan = document.querySelector("label.selected").className
      let priceChosenPlan = ""
  
      if (chosenPlan.includes("Pro")) {
        priceChosenPlan = pricePro
      } else if (chosenPlan.includes("Advanced")) {
        priceChosenPlan = advancedPrice
      } else {
        priceChosenPlan = arcadePrice
      }
      
      if (target) {
        setInfo(prevState => {
          return {...prevState, plan: select, type: "yearly", pricePlan: priceChosenPlan}
        })
      } else {
        setInfo(prevState => {
          return {...prevState, plan: select, type: "monthly", pricePlan: priceChosenPlan}
        })
      }
    } catch (e) {
      return null
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

            <label htmlFor="arcade" className="Arcade">
              <img src={iconArcade} alt="" aria-hidden="true" />

              <p>Arcade
                <span className="price_arcade">{arcadePrice}</span>
                <span className="yearly">2 months free</span>
              </p>
              <input type="radio" name="plan" id="arcade" onClick={(e) => { 
                setSelect(e.currentTarget.parentElement.className)
              }}/>
            </label>

            <label htmlFor="advanced" className="Advanced">
              <img src={iconAdvanced} alt="" aria-hidden="true" />

              <p>Advanced
                <span className="price_advanced">{advancedPrice}</span>
                <span className="yearly">2 months free</span>
              </p>
              <input type="radio" name="plan" id="advanced" onClick={(e) => {
                setSelect(e.currentTarget.parentElement.className)
              } }/>
            </label>

            <label htmlFor="pro" className="Pro">
              <img src={iconPro} alt="" aria-hidden="true" />

              <p>Pro
                <span className="price_pro">{pricePro}</span>
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
        </fieldset>

        <div className="link-router">
          <Link to="/" onClick={() => handleClick()} className="back">Go Back</Link>
          <Link to="/contact" className={getIsFormValid() ? "link" : "link disabled"} onClick={() => handleClick()}>Next Step</Link>
        </div>

      </ form>
    </Step2Styled>
  )
}