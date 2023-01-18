import Step01 from "./form/Step_01";
import Step02 from "./form/Step_02";
import Step03 from "./form/Step_03";

export default function Form(props) {
  
  return (
    // <Step01 handleColorSteps={props.handleColorSteps}/>
    <Step02 handleColorSteps={props.handleColorSteps}/>
    //<Step03 handleColorSteps={props.handleColorSteps}/>
  )
}