import React from 'react';
import styled from 'styled-components';
import { galleryProduct } from '../data';

const Gallery = () => {
  return (
    <Container>
       <Wrapper>
           {galleryProduct.map((item)=>{
               return (
                <ImageContainer key={item.id}>
                  <Image src={item.img}/>
                  <Info>
                    <Desc>
                     Our boutique is closed today Saturday January 29th due to the snow storm. We will reopen tomorrow Sunday January 30th 12-5pm. 
                     You can shop our Winter Sale online with up to 50% off. 
                     For our locals: Shop online with Free in store or curbside pickup! 
                     Stay Safe… See you soon! 
                     #johnelliott #ksubi #ksubijeans #newbalance #saucony #clarksoriginals #mensweardaily #menswear #menswearstyle #stussy
                    </Desc>
                  </Info>
               </ImageContainer>
               )
           })}  
       </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-wrap: wrap;
`
const Wrapper = styled.div`
 display: flex;
 flex-wrap: wrap;
 width:100%;
 height:100%;
`
const Info = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left:0;
  opacity: 0;
  cursor: pointer;
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;

`
const ImageContainer = styled.div`
  width: 25%;
  height: 33.33%;
  display: flex;
  flex-wrap:wrap
  background-color: #fff;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`
const Image = styled.img`
  cursor:pointer;
  width:100%;
  height: 100%;
  object-fit: cover;
`
const Desc = styled.p`
color:#fff;
width:80%;
height:80%;
`

export default Gallery