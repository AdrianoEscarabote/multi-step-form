import { BrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import Thankyou from "./components/Thankyou";
import Article from "./StyledComponents/Article";
import GlobalStyle from "./StyledComponents/global_style";
import { InfoProvider } from "./context";

export default function App() {

  const handleColorSteps = (num_param) => {
    for(let i = 1; i <= 4; i++) {
      document.querySelectorAll(`.number-step`).forEach(element => {
        element.classList.remove("active")
      })

      document.querySelectorAll(".number-step")[num_param].classList.add("active")
    } 
  };

  return (
    <InfoProvider value={{
      name: "",
      email: "",
      phone: "",
      plan: "",
      type: false
    }}>
      <GlobalStyle />
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
        {/* <Thankyou /> */}
      </Article>
    </InfoProvider>
  )
}
