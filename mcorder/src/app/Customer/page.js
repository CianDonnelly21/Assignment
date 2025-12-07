'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';


export default function CustomerPage() {
  const router = useRouter();


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    height: '110%',
    width: '120%',
    overflow: 'hidden',
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
  }));

const [showConfirmation, setShowConfirmation] = React.useState(false);

const handleProductClick = (product) => {
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

  {/* Only add if not already in cart */}
  const isInCart = existingCart.some(item => item.name === product.name);
  if (!isInCart) {
    const newCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  setShowConfirmation(true);
  setTimeout(() => setShowConfirmation(false), 2000);
};




  const burgers = [
    { name: "Big Mac", price: 8, kcal: 509, image: "/Images/BigMac.png" },
    { name: "Q. Pounder", price: 6, kcal: 749, image: "/Images/DoubleQuarterPounder.png" },
    { name: "Mc Spicy", price: 5, kcal: 454, image: "/Images/McSpicy.png" },
    { name: "Mc Plant", price: 8, kcal: 426, image: "/Images/McPlant.png" }
  ];

  const dessert = [
    { name: "Oreo", price: 2.30, kcal: 260, image: "/Images/Oreo.png" },
    { name: "Smarties", price: 2.60, kcal: 273, image: "/Images/Smarties.png" },
    { name: "Brownie", price: 3.80, kcal: 278, image: "/Images/Brownie.png" },
    { name: "Donut", price: 3, kcal: 197, image: "/Images/Donut.png" }
  ];

  const drinks = [
    { name: "Coca Cola", price: 1, kcal: 1, image: "/Images/Coke.png" },
    { name: "Lemonade", price: 3.70, kcal: 105, image: "/Images/Lemonade.png" },
    { name: "Frappucino", price: 4.20, kcal: 319, image: "/Images/Frappucino.png" },
    { name: "Diet Coke", price: 1.50, kcal: 1, image: "/Images/DietCoke.png" }
  ];

  const [products, setProducts] = React.useState(burgers);




  return (
    <>

        {showConfirmation && (
          <Box sx={{
            position: 'fixed',
            top: 70,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 4,
            zIndex: 2000,
          }}>
            Product added to cart!
          </Box>
        )}

        <Box
            sx={{
                height: '0vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '-10%'
            }}
        >

        <Box
              sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 60,
                    backgroundColor: '',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    boxShadow: 1,
                    justifyContent: 'space-between',
                }}
          >

              <IconButton
                component="a"
                href = "Checkout/"
                sx={{ '&:hover': { color: '#4caf50' } }}
              >
                <ShoppingCartRoundedIcon />
              </IconButton>

                <h3 sx = {{ justifyContent: 'center' }}> McOrder </h3>

              <IconButton
                component="a"
                href="https://www.met.ie/"
                sx={{
                    '&:hover': { color: '#4caf50' }
                }}
              >
                <NightsStayRoundedIcon />
            </IconButton>

                </Box>
            </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20%', opacity: 0.5 }}>
            <img
                src="/Images/McDonalds_Animated.png"
                alt="McOrder"
                style={{
                width: '85%',
               }}
            />
        </Box>

                                                            {/* Buttons */}

      <Stack direction="row" spacing={2} sx={{ padding: 2, zIndex: 1000, backgroundColor: '#fff', justifyContent: 'center', marginTop: '5%', marginBottom: '-85%' }}>
        <Button variant="contained" onClick={() => setProducts(burgers)} sx={{ backgroundColor: '#ffff', color: 'darkgrey', '&:hover': { backgroundColor: 'yellow', color: 'red'}, width: '32%' }}> McBurgers </Button>
        <Button variant="contained" onClick={() => setProducts(dessert)} sx={{ backgroundColor: '#ffff', color: 'darkgrey', '&:hover': { backgroundColor: 'yellow', color: 'red'}, width: '32%'}}> McFlurrys </Button>
        <Button variant="contained" onClick={() => setProducts(drinks)} sx={{ backgroundColor: '#ffff', color: 'darkgrey', '&:hover': { backgroundColor: 'yellow', color: 'red'}, width: '32%'}}> McDrinks </Button>
      </Stack>


    {/* Product grid */}
    <Box sx={{ paddingLeft: '1.3%', marginTop: '90%', width: '90%', justifyContent: 'center' }}>
      <Grid container spacing={10}>
        {products.map((product, index) => (
          <Grid item xs={6} key={index}>
                        <Item onClick={() => handleProductClick(product)} sx={{ cursor: 'pointer' }}>

          <img src={product.image} alt={product.name} style={{ width: '140px', height: '120px', objectFit: 'contain' }} />

          {/* Name + price */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingX: 1, marginTop: '8px' }}>
            <span style={{ fontWeight: 'bold' }}>{product.name}</span>
            <span style={{ fontWeight: 'bold', marginRight: '20px' }}>€{product.price.toFixed(2)}</span>
          </Box>

          {/* Kcal */}
          <Box sx={{ textAlign: 'left', width: '100%', paddingLeft: 1, marginTop: '4px', color: 'gray', fontSize: '0.85rem' }}>
            {product.kcal} kcal
          </Box>
        </Item>
      </Grid>
    ))}
  </Grid>


                                                                         {/* Nav Bar */}

      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 60,
          backgroundColor: '#4caf50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          boxShadow: 1,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >

        <BottomNavigation
          value={0}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            width: '100%',
            height: '100%',
          }}
        >

        <BottomNavigationAction
            icon={<HomeRoundedIcon />}
            component="a"
            href="/Customer"
            sx={{ '&.Mui-selected': { color: '#4caf50' } }}
          />

          <BottomNavigationAction
            icon={<MapRoundedIcon />}
            component="a"
            href="/"
            sx={{ '&.Mui-selected': { color: '#4caf50' } }}
          />

          <BottomNavigationAction
            icon={<ShoppingBasketRoundedIcon />}
            component="a"
            href="/View_Cart"
            sx={{ '&.Mui-selected': { color: '#4caf50' } }}
          />

          <BottomNavigationAction
            icon={<PersonOutlineRoundedIcon />}
            component="a"
            href="/"
            sx={{ '&.Mui-active': { color: '#4caf50' } }}
          />

        </BottomNavigation>
     </Box>
    </Box>
    </>
  );
}
