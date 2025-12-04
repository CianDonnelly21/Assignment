'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    height: '200%',
    width: '240%',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
  }));



  return (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '35%', opacity: 0.5 }}>
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
        <Button variant="contained" sx={{ backgroundColor: '#ffff', color: 'darkgrey', '&:hover': { backgroundColor: 'yellow', color: 'red'}, width: '32%' }}> Contained </Button>
        <Button variant="contained" sx={{ backgroundColor: '#ffff', color: 'darkgrey', '&:hover': { backgroundColor: 'yellow', color: 'red'}, width: '32%'}}> Disabled </Button>
        <Button variant="contained" sx={{ backgroundColor: '#ffff', color: 'darkgrey', '&:hover': { backgroundColor: 'yellow', color: 'red'}, width: '32%'}}> Link </Button>
      </Stack>

                                                            {/* Order Items */}

    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '2%', marginTop: '-80%'}}>
      <Box sx={{ marginTop: '20%'}}>
        <Grid container rowSpacing={10} columnSpacing={{ xs: 20, sm: 12, md: 6 }} >
          <Grid item xs={6}><Item>1</Item></Grid>
          <Grid item xs={6}><Item>2</Item></Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: '40%' }}>
        <Grid container rowSpacing={100} columnSpacing={{ xs: 20, sm: 0, md: 3 }} >
          <Grid item xs={6}><Item>3</Item></Grid>
          <Grid item xs={6}><Item>4</Item></Grid>
        </Grid>
      </Box>

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
            icon={<SearchRoundedIcon />}
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
