import Step01 from "./form/Step_01";
import Step02 from "./form/Step_02";
import Step03 from "./form/Step_03";
import { Link, Route, Routes } from "react-router-dom";

export default function Form({ handleColorSteps }) {

  return (
    //<Step01 handleColorSteps={props.handleColorSteps} />
    <>
      <Routes>
        <Route path="/" element={<Step01 handleColorSteps={handleColorSteps}/>} />
        <Route path="/plan" element={<Step02 handleColorSteps={handleColorSteps} />} />
        <Route path="/contact" element={<Step03 handleColorSteps={handleColorSteps}/>} />
      </Routes>
    </>
  )
};