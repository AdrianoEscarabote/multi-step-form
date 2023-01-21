import Step01 from "./form/Step_01";
import Step02 from "./form/Step_02";
import Step03 from "./form/Step_03";
import { Route, Routes } from "react-router-dom";
import Step04 from "./form/Step_04";

export default function Form({ handleColorSteps }) {

  return (    
    <Routes>
      <Route path="/" element={<Step01 handleColorSteps={handleColorSteps}/>} />
      <Route path="/plan" element={<Step02 handleColorSteps={handleColorSteps} />} />
      <Route path="/contact" element={<Step03 handleColorSteps={handleColorSteps}/>} />
      <Route path="/finishing" element={<Step04 handleColorSteps={handleColorSteps} />} /> 
    </Routes>
  )
};