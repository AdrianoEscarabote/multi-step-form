import { useEffect } from "react";
import { Link } from "react-router-dom";
import Step3Styled from "../../StyledComponents/form_style/Step3Styled";

export default function Step03({ handleColorSteps }) {
  
  useEffect(() => {
    handleColorSteps(2)
  }, [])

  useEffect(() => {
    document.querySelectorAll("label").forEach(element => {
      element.addEventListener("click", () => {
        if (element.className = "checked") {
          element.classList.remove("checked")
        } else {
          element.classList.add("checked")
        }
      })
    })
  }, [])

  return (
    <Step3Styled>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <form noValidate>
        <fieldset>
          <legend className="sr-only">Select add-ons, Add-ons help enhance your gaming experience.</legend>

          <section className="check">

            <label htmlFor="online_service">

              <input type="checkbox" name="online_service" id="online_service" />

              <div className="details">
                <p>Online service</p>
                <p className="info">Access to multiplayer games</p>
              </div>

              <p className="price">+$1/mo</p>
            </label>

            <label htmlFor="larger_storage">

              <input type="checkbox" name="larger_storage" id="larger_storage" />

              <div className="details">
                <p>Larger storage</p>
                <p className="info">Extra 1TB of cloud save</p>
              </div>

              <p className="price">+$2/mo</p>
            </label>

            <label htmlFor="customizable">

              <input type="checkbox" name="customizable" id="customizable" />

              <div className="details">
                <p>Customizable Profile</p>
                <p className="info">Custom theme on your profile</p>
              </div>

              <p className="price">+$2/mo</p>
            </label>
          </section>

          <div className="link-router">
            <Link to="/plan">Go Back</Link>
            <Link to="/finishing"> Next Step </Link>
          </div>

        </fieldset>
      </form>
    </Step3Styled>
  )
}