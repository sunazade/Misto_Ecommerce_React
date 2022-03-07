import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import '../reset.css';

const Contact = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
      <ContactContainer>
        <ContactUs>
          <Title>CONTACT US</Title>
          <Desc>Need help with your order? Have a question about sizing? Feel free to get in touch with us with any questions you may have!</Desc>
          <Email>Email: mistogallery@gmail.com</Email>
          <Phone>Phone: 908.231.8933</Phone>
        </ContactUs>
        <FormContainer>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone" />
          <TextArea placeholder="Type your message here..."></TextArea>
          <Button>Submit</Button>
        </Form>
        </FormContainer>
      </ContactContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  color: #fff;
  width: 100%;
  height: calc(100vh - 90px);
  background-image: url("img/css/bg.jpg");
  background-attachment: fixed;
  background-size:cover;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  background-color:#000;
`;

const ContactUs = styled.div`
width:30%;
text-align: center;
display: flex;
flex-direction: column;
`

const ContactContainer = styled.div`
  width:100%;
  height:40vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #000;
`
const FormContainer = styled.div`
width:40%;
display:flex;
justify-content: center

`

const Title = styled.h3`
  font-size: 20px;
  font-weight: 300;
  padding-bottom:20px;
`;

const Form = styled.form`
  display:flex;
  flex-wrap:wrap;
  width:380px;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #fff;
  outline:none;
  width:180px;
  height:35px;
  background-color: #000;
  color:#fff;
  font-size:16px;
  padding-left:24px;
  margin:5px;
`;

const Button = styled.button`
border: none;
color:#000;
width:100%;
height: 35px;
font-size: 16px;
background-color:#fff;
padding: 0 30px;
cursor:pointer;
transition: all 0.5s ease-in-out;
&:hover{
 background-color:#2C3333;
 color:#fff;
}
`;


const Desc = styled.p`
padding-bottom:10px;

`
const Phone = styled.span`

`
const Email = styled.span`
padding-bottom:10px;

`
const TextArea = styled.textarea`
width:100%;
background-color:#000;
color:#fff;
padding: 12px 10px 3px 4px;
border: none;
text-align: center;
outline:none;
`
export default Contact;