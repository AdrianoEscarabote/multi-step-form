import Form from "./components/Form";
import Thankyou from "./components/Thankyou";
import Article from "./StyledComponents/Article";

export default function App() {
  return (
    <Article>
      <section className="steps">
        <div className="step">
          <p className="number-step">1</p>
          <div className="info">
            <p>Step 1</p>
            <p>Your info</p>
          </div>
        </div>
        <div className="step">
          <p className="number-step">2</p>
          <div className="info">
            <p>Step 3</p>
            <p>Select plan</p>
          </div>
        </div>
        <div className="step">
          <p className="number-step">3</p>
          <div className="info">
            <p>Step 3</p>
            <p>Add-ons</p>
          </div>
        </div>
        <div className="step">
          <p className="number-step">4</p>
          <div className="info">
            <p>Step 4</p>
            <p>Summary</p>
          </div>
        </div>
      </section>
      <Form />
      {/* <Thankyou /> */}
    </Article>
  )
}