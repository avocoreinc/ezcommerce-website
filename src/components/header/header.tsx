'use client';

import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import MobileNav from './mobile-nav';
import CTAButton from './cta-button';
import NavLinks from './nav-links';
import Logo from './logo';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 650);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        mt: '1.5rem',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            transition: 'all 0.3s ease',

            borderRadius: '70px',
            paddingX: '24px',
            paddingY: '0.5rem',

            backdropFilter: 'blur(8px)',
            backgroundColor: scrolled
              ? 'rgba(26, 26, 26, 0.75)'
              : 'rgba(255, 255, 255, 0.75)',
            color: scrolled ? '#fff' : '#000',
            boxShadow: scrolled
              ? '0 4px 20px rgba(0, 0, 0, 0.3)'
              : '0 4px 20px rgba(0, 0, 0, 0.08)',
          }}
        >
          {/* LOGO */}
          <Logo white={scrolled} />

          {/* NAVIGATION LINKS */}
          <NavLinks isScrolled={scrolled} />

          {/* CTA BUTTON */}
          <CTAButton />

          {/* MOBILE NAVIGATION (SHOWN ONLY ON MOBILES) */}
          <MobileNav isScrolled={scrolled} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
