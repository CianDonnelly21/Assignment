'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  justifyContent: 'center',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  const handleCheckout = (paymentType) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    fetch('api/Manager/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerEmail: "customer@example.com",
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price, 0),
        paymentType: paymentType, // cash or card
        date: new Date().toISOString(),
      })
    });
    localStorage.removeItem('cart');
    alert(`Order submitted (${paymentType})`);
  };

  return (
    <>
      {/* TOP NAV */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingX: 2
      }}>
        <IconButton component="a" href="Checkout/" sx={{ '&:hover': { color: '#4caf50' } }}>
          <ShoppingCartRoundedIcon />
        </IconButton>
        <h3>Checkout</h3>
        <IconButton component="a" href="https://www.met.ie/" sx={{ '&:hover': { color: '#4caf50' } }}>
          <NightsStayRoundedIcon />
        </IconButton>
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ paddingTop: '90%', px: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2, textAlign: 'center', cursor: 'pointer' }} onClick={() => handleCheckout("cash")}>
              <img src="Images/Cash.png" alt="Cash" style={{ width: '30%', height: 'auto', marginBottom: 8 }} />
              <Typography variant="h6">Cash</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2, textAlign: 'center', cursor: 'pointer' }} onClick={() => handleCheckout("card")}>
              <img src="Images/Card.png" alt="Card" style={{ width: '50%', height: 'auto', marginBottom: 8 }} />
              <Typography variant="h6">Card</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* BOTTOM NAV */}
      <Box sx={{
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
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}>
        <BottomNavigation value={-1} sx={{ width: '100%', height: '100%' }}>
          <BottomNavigationAction icon={<HomeRoundedIcon />} component="a" href="/Customer" />
          <BottomNavigationAction icon={<MapRoundedIcon />} component="a" href="/" />
          <BottomNavigationAction icon={<ShoppingBasketRoundedIcon />} component="a" href="/View_Cart" />
          <BottomNavigationAction icon={<PersonOutlineRoundedIcon />} component="a" href="/" />
        </BottomNavigation>
      </Box>
    </>
  );
}
