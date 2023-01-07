import Step1Styled from "../../StyledComponents/form_style/Step1Styled";
import {Buttons} from "../shared/Buttons";

export default function Step01() {
  return (
    <Step1Styled>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>

      <form novalidate>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="e.g. Stephen King" />


        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" />

        <label htmlFor="phone">Phone Number</label>
        <input type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" />

        <Buttons />
      </form>

    </Step1Styled>
  )
}