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


export default function CheckoutPage() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      {/* Nav Bar */}
      <Box
        sx={{
          position: 'fixed',   // Fix at bottom
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
          value={2}
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
            sx={{ '&.Mui-selected': { color: '#4caf50' } }}
          />

        </BottomNavigation>
      </Box>
    </>
  );
}
