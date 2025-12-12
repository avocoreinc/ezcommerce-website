'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
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
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [drawerHeight, setDrawerHeight] = useState('calc(100vh - 25px)');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (newState: boolean) => () => {
    setIsDrawerOpen(newState);
  };

  const handleSubMenuToggle = (index: number) => () => {
    // Toggle the submenu if it's already open, otherwise open it
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  useEffect(() => {
    const updateDrawerHeight = () => {
      if (typeof window !== 'undefined') {
        const viewportHeight = window.innerHeight;
        const safeHeight = `calc(${viewportHeight}px - 25px)`;
        setDrawerHeight(safeHeight);
      }
    };

    // Set the initial height
    updateDrawerHeight();

    // Recalculate when the window is resized
    window.addEventListener('resize', updateDrawerHeight);
    return () => {
      window.removeEventListener('resize', updateDrawerHeight);
    };
  }, []);

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
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            margin: '10px 10px 10px 0',
            position: 'absolute',
            height: drawerHeight,
            borderRadius: '16px',
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
        }}
      >
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
          {headerNavLinks.map((item, index) => (
            <Box key={item.label}>
              <ListItem disablePadding>
                <ListItemButton
                  LinkComponent={Link}
                  href={item.href || '#'}
                  onClick={
                    item.subMenu
                      ? handleSubMenuToggle(index)
                      : toggleDrawer(false)
                  }
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        color: '#1a1a1a',
                      },
                    }}
                  />
                  {/* Arrow icon for submenu */}
                  {item.subMenu && (
                    <ArrowDropDownIcon
                      sx={{
                        transition: 'transform 0.3s ease',
                        fontSize: '1.2rem',
                        color: '#1a1a1a',
                        transform:
                          openSubMenuIndex === index
                            ? 'rotate(180deg)'
                            : 'rotate(0deg)',
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>

              {/* Submenu (if any) */}
              {item.subMenu && openSubMenuIndex === index && (
                <Box sx={{ pl: 2 }}>
                  <List>
                    {item.subMenu.map((subItem) => (
                      <ListItem key={subItem.label} disablePadding>
                        <ListItemButton
                          LinkComponent={Link}
                          href={subItem.href || '#'}
                        >
                          <ListItemText
                            primary={subItem.label}
                            slotProps={{
                              primary: {
                                fontSize: '1rem',
                                fontWeight: 400,
                                color: '#1a1a1a',
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
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
