'use client';

import Link from 'next/link';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { headerNavLinks } from '@/data';

type NavLinksPropTypes = {
  isScrolled?: boolean;
};

function NavLinks({ isScrolled = false }: NavLinksPropTypes) {
  return (
    <Box
      component="nav"
      sx={{
        display: { xs: 'none', md: 'flex' },
        gap: '0.5rem',
      }}
    >
      {headerNavLinks.map((item) => (
        <Button
          LinkComponent={Link}
          key={item.label}
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
      ))}
    </Box>
  );
}

export default NavLinks;
