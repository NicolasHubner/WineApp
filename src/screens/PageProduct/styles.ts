import styled from 'styled-components/native';


// Estilização da Imagem do Vinho
export const WineImage = styled.Image`
  width: 220px;
  height: 334px;
`

// Estilização do Título do Vinho
export const WineTitle = styled.Text`
  font-family: sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;

`
// Estilização em FlexBox dos detalhes do Vinho selecionado
export const ContainerInfo = styled.View`
  flex-direction: row;
  width: 70%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 7px;
`

// Estilização para container e itens sobre a Descrição

export const ContainerDescription = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  margin-top: 32px;
  margin-bottom: 32px;
`
export const TitleDescription = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  font-family: sans-serif;
  margin-bottom: 9px;
`
export const Description = styled.Text`
  font-size: 16px;
  font-weight: 400;
  font-family: sans-serif;
`

// Estilização para parte final(Preço e Botão de adicionar) da Página do Produto

export const ContainerPriceAdd = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.0627185);
`
//a) Apenas o Preço e seus itens

export const ContainerPrice = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`
export const PriceNoMember = styled.Text`
  font-size: 10px;
  font-weight: 700;
  font-family: sans-serif;
`
export const PriceMemberPink = styled.Text`
  font-size: 20px;
  font-weight: 700;
  font-family: sans-serif;
  line-height: 28px;
  color: #C81A78;
`
export const PriceTotal = styled.Text`
  color: #555555;
  font-size: 13px;
  font-family: sans-serif;
  font-weight: 700;
  line-height: 20px;
  text-decoration-line: line-through;
`
export const Discount = styled.Text`
  background-color: #F26649;
  border-radius: 2px;
  width: 52px;
  height: 16px;
  font-weight: 700;
  line-height: 16px;
  font-size: 10px;
  color: white;
  text-align: center;
  padding: 1px 4px 1px 4px;
  margin-top: -18px;
`