import Step2Styled from "../../StyledComponents/form_style/Step2Styled";
import { Buttons } from "../shared/Buttons";
import iconArcade from "../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../assets/images/icon-advanced.svg";
import iconPro from "../../assets/images/icon-pro.svg";

export default function Step02() {
  return (
    <Step2Styled>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      <form novalidate >

        <section className="plans">

          <label htmlFor="arcade">
            <img src={iconArcade} alt="" aria-hidden="true" />


            <p>Arcade
              <span>$9/mo</span>
            </p>
          </label>
          <input type="radio" name="plan" id="arcade" />

          <label htmlFor="advanced">
            <img src={iconAdvanced} alt="" aria-hidden="true" />

            <p>Advanced
              <span>$12/mo</span>
            </p>
          </label>
          <input type="radio" name="plan" id="advanced" />

          <label htmlFor="iconPro">
            <img src={iconPro} alt="" aria-hidden="true" />

            <p>Pro
              <span>$15/mo</span>
            </p>
          </label>
          <input type="radio" name="plan" id="iconPro" />
        </section>

        <div className="switch__container">
          <span>Monthly</span>
          <input id="switch-shadow" className="switch switch--shadow" type="checkbox" />
          <label htmlFor="switch-shadow"></label>
          <span>Yearly</span>
        </div>

        <Buttons />

      </ form>
    </Step2Styled>
  )
}