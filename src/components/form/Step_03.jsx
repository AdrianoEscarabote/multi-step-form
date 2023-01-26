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
  const [onlinePrice, setOnlinePrice] = useState({
    price: "",
    type: "",
  });
  const [largerPrice, setLargerPrice] = useState({
    price: "",
    type: "",
  });
  const [customizablePrice, setCustomizablePrice] = useState({
    price: "",
    type: "",
  });
  const [labelOnline, setLabelOnline] = useState("online");
  const [labelStorage, setLabelStorage] = useState("storage");
  const [labelCustomizable, setLabelCustomizable] = useState("customizable");

  useEffect(() => {
    if (getInfo.type === "monthly") {
      setOnlinePrice(prevState => {
        return {
          ...prevState,
          price: "1",
          type: "mo"
        }
      });

      setLargerPrice(prevState => {
        return {
          ...prevState,
          price: "2",
          type: "mo"
        }
      });
      setCustomizablePrice(prevState => {
        return {
          ...prevState,
          price: "3",
          type: "mo"
        }
      });
    } else {
      setOnlinePrice(prevState  => {
        return {
          ...prevState,
          price: "10",
          type: "yr",
        }
      });
      setLargerPrice(prevState => {
        return {
          ...prevState,
          price: "20",
          type: "yr"
        }
      });
      setCustomizablePrice(prevState => {
        return {
          ...prevState,
          price: "30",
          type: "yr",
        }
      })
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
  
  const plansSelected = []

  useEffect(() => {
    const plans = ["Customizable profile", "Online service", "Larger storage"]
  
    document.querySelectorAll("label.checked").forEach(element => {
      if (plans.includes(element.id)) {
        plansSelected.push(element.id)
      } else {
        return null
      }
    })
  
    if (plansSelected.includes("Customizable profile")) {
      console.log("Customizable Profile")
      setInfo(prevState => {
        return {
          ...prevState,
          addOns: {price: customizablePrice.price, type: customizablePrice.type}
        }
      })
    } 
    
    if (plansSelected.includes("Online service")) {
      console.log("entrei no Online")
      setInfo(prevState => {
        return {
          ...prevState,
          addOns: {price: onlinePrice.price, type: onlinePrice.type}
        }
      })
    } 

    if (plansSelected.includes("Larger storage")) {
      console.log("entrei no larger")
      setInfo(prevState => {
        return {
          ...prevState,
          addOns: {price: largerPrice.price, type: largerPrice.type}  
        }
      })
    }

    console.log("Planos selecionados: " + plansSelected)
    setTimeout(() => {
      console.log(getInfo.addOns)
    })
  
  }, [target])

  return (
    <Step3Styled>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>

      <form noValidate>
        <fieldset>
          <legend className="sr-only">Select add-ons, Add-ons help enhance your gaming experience.</legend>

          <section className="check">

            <label htmlFor="online_service" className={labelOnline} id="Online service">

              <input type="checkbox" name="online_service" id="online_service" onClick={(e) => {
                handleClassChange(e.currentTarget.parentElement.className)
              }} onChange={(e) => {
                setTarget(e.target)
              }}/>

              <div className="details">
                <p>Online service</p>
                <p className="info">Access to multiplayer games</p>
              </div>

              <p className="price">+${onlinePrice.price}/{onlinePrice.type}</p>
            </label>

            <label className={labelStorage}  htmlFor="larger_storage" id="Larger storage">

              <input type="checkbox" name="larger_storage" id="larger_storage" onClick={(e) => {
                handleClassChange(e.currentTarget.parentElement.className)
              }} onChange={(e) => {
                setTarget(e.target)
              }}/>

              <div className="details">
                <p>Larger storage</p>
                <p className="info">Extra 1TB of cloud save</p>
              </div>

              <p className="price">+${largerPrice.price}/{largerPrice.type}</p>
            </label>

            <label htmlFor="customizable" className={labelCustomizable} id="Customizable profile">

              <input type="checkbox" name="customizable" id="customizable" onClick={(e) => {
                handleClassChange(e.currentTarget.parentElement.className)
              }} onChange={(e) => {
                setTarget(e.target)
              }}/>

              <div className="details">
                <p>Customizable Profile</p>
                <p className="info">Custom theme on your profile</p>
              </div>

              <p className="price">+${customizablePrice.price}/{customizablePrice.type}</p>
            </label>
          </section>

          <div className="link-router">
            <Link to="/plan">Go Back</Link>
            <Link to="/finishing"> Next Step </Link>
          </div>

        </fieldset>
      </form>
    </Step3Styled>
  );
};