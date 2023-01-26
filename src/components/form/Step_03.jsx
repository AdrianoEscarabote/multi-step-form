import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Step3Styled from "../../StyledComponents/form_style/Step3Styled";
import { useSetInfo } from "../../context";
import { useInfo } from "../../context";

export default function Step03({ handleColorSteps }) {
  
  useEffect(() => {
    handleColorSteps(2);
  }, []);

  const effectRan = useRef(false);
  const [checked, setChecked] = useState("");
  const [target, setTarget] = useState("");
  const setInfo = useSetInfo();
  const getInfo = useInfo();
  const [onlinePrice, setOnlinePrice] = useState("");
  const [largerPrice, setLargerPrice] = useState("");
  const [customizablePrice, setCustomizablePrice] = useState("");
  const [labelOnline, setLabelOnline] = useState("online");
  const [labelStorage, setLabelStorage] = useState("storage");
  const [labelCustomizable, setLabelCustomizable] = useState("customizable");

  useEffect(() => {
    if (getInfo.type === "monthly") {
      setOnlinePrice("+$1/mo");
      setLargerPrice("+$2/mo");
      setCustomizablePrice("+$3/mo");
    } else {
      setOnlinePrice("+$10/yr");
      setLargerPrice("+$20/yr");
      setCustomizablePrice("+$30/yr");
    };
  }, [])

  const handleClassChange = (ev) => {
    if (ev === "online" || ev === "online checked") {
      ev === "online checked" ? setLabelOnline("online") : setLabelOnline("online checked")
    } 
    if (ev === "storage" || ev === "storage checked") {
      ev === "storage checked" ? setLabelStorage("storage") : setLabelStorage("storage checked")
    }
    if (ev === "customizable" || ev === "customizable checked") {
      ev === "customizable checked" ? setLabelCustomizable("customizable") : setLabelCustomizable("customizable checked")
    }
  }

  useEffect(() => {
    if (effectRan.current === true) {
    }
    return () => {
      effectRan.current = true
    }
  }, [checked]);

  const handleClick = () => {
    /* if (target) {
      setInfo(prevState => {
        return {
          ...prevState, 
          addOns: [...addOns].push(target)
        };
      });
    }; */
  }

  return (
    <Step3Styled>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <form noValidate>
        <fieldset>
          <legend className="sr-only">Select add-ons, Add-ons help enhance your gaming experience.</legend>

          <section className="check">

            <label htmlFor="online_service" className={labelOnline}>

              <input type="checkbox" name="online_service" id="online_service" onClick={(e) => {
                handleClassChange(e.currentTarget.parentElement.className)
              }} onChange={(e) => {
                setTarget(e.target)
              }}/>

              <div className="details">
                <p>Online service</p>
                <p className="info">Access to multiplayer games</p>
              </div>

              <p className="price">{onlinePrice}</p>
            </label>

            <label className={labelStorage}  htmlFor="larger_storage">

              <input type="checkbox" name="larger_storage" id="larger_storage" onClick={(e) => {
                handleClassChange(e.currentTarget.parentElement.className)
              }} onChange={(e) => {
                setTarget(e.target)
              }}/>

              <div className="details">
                <p>Larger storage</p>
                <p className="info">Extra 1TB of cloud save</p>
              </div>

              <p className="price">{largerPrice}</p>
            </label>

            <label htmlFor="customizable" className={labelCustomizable}>

              <input type="checkbox" name="customizable" id="customizable" onClick={(e) => {
                handleClassChange(e.currentTarget.parentElement.className)
              }} onChange={(e) => {
                setTarget(e.target)
              }}/>

              <div className="details">
                <p>Customizable Profile</p>
                <p className="info">Custom theme on your profile</p>
              </div>

              <p className="price">{customizablePrice}</p>
            </label>
          </section>

          <div className="link-router">
            <Link to="/plan" onClick={() => {
              handleClick()
            }}>Go Back</Link>
            <Link to="/finishing" onClick={() => {
              handleClick()
            }}> Next Step </Link>
          </div>

        </fieldset>
      </form>
    </Step3Styled>
  );
};