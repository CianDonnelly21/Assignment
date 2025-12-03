'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

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
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          <BottomNavigationAction icon={<HomeRoundedIcon />} sx={{ '&.Mui-selected': { color: '#4caf50' } }} />
          <BottomNavigationAction icon={<SearchRoundedIcon />} sx={{ '&.Mui-selected': { color: '#4caf50' } }} />
          <BottomNavigationAction icon={<FavoriteBorderRoundedIcon />} sx={{ '&.Mui-selected': { color: '#4caf50' } }} />
          <BottomNavigationAction icon={<PersonOutlineRoundedIcon />} sx={{ '&.Mui-selected': { color: '#4caf50' } }} />
        </BottomNavigation>
      </Box>
    </>
  );
}
