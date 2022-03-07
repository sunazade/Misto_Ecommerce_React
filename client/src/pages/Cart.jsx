import React from 'react';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {Add, ArrowBack, Delete, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals,
} from '../features/cartSlice';


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  }

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
         <H1>YOUR BAG</H1>
         {cart.cartItems.length === 0 ? (
           <CartEmpty>
             <Title>
               your cart is currently empty
             </Title>
             <Link to='/products'>
               <StartShopping>
                    <ArrowBack/> 
                    <ShoppingDesc>Start shopping</ShoppingDesc>
               </StartShopping>
              </Link>
           </CartEmpty>
         ) : (
          <Items>
             <CartHeader>
                <Desc>Product</Desc>
                <Desc>Price</Desc>
                <Desc>Quantity</Desc>
                <Total>Total</Total>
             </CartHeader>
             <CartItems>
                {cart.cartItems?.map(cartItem =>(
                  <Item key={cartItem.id}>
                     <CartProduct>
                       <Image src={cartItem.img} alt={cartItem.name} />
                       <ImageItem>
                         <Name>{cartItem.name}</Name>
                         <Span>{cartItem.desc}</Span>
                         <Delete  onClick={() => handleRemoveFromCart(cartItem)} style={{cursor:'pointer'}}/>
                       </ImageItem>
                     </CartProduct>
                     <CartPrice>{cartItem.price}</CartPrice>
                     <CartQuantity>
                       <Remove onClick={() => handleDecreaseCart(cartItem)} style={{cursor:"pointer"}}/>
                       <Count>{cartItem.cartQuantity}</Count>
                       <Add onClick={() => handleAddToCart(cartItem)} style={{cursor:"pointer"}}/>
                     </CartQuantity>
                     <CartTotal>{cartItem.price * cartItem.cartQuantity}</CartTotal>
                  </Item>
                ))}
             </CartItems>
             <CartSummary>
             <ClearButton onClick={() => handleClearCart()}>Clear Cart</ClearButton>
             <CartCheckout>
               <Subtotal>
                 <Desc>Subtotal</Desc>
                 <Amont>{cart.cartTotalAmount}</Amont>
               </Subtotal>
               <Span>Taxes and Shipping calculated at checkout</Span>
               <CheckoutButton>Check Out</CheckoutButton>
               
               <Link to='/products'>
                 <ContinueShopping>
                    <ArrowBack style={{fontSize:"24px"}} /> 
                    <Span>Continue shopping</Span>
                  </ContinueShopping>
               </Link>
             </CartCheckout>
            </CartSummary>
          </Items>
         )}
      </Wrapper>
      <Footer/>
    </Container>
  )
}

const Container = styled.div`
`
const Wrapper = styled.div`
  width:100%;
  min-height:calc(100vh - 90px);
  padding: 2rem 4rem;
`
const H1 = styled.h1`
  text-align:center;
  padding-bottom: 20px;
  font-weight:400;
`
const CartEmpty = styled.div`
  font-size: 20px;
  margin-top: 2rem;
  color: rgb(84, 84, 84);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h2`
  font-weight: 400;
  font-size: 30px;
  text-align: center;
`
const StartShopping = styled.div`
display:flex;
align-items:center;
`
const ShoppingDesc = styled.span`
padding-right:10px;
`
const ContinueShopping = styled.div`
display:flex;
align-items:center;
`
const Desc = styled.h3`
font-size: 20px;
font-weight: 500;
text-transform: uppercase;
`
const CartHeader = styled.div`
display: grid;
align-items: center;
grid-template-columns: 3fr 1fr 1fr 1fr;
column-gap: 0.5rem;

`
const  Items = styled.div`
`
const Item = styled.div`
display: grid;
align-items: center;
grid-template-columns: 3fr 1fr 1fr 1fr;
column-gap: 0.5rem;
border-top: 0.5px solid rgb(177, 177, 177);
border-radius: 5px;

`
const Total = styled.span`
padding-right: 0.5rem;
justify-self: right;
font-size:20px;
text-transform: uppercase;
font-weight:500;
`
const CartItems = styled.div`
`
const CartProduct = styled.div`
display:flex;
`
const Image = styled.img`
width: 100px;
max-width: 100%;
margin-right: 1rem;
`
const ImageItem = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-around;
flex-direction:column;
padding:10px 0;

`
const Name = styled.h4`
font-weight: 400;

`
const Span = styled.span`
  font-size: 14px;
  font-weight: 200;
  margin: 0.5rem 0;
`
const CartPrice = styled.span`
`
const CartQuantity = styled.div`
 display:flex;
 align-items:center;
`
const Count = styled.span`
  padding: 0 10px;
  font-size:16px;
`
const CartTotal = styled.span`
padding-right: 0.5rem;
justify-self: right;
font-weight: 700;
`
const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgb(187, 187, 187);
  padding-top: 2rem;
`
const CartCheckout = styled.div`
  width: 270px;
  max-width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  font-size: 20px;
  padding:20px 10px;
  border: 1px solid rgb(187, 187, 187);
`
const Subtotal = styled.div`

  display: flex;
  justify-content: space-between;
`
const Amont = styled.span`
font-weight: 700;
`
const CheckoutButton = styled.button`
width:100%;
border: none;
color:#fff;
font-size: 16px;
background-color:#000;
padding: 10px 30px;
cursor:pointer;
transition: all 0.5s ease-in-out;
&:hover{
background-color:#2C3333;
color:#fff;
}
`

const ClearButton = styled.button`
border: none;
color:#fff;
font-size: 16px;
background-color:#000;
padding: 10px 30px;
cursor:pointer;
transition: all 0.5s ease-in-out;
&:hover{
background-color:#2C3333;
color:#fff;
}
`


export default Cart