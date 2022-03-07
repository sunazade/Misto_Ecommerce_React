import { KeyboardBackspace } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
          <Back>
            <Link to="/">
              <KeyboardBackspace  style={{fontSize:"28px"}}/>
            </Link>
          </Back>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:#000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #000;
  border:1px solid lightgray;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color:#fff;
  text-align:center;
  margin-bottom:30px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
border: 0;
border-bottom: 1px solid #fff;
outline:none;
width:48%;
height:35px;
background-color: #000;
color:#fff;
font-size:16px;
padding-left:24px;
margin:5px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color:lightgray;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  font-size:20px;
  padding: 15px 20px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover{
  background-color:#2C3333;
  color:#fff;
 }
`;

const Back = styled.span`
color:#fff;
padding-top:20px;
`

export default Register;