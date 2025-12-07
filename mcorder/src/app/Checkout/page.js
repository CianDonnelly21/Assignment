'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { usePathname } from 'next/navigation';
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
    import Grid from '@mui/material/Grid';
    import Paper from '@mui/material/Paper';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
justifyContent: 'center',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <>
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

        {/* TOP NAV */}
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
            zIndex: 1000,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            justifyContent: 'space-between',
          }}
        >

          <IconButton
            component="a"
            href="Checkout/"
            sx={{ '&:hover': { color: '#4caf50' } }}
          >
            <ShoppingCartRoundedIcon />
          </IconButton>

          <h3>Checkout</h3>

          <IconButton
            component="a"
            href="https://www.met.ie/"
            sx={{ '&:hover': { color: '#4caf50' } }}
          >
            <NightsStayRoundedIcon />
          </IconButton>

        </Box>
      </Box>


{/* 🔹 MAIN CONTENT */}
<Box sx={{ paddingTop: '90%', px: 2 }}>
  <Grid container spacing={4} justifyContent="center">
    {/* First Box */}
    <Grid item xs={12} sm={6}>
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <img
          src="Images/Cash.png"
          alt="Cash"
          style={{ width: '30%', height: 'auto', marginBottom: 8 }}
        />
        <Typography variant="h6">Cash</Typography>
      </Paper>
    </Grid>

    {/* Second Box */}
    <Grid item xs={12} sm={6}>
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <img
          src="Images/Card.png"
          alt="Card"
          style={{ width: '50%', height: 'auto', marginBottom: 8 }}
        />
        <Typography variant="h6">Card</Typography>
      </Paper>
    </Grid>
  </Grid>
</Box>


      {/* BOTTOM NAV */}
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
          value={-1}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{ width: '100%', height: '100%' }}
        >

          <BottomNavigationAction
            icon={<HomeRoundedIcon />}
            component="a"
            href="/Customer"
          />

          <BottomNavigationAction
            icon={<MapRoundedIcon />}
            component="a"
            href="/"
          />

          <BottomNavigationAction
            icon={<ShoppingBasketRoundedIcon />}
            component="a"
            href="/View_Cart"
          />

          <BottomNavigationAction
            icon={<PersonOutlineRoundedIcon />}
            component="a"
            href="/"
          />

        </BottomNavigation>
      </Box>
    </>
  );
}
