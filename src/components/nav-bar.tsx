'use client';

import { Divider, IconButton, MenuItem, Typography } from '@mui/material';

import { useState } from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import Logo from './logo';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: '70px',
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.8)`
    : alpha(theme.palette.background.default, 0.8),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '20px 30px',
}));

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: '1.5rem',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              px: 0,
              justifyContent: 'space-between',
            }}
          >
            <Logo />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '40px' }}>
              <Button
                variant="text"
                sx={{
                  fontSize: '1.25rem',
                  color: '#11224e',
                  textTransform: 'none',
                  '&:hover': {
                    // hover styles go here
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Solutions
              </Button>
              <Button
                variant="text"
                sx={{
                  fontSize: '1.25rem',
                  color: '#11224e',
                  textTransform: 'none',
                  '&:hover': {
                    // hover styles go here
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Case Studies
              </Button>
              <Button
                variant="text"
                sx={{
                  fontSize: '1.25rem',
                  color: '#11224e',
                  textTransform: 'none',
                  '&:hover': {
                    // hover styles go here
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Blog
              </Button>
              <Button
                variant="text"
                sx={{
                  fontSize: '1.25rem',
                  color: '#11224e',
                  textTransform: 'none',
                  '&:hover': {
                    // hover styles go here
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Support
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: '#ff911b',
                  fontSize: '1.25rem',
                  borderRadius: 40,
                  borderColor: '#ff911b',
                  textTransform: 'none',
                  '&:hover': {
                    // hover styles go here
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Consult Us
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>

                  <MenuItem>Solutions</MenuItem>
                  <MenuItem>Case Studies</MenuItem>
                  <MenuItem>Blog</MenuItem>
                  <MenuItem>Support</MenuItem>
                  {/* <Divider sx={{ my: 3 }} /> */}

                  {/* <MenuItem>
                    <Button variant="contained" fullWidth>
                      CTA
                    </Button>
                  </MenuItem> */}
                </Box>
              </Drawer>
            </Box>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
