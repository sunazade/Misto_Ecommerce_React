import { Badge } from '@material-ui/core';
import { PermIdentityOutlined, ShoppingCartOutlined,Menu} from '@material-ui/icons';
import React ,{useEffect} from 'react';
import {NavLink ,Link} from 'react-router-dom';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import './Navbar.css';
import '../reset.css';
import {mobile} from '../responsive';


const Navbar = () => {
    const { cartTotalQuantity } = useSelector((state) => state.cart);

    return (
      <Container>
        <div className='center'>
        <Wrapper >
           <Left>
               <Logo>MiSto</Logo>
           </Left>
           <Center>
                   <NavLink to="/" activeclassname="active" className="nav_link">HOME</NavLink>
                   <NavLink to="/products" activeclassname="active" className="nav_link">SHOP</NavLink>
                   <NavLink to="/about" activeclassname="active" className="nav_link">ABOUT</NavLink>
                   <NavLink to="/contact" activeclassname="active" className="nav_link">CONTACT</NavLink>
           </Center>
           <Right>
               <Link to="/login">
                   <HamburgerMenu>
                     <Menu style={{fontSize:"28px"}}/>
                   </HamburgerMenu>
               </Link>
               <Link to="/login">
                 <Admin>
                   <PermIdentityOutlined style={{fontSize:"28px"}}/>
                 </Admin>
               </Link>
               <Link to="/cart">
                 <Cart>
                   <Badge badgeContent={cartTotalQuantity} color="secondary">
                      <ShoppingCartOutlined />
                   </Badge>
                 </Cart>
               </Link>
           </Right>
        </Wrapper>
        </div>
      </Container>
    )
}


const Container = styled.div`
    width:100%;
    height: 10%;
    background-color: #000;
`
const Wrapper = styled.div`
    wiidth: 100vw;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex:1;
    justify-content: flex-start;
    
`

const Logo = styled.h1`
    font-weight: 400;
    cursor:pointer;  
    color: #fff; 

`

const Center = styled.div`
    width:30wv;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${mobile({ display: "none" })}


`

const Right = styled.div`
    text-align: center;
    flex:1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    

`
const HamburgerMenu = styled.div`
color:#fff;
display:none;
${mobile({ display: "contents" })}

`

const Admin = styled.div`
    cursor:pointer;   
    margin-right: 25px;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
    }
    color: #fff;

`
const Cart = styled.div`
    transition: all 0.5s ease;
    cursor:pointer;   
    &:hover{
        transform: scale(1.1);
    }
    color: #fff;

`

export default Navbar;

