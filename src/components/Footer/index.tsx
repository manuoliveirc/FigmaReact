import * as S from "./styles"
import Insta from "../../assets/insta.svg"
import Facebook from "../../assets/fb.svg"

export function Footer() {
  return (
    <S.Footer>
       <img src={Insta} alt="Instagram" />
      <a href="https://facebook.com" target="_blank">
        <img src={Facebook} alt="Facebook" />
      </a>
    </S.Footer>
  )
}