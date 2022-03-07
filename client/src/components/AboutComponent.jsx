import React from 'react';
import styled from 'styled-components';

const AboutComponent = () => {
  return (
    <Container>
         <Wrapper>
             <Title>ABOUT US</Title>
             <Desc>MiSto clothing gallery is an innovative wear boutique that showcases both emerging designers and a select roster of established brands.
WINNER Best wear Boutique 2016, 2017, 2018, 2019, 2020 and 2021</Desc>
         </Wrapper>
    </Container>
  )
}

const Container = styled.div`
 width:100%;
 height: 40vh;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color:#000;
 color:#fff;

`
const Wrapper = styled.div`
 width: 500px;
`
const Title = styled.h3`
font-size: 16px;
text-align: center;
font-weight:500;
letter-spacing: 2px;
margin-bottom: 20px;
`
const Desc = styled.p`
text-align: center;

`

export default AboutComponent