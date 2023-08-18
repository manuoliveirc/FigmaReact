import * as S from "./styles";
export interface ICard {
  data: string
  titulo: string
  mensagem: string
}
export const Card = ({  }: ICard) => {
  return (
    <S.Aside>
      <p>  Visitei a cafeteria Pão de açúcar-Unidade II e o café e quitandas são muito gostosos, o lugar é muito bonito e confortável, porém o atendimento deixou a desejar.</p>
    </S.Aside>
  );
};
