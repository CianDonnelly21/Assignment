'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function ViewCartPage() {
  const [cart, setCart] = React.useState([]);
  const [value, setValue] = React.useState(2);
  const router = useRouter();

  React.useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const updateQuantity = (index, delta) => {
    const newCart = [...cart];
    newCart[index].quantity = Math.max(1, (newCart[index].quantity || 1) + delta);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const deleteItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <>
      {/* HEADER */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          boxShadow: 1,
          backgroundColor: '#fff',
        }}
      >
        <IconButton
          onClick={() => router.back()}
          sx={{ position: 'absolute', left: 8, '&:hover': { color: '#4caf50' } }}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        <h3 style={{ margin: 0 }}>My Cart</h3>
      </Box>

      {/* CART ITEMS WITH QUANTITY AND DELETE */}
      <Box sx={{ paddingTop: '80px', paddingBottom: '80px', paddingX: 2 }}>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                borderBottom: '1px solid #ccc',
                paddingBottom: 1,
              }}
            >
              <img src={item.image} alt={item.name} style={{ width: 100 }} />
              <Box sx={{ flex: 1 }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{item.name}</p>
                <p style={{ margin: 0 }}>€{item.price}</p>
                <p style={{ margin: 0, color: 'gray' }}>{item.kcal} kcal</p>

                {/* QUANTITY BUTTONS */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 1 }}>
                  <Button variant="outlined" onClick={() => updateQuantity(index, -1)}>
                    -
                  </Button>
                  <span>{item.quantity || 1}</span>
                  <Button variant="outlined" onClick={() => updateQuantity(index, 1)}>
                    +
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteItem(index)}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </Box>
          ))
        )}
      </Box>

      {/* NAV BAR */}
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
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{ width: '100%', height: '100%' }}
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
            sx={{ '&.Mui-selected': { color: '#4caf50' } }}
          />
        </BottomNavigation>
      </Box>
    </>
  );
}
