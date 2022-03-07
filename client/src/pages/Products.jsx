import React from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { addToCart } from "../features/cartSlice";
import { useNavigate } from 'react-router';
import Announcement from '../components/Announcement'
import { useGetAllProductsQuery } from '../features/productsApi'
import { ShoppingCartOutlined,SearchOutlined ,FavoriteBorderOutlined} from '@material-ui/icons';

const Products = () => {
  const {data , error ,isLoading} = useGetAllProductsQuery()
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Title>NEW ARRIVALS</Title>
      {isLoading ? (
         <p>loading...</p>
      ) : error ? (
        <p>error</p>) : (
      <ProductsContainer> 
          {
            data?.map((product) =>{
              return(
                <ProductList key={product.id}>
                <Image src={product.img}/>
                <Info>
                <Icon onClick={() => handleAddToCart(product)}>
                 <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                 <Link to={`/product/${product.id}`}>
                   <SearchOutlined/>
                 </Link>
                </Icon>
                <Icon>
                  <FavoriteBorderOutlined/>
                </Icon>
                </Info>
                <InfoProduct>
                  <TitleProduct>{product.name}</TitleProduct>
                  <Price>$ {product.price}</Price>
                </InfoProduct>
                </ProductList>
              )
            })
          }
      </ProductsContainer>
        )} 
      <Footer/>
    </Container>
  )
}

const Container = styled.div`
min-height:100vh;
width:100%;
`


const ProductsContainer = styled.div`
display: flex;
flex-wrap: wrap;
background-color:#fff;
min-height: 100vh;
`
const Title = styled.h2`
 text-align:center;
 font-weight:500;
 margin: 20px 0;
`
const Info = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left:0;
  opacity: 0;
  cursor: pointer;
  background-color: rgba(0,0,0,0.2);
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;

 
`

const ProductList = styled.div`
  margin: 5px;
  flex: 1;
  min-width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
  box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.5),
    2px 2px 5px rgba(94, 104, 121, 0.3);
`


const Image = styled.img`
  height: 70%;
  z-index: 2;
  `


const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }


  `


const InfoProduct = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

` 
const TitleProduct = styled.h3`
 flex-direction: flex-start;
 margin: 20px 10px;
 font-size:20px;
`

const Price = styled.span`
  font-size:20px;
  font-weight:500;
`

export default Products