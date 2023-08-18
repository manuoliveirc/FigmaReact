import * as S from './styles'
import Coffee from "../../assets/image 8.png"


export function Home() {
  return (
    <>
      <S.Section>
        <img src={Coffee} alt="Café ilustrativo" />
      

        <main>
          <h1>Seja bem-vindo(a)!</h1>
          <br />
          <h2>Você é daquelas pessoas que não vai a lugar nenhum sem ler alguma resenha antes? Então veio ao lugar
            certo!<br /> Somos um blog para compartilhar suas indicações e experiências em cafeterias da região
            sul
            mineira. Faça um bom proveito e escolha o lugar que atenderá às suas expectativas. </h2>
        </main>
      </S.Section>
    </>

  )
}
