import React from 'react';
import styled from 'styled-components';
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter
} from "@material-ui/icons";
import '../reset.css'


const Newsletter = () => {
  return (
      <Container className='floating'>
        <div className='center'>
          <Wrapper>
          <Left>
          <Title>NEWSLETTER</Title>
          <InputContainer>
             <Input  placeholder="ENTER YOUR EMAIL"/>
             <Button>
                 Join
             </Button>
          </InputContainer>
        </Left>
        <Right>
        <ContactItem>
          <Desc>
            mistogallery@gmail.com
          </Desc>
          <Desc>
            908.231.8933
          </Desc>
        </ContactItem>
        <ContactItem>
          <Desc>
            80 W Main Street
          </Desc>
          <Desc>
          Somerville, NJ 08876
          </Desc>
        </ContactItem>
        <Icon>
          <SocialIcon >
            <Facebook />
          </SocialIcon>
          <SocialIcon >
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon >
            <Pinterest />
          </SocialIcon>
        </Icon>
        </Right>
          </Wrapper>
        </div>
      </Container>
  )
}

const Container = styled.div`
  width:100%;

  background-color:  #fff;

`
const Wrapper = styled.div`
height: 40vh;
 width:100vw;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: row;
 width:100%;
`
const Left = styled.div`
  display: flex;
  flex:1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h3`
  font-size:16px;
  font-weight: 500;
  margin-bottom: 20px;
  
`
const InputContainer = styled.div`
  display:flex;
  flex-direction:row;
  height:35px;
`
const Input = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  outline:none;
  width:300px;
  padding-left:10px;
`
const Button = styled.button`
 border: none;
 color:#fff;
 font-size: 16px;
 background-color:#000;
 padding: 0 30px;
 cursor:pointer;
 transition: all 0.5s ease-in-out;
 &:hover{
 background-color:#2C3333;
 color:#fff;
}
`
const Right = styled.div`
  display: flex;
  flex:1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 16px;
`

const Icon = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`
const Desc = styled.p`
  font-size:14px;
`
const SocialIcon = styled.span`
  margin: 0 10px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.2);
  }
`




export default Newsletter