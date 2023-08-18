import * as S from "./styles"
import Logo from "../../assets/image 1.png"
import Name from "../../assets/image 6.png"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <img src={Name} alt="Nome" />
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/list">Review</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}