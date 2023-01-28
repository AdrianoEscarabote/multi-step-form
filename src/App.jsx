import { BrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import Article from "./StyledComponents/Article";
import GlobalStyle from "./StyledComponents/global_style";
import { InfoProvider } from "./context";
import { useEffect, useState } from "react";

export default function App() {

  const [numElement, setNumElement] = useState(0);
  
  const handleColorSteps = (num_param) => {
    setNumElement(num_param);
  };

  useEffect(() => {
    document.querySelectorAll(`.number-step`).forEach(element => {
      element.classList.remove("active");
    });

    document.querySelectorAll(".number-step")[numElement].classList.add("active");
  }, [numElement]);

  return (
    <InfoProvider value={{
      name: "",
      email: "",
      phone: "",
      plan: "",
      type: "",
      pricePlan: "",
      addOns: "",
    }}>
      <GlobalStyle />
      <h1 className="sr-only">Welcome to the multi step form</h1>
      <Article>
        <section className="steps">
          <div className="step">
            <p className="number-step">1</p>
            <div className="info">
              <p className="step_num">Step 1</p>
              <p>Your info</p>
            </div>
          </div>
          <div className="step">
            <p className="number-step">2</p>
            <div className="info">
              <p className="step_num">Step 2</p>
              <p>Select plan</p>
            </div>
          </div>
          <div className="step">
            <p className="number-step">3</p>
            <div className="info">
              <p className="step_num">Step 3</p>
              <p>Add-ons</p>
            </div>
          </div>
          <div className="step">
            <p className="number-step">4</p>
            <div className="info">
              <p className="step_num">Step 4</p>
              <p>Summary</p>
            </div>
          </div>
        </section>
        <BrowserRouter>
          <Form handleColorSteps={handleColorSteps}/>
        </BrowserRouter>
      </Article>
    </InfoProvider>
  );
};