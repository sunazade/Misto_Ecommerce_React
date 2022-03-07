import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link to='/register'>
            <Desc>CREATE A NEW ACCOUNT</Desc>
          </Link>
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
  width: 30%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border: 1px solid #fff;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 34px;
  font-weight: 300;
  color:#fff;
  margin-bottom:40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width:90%
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #fff;
  outline:none;
  width:100%;
  height:54px;
  background-color: #000;
  color:#fff;
  font-size:20px;
  padding-left:24px;
`;

const Button = styled.button`
border: none;
color:#000;
width:100%;
height: 50px;
font-size: 20px;
background-color:#fff;
padding: 0 30px;
cursor:pointer;
margin: 40px 0 20px 0;
transition: all 0.5s ease-in-out;
&:hover{
 background-color:#2C3333;
 color:#fff;
}
`;

const Desc = styled.span`
  margin: 0 auto;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  color:#fff;
  &::after{

  }
`;

export default Login;