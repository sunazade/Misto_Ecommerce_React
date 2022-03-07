import React from 'react';
import styled from 'styled-components';
import '../reset.css'


const Announcement = () => {
  return (
      <Container className='floating'>
          <div className='center'>
              <Wrapper>
                  Super Deal! Free Shipping on Orders Over $50
              </Wrapper>
          </div>
       </Container>
    )
};

export default Announcement;

const Container = styled.div`
   width: 100%;
   background-color: #000;

`

const Wrapper = styled.div`
    height:30px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    font-weight: 300;
    
`
