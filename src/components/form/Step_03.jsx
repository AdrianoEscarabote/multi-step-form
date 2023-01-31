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
        document.getElementById(`${element.name}`).classList.add("checked");
        document.getElementById(`${element.name}`).firstChild.checked = "true"
      })
    }

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

  const [classToRemove, setClassToRemove] = useState("");
  const [changeClassLabel, setChangeClassLabel] = useState("");


  // usar mais estados!

  




  const plansSelected = [];
  const formattedPlans = [];

  const [condition, setCondition] = useState("");
  const [getId, setGetId] = useState("");

 /*  useEffect(() => {
    const getIds = document.querySelectorAll("label.checked").forEach(element => element.id)
    handleClick([...getIds])
  }, [getId]) */

  const handleClick = (elementId) => {

    const plans = ["Customizable profile", "Online service", "Larger storage"]
    
    document.querySelectorAll("label.checked").forEach(element => {
      if (plans.includes(element.id)) {

      plansSelected.push(element.id)

      if (plansSelected.includes("Customizable profile")) {
        formattedPlans.push({name: "Customizable profile", price: customizablePrice.price, type: customizablePrice.type})
        setInfo(prevState => {
          return {
            ...prevState,
            addOns: formattedPlans
          }
        })
      } 
      
      if (plansSelected.includes("Online service")) {
        formattedPlans.push({name: "Online service", price: onlinePrice.price, type: onlinePrice.type})
        setInfo(prevState => {
          return {
            ...prevState,
            addOns: formattedPlans
          }
        })
      } 

      if (plansSelected.includes("Larger storage")) {
        formattedPlans.push({name: "Larger storage", price: largerPrice.price, type: largerPrice.type})
        setInfo(prevState => {
          return {
            ...prevState,
            addOns: formattedPlans  
          }
        })
      }
     
      /* alert("entrei no certo que você queria!")
      formattedPlans = []
      setInfo(prevState => {
        return {
          ...prevState,
          addOns: formattedPlans
        }
      }) */
      } 
    })
  }

  const [validateButtonNext, setValidateButtonNext] = useState(false);

  useEffect(() => {
    setValidateButtonNext(!document.querySelectorAll("label.checked").length <= 0)
  }, [condition]) 

  const getIsFormValid = () => {
    return validateButtonNext
  }

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
                removeClass(e.currentTarget.parentElement.className)
              }}/>

              <div className="details">
                <p>Online service</p>
                <p className="info">Access to multiplayer games</p>
              </div>

              <p className="price">+${onlinePrice.price}/{onlinePrice.type}</p>
            </label>

            <label className={labelStorage}  htmlFor="larger_storage" id="Larger storage">

              <input type="checkbox" name="larger_storage" id="larger_storage" onClick={(e) => {
                removeClass(e.currentTarget.parentElement.className)
              }}/>

              <div className="details">
                <p>Larger storage</p>
                <p className="info">Extra 1TB of cloud save</p>
              </div>

              <p className="price">+${largerPrice.price}/{largerPrice.type}</p>
            </label>

            <label htmlFor="customizable" className={labelCustomizable} id="Customizable profile">

              <input type="checkbox" name="customizable" id="customizable" onClick={(e) => {
                removeClass(e.currentTarget.parentElement.className)
              }}/>

              <div className="details">
                <p>Customizable Profile</p>
                <p className="info">Custom theme on your profile</p>
              </div>

              <p className="price">+${customizablePrice.price}/{customizablePrice.type}</p>
            </label>
          </section>

          <div className="link-router">
            <Link to="/plan" className="back" onClick={() => handleClick()}>Go Back</Link>
            <Link to="/finishing" onClick={() => handleClick()} className={getIsFormValid() ? "link" : "link disabled"}> Next Step </Link>
          </div>

        </fieldset>
      </form>
    </Step3Styled>
  );
};