'use client';

import NextLink from 'next/link';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { footerNavLinks } from '@/data/footer-nav-links';
import Logo from '@/components/header/logo';

import NewsletterForm from './newsletter-form';
import FooterBottom from './footer-bottom';
import Link from './link';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: '#11224e', color: '#fff', py: 4 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* COLUMN 1: LOGO + NEWSLETTER SUBSCRIPTION */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack>
              <Logo white />
              <NewsletterForm />
            </Stack>
          </Grid>

          {/* COLUMN 2: NAVIGATION LINKS */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack
              justifyContent={{ xs: 'center', md: 'end' }}
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 2, md: 18 }}
            >
              <Box>
                <Typography variant="h6">Services</Typography>
                <Grid container direction="column" spacing={1}>
                  {footerNavLinks.services.map((link) => (
                    <Grid key={link.label}>
                      <Link
                        component={NextLink}
                        key={link.label}
                        href={link.href}
                        variant="body1"
                      >
                        {link.label}
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box>
                <Typography variant="h6">Resources</Typography>
                <Grid container direction="column" spacing={1}>
                  {footerNavLinks.resources.map((link) => (
                    <Grid key={link.label}>
                      <Link
                        component={NextLink}
                        key={link.label}
                        href={link.href}
                        variant="body1"
                      >
                        {link.label}
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box>
                <Typography variant="h6">Social Media</Typography>
                <Grid container direction="column" spacing={1}>
                  {footerNavLinks.socialMedia.map((link) => (
                    <Grid key={link.label}>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                          gap: 1,
                          '&:has(.MuiLink-root:hover) .link-icon': {
                            color: '#f9911d',
                          },
                        }}
                      >
                        <Typography
                          className="link-icon"
                          alignItems="center"
                          variant="caption"
                          display="flex"
                          sx={{ transition: 'color 0.2s ease-in-out' }}
                        >
                          {link.icon}
                        </Typography>
                        <Link
                          component={NextLink}
                          key={link.label}
                          href={link.href}
                          variant="body1"
                        >
                          {link.label}
                        </Link>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <FooterBottom />
      </Container>
    </Box>
  );
}

export default Footer;
