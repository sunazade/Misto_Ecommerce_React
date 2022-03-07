import { Loop,LocalShipping ,HeadsetMic} from '@material-ui/icons';
import React from 'react';
import '../reset.css';
import styled from 'styled-components';


const ShoppingInfo = () => {
  return (
    <Container>
     <div className='center'>
        <Wrapper>
          <Item>
            <Loop style={{fontSize:"36px"}}/> 
            <Info>
              <Title>FREE SHIPPING</Title>
              <Desc>On all UA order or above $100</Desc>
            </Info>
          </Item>
          <Item>
            <LocalShipping style={{fontSize:"36px"}}/>            
            <Info>
              <Title>30 DAYS RETURN</Title>
              <Desc>Simply return it within 30 days for on exchange</Desc>
            </Info>
          </Item>
          <Item>
            <HeadsetMic style={{fontSize:"36px"}}/>
            <Info>
              <Title>SUPPORT 24/7</Title>
              <Desc>Contact us 24 hours a day. 7 days a week</Desc>
            </Info>
          </Item>
        </Wrapper>
     </div>
    </Container>
  )
}

const Container = styled.div`
width:100%;
background-color: #000;

`
const Wrapper = styled.div`
height:10vh;
display:flex;
align-items:center;
justify-content:space-around;
`

const Item = styled.div`
 color:#fff;
 display:flex;
 align-items:center;
 padding-top:24px;

`
const Info = styled.div`
padding-left:14px;

`
const Title = styled.h3`
font-weight: 400;
font-size:18px;
`
const Desc = styled.p`
font-size:14px;
`

export default ShoppingInfo