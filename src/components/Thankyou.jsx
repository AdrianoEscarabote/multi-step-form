import { useEffect } from "react"
import icon_thanks from "../assets/images/icon-thank-you.svg"
import Thank_youStyled from "../StyledComponents/Thank_youStyled"

export default function Thankyou({ handleColorSteps }) {
  useEffect(() => {
    handleColorSteps(3)
  }, [])

  return (
    <Thank_youStyled>
      <img src={icon_thanks} alt="" aria-hidden="true" />
      <h2>Thank you!</h2>
      <p>Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.</p>
    </Thank_youStyled>
  )
}