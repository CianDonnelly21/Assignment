'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    height: '100%',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
  }));

                                                                        {/* Order Items */}

  return (

    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      {/* Content fills the remaining space */}
      <Box sx={{ paddingBottom: '70px', paddingX: 2}}>
        <Grid container spacing={10} justifyContent="center" alignItems="center" >
          <Grid item xs={6}><Item>1</Item></Grid>
          <Grid item xs={6}><Item>2</Item></Grid>
        </Grid>

        <Grid container spacing={10} justifyContent="center" alignItems="center" >
          <Grid item xs={6}><Item>3</Item></Grid>
          <Grid item xs={6}><Item>4</Item></Grid>
        </Grid>
      </Box>


                                                                         {/* Nav Bar */}

        <Box
            sx={{
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
                boxShadow: 1
            }}
        >


      <Box sx={{ height: 60 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{ width: '100%', height: '100%' }}
        >
          <BottomNavigationAction icon={<HomeRoundedIcon />} sx={{ '&.Mui-selected': { color: '#4caf50' } }} />
          <BottomNavigationAction icon={<SearchRoundedIcon />} sx={{ '&.Mui-selected': { color: '#4caf50' } }} />
          <BottomNavigationAction icon={<FavoriteBorderRoundedIcon />} sx={{ '&.Mui-selected': { color: '#4caf50' } }} />
          <BottomNavigationAction icon={<PersonOutlineRoundedIcon />} sx={{ '&.Mui-selected': { color: '#4caf50' } }} />
        </BottomNavigation>
      </Box>
     </Box>
    </Box>
  );
}
