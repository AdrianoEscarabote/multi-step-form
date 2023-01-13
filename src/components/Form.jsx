import Step01 from "./form/Step_01";
import Step02 from "./form/Step_02";
import Step03 from "./form/Step_03";

export default function Form(props) {
  
  return (
    // <Step01 handleColorStep={props.handleColorSteps(0)}/>
    // <Step02 handleColorStep={props.handleColorSteps(1)}/>
    <Step03 handleColorStep={props.handleColorSteps(2)}/>
  )
}