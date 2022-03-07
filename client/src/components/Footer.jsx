import styled from "styled-components";
import '../reset.css'




const Footer = () => {
  return (
    <Container className="floating">
      <div className="center">
        <Wrapper>
        <Top>
        <List>
          <ListItem>CONTACT US</ListItem>
          <ListItem>ABOUT</ListItem>
          <ListItem>RETURNS & SHIPPING</ListItem>
          <ListItem>TERMS & CONDITION</ListItem>
        </List>
      </Top>
      <Bottom>
        <Desc>We Accept</Desc>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Bottom>
        </Wrapper>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #000;
  color: #fff;
  width:100%;
  overflow: hidden;

`;
const Wrapper = styled.div`
  width:100vw;
  display: flex;
  height: 30vh;
  flex-direction: column;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

`
const List = styled.ul`
  display: flex;
  list-style-type: none;
`
const ListItem = styled.li`
padding: 0 50px;
`
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`
const Desc = styled.p`
 font-size: 14px;
 margin-right: 20px;
`
const Payment = styled.img`

`
export default Footer;


