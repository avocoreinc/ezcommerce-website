'use client';

import { useState } from 'react';
import Link from 'next/link';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CircleIcon from '@mui/icons-material/Circle';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { headerNavLinks } from '@/data';

type NavLinksPropTypes = {
  isScrolled?: boolean;
};

function NavLinks({ isScrolled = false }: NavLinksPropTypes) {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // HANDLER: Open Sub Menu Dropdown on Mouse Enter
  const handleMouseEnter = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    // Only Open if the Item Has a Sub Menu
    if (headerNavLinks[index].subMenu) {
      setAnchorEl(event.currentTarget);
      setOpenSubMenuIndex(index);
    }
  };

  // HANDLER: Close Sub Menu Dropdown
  const handleMouseLeave = () => {
    setOpenSubMenuIndex(null);
    setAnchorEl(null);
  };

  return (
    <Box
      component="nav"
      sx={{
        display: { xs: 'none', md: 'flex' },
        gap: '0.5rem',
      }}
    >
      {headerNavLinks.map((item, index) => (
        <Box
          key={item.label}
          sx={{
            position: 'relative',
            alignItems: 'center',
            display: 'flex',
          }}
          onMouseLeave={handleMouseLeave}
        >
          {item.subMenu ? (
            <Button
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              sx={{
                color: isScrolled ? '#fff' : '#1a1a1a',
                textTransform: 'none',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                '&:hover': {
                  backgroundColor: isScrolled
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              {item.label}
              <ArrowDropDownIcon
                sx={{
                  transition: 'transform 0.2s',
                  transform:
                    openSubMenuIndex === index
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                }}
              />
            </Button>
          ) : (
            <Button
              LinkComponent={Link}
              href={item.href}
              sx={{
                color: isScrolled ? '#fff' : '#1a1a1a',
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  backgroundColor: isScrolled
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              {item.label}
            </Button>
          )}

          {/* SUB MENU DROPDOWN */}
          {item.subMenu && (
            <Popper
              open={openSubMenuIndex === index}
              anchorEl={anchorEl}
              placement="bottom-start"
              sx={{
                zIndex: 2000,
                minWidth: '300px',
              }}
            >
              <Paper
                elevation={4}
                sx={{
                  mt: 2.01,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: '24px',
                  borderBottomRightRadius: '24px',
                  p: 1.5,
                  backdropFilter: 'blur(8px)',
                  backgroundColor: isScrolled
                    ? 'rgba(26, 26, 26, 0.75)'
                    : 'rgba(255, 255, 255, 0.75)',
                  color: isScrolled ? '#fff' : '#000',
                  boxShadow: isScrolled
                    ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                    : '0 4px 20px rgba(0, 0, 0, 0.08)',
                }}
              >
                <MenuList>
                  {item.subMenu.map((subItem) => (
                    <MenuItem
                      key={subItem.label}
                      component={Link}
                      href={subItem.href}
                      sx={{
                        color: isScrolled ? '#fff' : '#1a1a1a',
                        alignItems: 'center',
                        display: 'flex',
                        gap: 1,
                        borderRadius: '4px',
                        '&:hover': {
                          fontWeight: 500,
                          backgroundColor: 'transparent',
                          '& .submenu-bullet': {
                            color: '#ff991d',
                          },
                        },
                      }}
                    >
                      <CircleIcon
                        className="submenu-bullet"
                        sx={{
                          fontSize: '0.9rem',
                          color: '#d9d9d9',
                          transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          willChange: 'color',
                        }}
                      />
                      {subItem.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Paper>
            </Popper>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default NavLinks;
