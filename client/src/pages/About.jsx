import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutComponent from '../components/AboutComponent'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        
      </Wrapper>  
      <AboutComponent/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
`
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 390px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("img/css/bg.jpg");
  background-attachment: fixed;
  background-size:cover;
`




export default About