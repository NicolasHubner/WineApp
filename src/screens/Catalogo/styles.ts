import styled from 'styled-components/native';


export const CardView = styled.TouchableOpacity`
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #FFFFFF;
  height: 348px;
  margin-bottom: 8px;
  border-radius: 4px;
  padding-top: 15px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

`
export const WineImage = styled.Image`
  width: 100px;
  height: 200px;
`
export const StickImage = styled.Image`
  position: relative;
  bottom: 175px;
  right: 60px;

`
export const MemberPrice = styled.Text`
  font-family: 'Lato';
  width: 35px;
  /* height: 2px; */
  font-size: 10px;
  font-weight: 300;
  text-align: center;
`
export const TtitleText = styled.Text`
  width: 90%;
  font-family: 'Lato';
  text-align: center;
  margin-bottom: 12px;
  font-weight: 700;
  line-height: 17px;
`
export const ViewPriceBoth = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-evenly;
  /* margin-top: 5px; */
  margin-bottom: 5px;
  align-items: center;
`
export const TextNoMember = styled.Text`
  font-size: 11px;
  font-family: 'Lato';
  font-weight: 400;
  color: #888888;
`
export const PriceMemberPink = styled.Text`
  font-size: 18px;
  font-family: 'OpenSans';
  color: #C81A78;
  font-weight: 700;
`
export const PriceStrached = styled.Text`
  font-family: 'Lato';
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  align-items: flex-end;
  color: #888888;
  text-decoration: line-through;
`
export const Discount = styled.Text`
  background-color: #F79552;
  border-radius: 2px;
  width: 65px;
  height: 22px;
  color: white;
  text-align: center;
  padding: 1px 4px 1px 4px;
  /* align-items: center;
  justify-content: center; */
`
export const CounterItems = styled.Text`
  margin-left: 30px;
  font-family: 'NeoSans';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #555555;
`
export const InputSection = styled.View`
flex-direction: row;
justify-content: flex-start;
align-items: center;
/* border-width: 0.5;
border-color: black; */
height: 40px;
border-radius: 5px;
padding: 10px;
background-color: #EAEAEA;
margin: 0 auto;
margin-top: 32px;
width: 90%;
margin-bottom: 24px;
`

export const CardContainer = styled.View`
  height: 450px;
  width: 180px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* text-align: center; */
  /* flex: 1; */
`
