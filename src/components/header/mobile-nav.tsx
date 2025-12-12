'use client';

import { useState } from 'react';

import Link from 'next/link';

import ListItemButton from '@mui/material/ListItemButton';
import ListitemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

import { headerNavLinks } from '@/data';

import CTAButton from './cta-button';
import Logo from './logo';

type MobileNavPropTypes = {
  isScrolled?: boolean;
};

function MobileNav({ isScrolled = false }: MobileNavPropTypes) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (newState: boolean) => () => {
    setIsDrawerOpen(newState);
  };

  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      {/* HAMBURGER BUTTON */}
      <IconButton
        aria-label="Open Navigation Menu"
        onClick={toggleDrawer(true)}
        sx={{
          color: isScrolled ? '#fff' : '#1a1a1a',
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* DRAWER MENU */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {/* DRAWER HEADER */}
        <Box
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            px: 4,
            py: 2,
          }}
        >
          <Logo />
        </Box>

        <Divider />

        {/* NAVIGATION LINKS */}
        <List sx={{ px: 1, py: 2 }}>
          {headerNavLinks.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                LinkComponent={Link}
                href={item.href}
                onClick={toggleDrawer(false)}
                sx={{}}
              >
                <ListitemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: '#1a1a1a',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        {/* CTA BUTTON */}
        <Box sx={{ p: 2 }}>
          <CTAButton fullWidth />
        </Box>
      </Drawer>
    </Box>
  );
}

export default MobileNav;
