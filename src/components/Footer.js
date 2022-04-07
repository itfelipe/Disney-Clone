import React from 'react';
import styled from 'styled-components';

function Footer() {

    return (
    <Container>
         <Logo src='/images/logo.svg'/>
         <Text> Made by Fernanda Miranda - Front-End Developer </Text>
    <Content>
        <a href='https://www.linkedin.com/in/imfernandamiranda/'>
        <Linkedin src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiY1mzO8hS_cvCEzzr8tqk3Ltcgc2KDGkD5y34OS0cCdqg0HRWQMUCLEVsjhV44g-WM8&usqp=CAU' height='30px'/>
        </a>
        <a href='https://github.com/fernandamirand'>
        <Github src='https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png'  height='30px'/>
        </a>   
    </Content>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
   
   background-color: #090b13;
   
   display: flex;
   flex-direction: column;
   align-items: center ;
   padding: 40px ;
   overflow-x: hidden;
   
`

const Logo = styled.img`
   width: 80px;
   height: 48px;
   border-radius: 50%;
   cursor: pointer;
`

const Text = styled.h1`
   font-size: 15px;  
`

const Content = styled.div`
   display: flex;
   flex-direction: row;
`

const Linkedin = styled.img`
   border-radius:50%;
   display: flex ;
   cursor: pointer;
`

const Github = styled.img`
   border-radius:50%;
   display: flex ;
   margin-left: 20px ;
   cursor: pointer;
`
