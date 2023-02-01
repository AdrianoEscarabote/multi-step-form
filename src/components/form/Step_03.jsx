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

    if (getInfo.addOns.length >= 1) {
      getInfo.addOns.forEach(element => {
        if (element.name === "Online service") {
          setLabelOnline("online checked")
          document.getElementById(`${element.name}`).firstChild.checked = true;
        };

        if (element.name === "Larger storage") {
          setLabelStorage("storage checked")
          document.getElementById(`${element.name}`).firstChild.checked = true;
        };

        if (element.name === "Customizable profile") {
          setLabelCustomizable("customizable checked")
          document.getElementById(`${element.name}`).firstChild.checked = true;
        };
      });
    } ;

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
      });
    };
  }, []);

  const handleChangeClass = (parent) => {
    if (parent.includes("online")) {
      parent === "online checked" ? setLabelOnline("online") : setLabelOnline("online checked");
    };

    if (parent.includes("storage")) {
      parent === "storage checked" ? setLabelStorage("storage") : setLabelStorage("storage checked");
    };

    if (parent.includes("customizable")) {
      parent === "customizable checked" ? setLabelCustomizable("customizable") : setLabelCustomizable("customizable checked");
    };
  };

  let plansSelected = [];
  let formattedPlans = [];
  const plans = ["Customizable profile", "Online service", "Larger storage"]

  const handleClick = () => {
    document.querySelectorAll("label.checked").forEach(element => {
      if (plans.includes(element.id)) {
        plansSelected.push(element.id);
      } 
    }) 
  
    if (plansSelected.includes("Customizable profile")) {
      formattedPlans.push({name: "Customizable profile", price: customizablePrice.price, type: customizablePrice.type});
      setInfo(prevState => {
        return {
          ...prevState,
          addOns: formattedPlans
        }
      });
    } ;
    
    if (plansSelected.includes("Online service")) {
      formattedPlans.push({name: "Online service", price: onlinePrice.price, type: onlinePrice.type});
      setInfo(prevState => {
        return {
          ...prevState,
          addOns: formattedPlans
        }
      });
    } ;

    if (plansSelected.includes("Larger storage")) {
      formattedPlans.push({name: "Larger storage", price: largerPrice.price, type: largerPrice.type});
      setInfo(prevState => {
        return {
          ...prevState,
          addOns: formattedPlans  
        }
      });
    };

    if (plansSelected.length === 0) {
      formattedPlans = [];
      setInfo(prevState => {
        return {
          ...prevState,
          addOns: formattedPlans
        }
      });
    };
  };

  const getIsFormValid = () => {
    if (labelOnline === "online checked" || labelStorage === "storage checked" || labelCustomizable === "customizable checked") {
      return true;
    } else {
      return false;
    };
  };

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
                handleChangeClass(e.currentTarget.parentElement.className)
              }}/>

              <div className="details">
                <p>Online service</p>
                <p className="info">Access to multiplayer games</p>
              </div>

              <p className="price">+${onlinePrice.price}/{onlinePrice.type}</p>
            </label>

            <label className={labelStorage}  htmlFor="larger_storage" id="Larger storage">

              <input type="checkbox" name="larger_storage" id="larger_storage" onClick={(e) => {
                handleChangeClass(e.currentTarget.parentElement.className)
              }}/>

              <div className="details">
                <p>Larger storage</p>
                <p className="info">Extra 1TB of cloud save</p>
              </div>

              <p className="price">+${largerPrice.price}/{largerPrice.type}</p>
            </label>

            <label htmlFor="customizable" className={labelCustomizable} id="Customizable profile">

              <input type="checkbox" name="customizable" id="customizable" onClick={(e) => {
                handleChangeClass(e.currentTarget.parentElement.className)
              }}/>

              <div className="details">
                <p>Customizable Profile</p>
                <p className="info">Custom theme on your profile</p>
              </div>

              <p className="price">+${customizablePrice.price}/{customizablePrice.type}</p>
            </label>
          </section>

          <div className="link-router">
            <Link to="/plan" className="back" aria-label="go back to the previous step" onClick={() => handleClick()}>Go Back</Link>
            <Link to="/finishing" aria-label={getIsFormValid() ? "go to the other section of the form!" : "" } aria-disabled={getIsFormValid() ? "false" : "true"} onClick={() => handleClick()} className={getIsFormValid() ? "link" : "link disabled"}> Next Step </Link>
          </div>

        </fieldset>
      </form>
    </Step3Styled>
  );
};