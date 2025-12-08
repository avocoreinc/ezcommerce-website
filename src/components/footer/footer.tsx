import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import Logo from '@/components/logo';
import { Stack } from '@mui/material';

export default function Footer() {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: '#11224e',
          color: '#ffffff',
          py: '60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* LOGO BACKGROUND */}
        <Box
          sx={{
            position: 'absolute',
            top: '-40px',
            right: '50px',
            width: '500px',
            height: '500px',
            opacity: 0.15,
            transform: 'rotate(25deg)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/logo-pattern.svg"
            alt=""
            fill
            priority={false}
            draggable={false}
            style={{
              objectFit: 'contain',
            }}
          />
        </Box>

        <Container>
          <Grid container>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  width: '250px',
                  height: '50px',
                  position: 'relative',
                }}
              >
                <Image
                  src="/ezcommerce-logo-white.svg"
                  alt="EzCommerce Logo"
                  fill
                />
              </Box>
              <Box sx={{ mt: 5 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Newsletter</Typography>
                <Typography sx={{ my: 1 }}>
                  Subscribe for insights and feature news.
                </Typography>
                <Stack direction="row" gap={1}>
                  <TextField
                    size="small"
                    placeholder="Email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '40px',
                      },
                      '& .MuiInputBase-input': {
                        color: '#ffffff',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ffffff',
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    sx={{
                      color: '#ffffff',
                      borderColor: '#ffffff',
                      borderRadius: '40px',
                    }}
                  >
                    Subscribe
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <Typography
                sx={{
                  textDecoration: 'underline',
                  textTransform: 'uppercase',
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                }}
              >
                Services
              </Typography>
              <List>
                <Stack gap={2}>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Amazon EzScale
                    </Link>
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      D2C EzScale
                    </Link>
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      Amazon EzAds
                    </Link>
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      Google and Meta EzAds
                    </Link>
                  </ListItem>
                </Stack>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <Typography
                sx={{
                  textDecoration: 'underline',
                  textTransform: 'uppercase',
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                }}
              >
                Resources
              </Typography>
              <List>
                <Stack gap={2}>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Case Studies
                    </Link>
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      Blog
                    </Link>
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      FAQs
                    </Link>
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      Methodolgy
                    </Link>
                  </ListItem>
                </Stack>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <Typography
                sx={{
                  textDecoration: 'underline',
                  textTransform: 'uppercase',
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                }}
              >
                Legal
              </Typography>
              <List>
                <Stack gap={2}>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      Privacy Policy
                    </Link>
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      Cookie Policy
                    </Link>
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      Terms
                    </Link>
                  </ListItem>
                </Stack>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 2 }}>
              <Typography
                sx={{
                  textDecoration: 'underline',
                  textTransform: 'uppercase',
                  fontSize: '1.125rem',
                  fontWeight: 'bold',
                }}
              >
                Company
              </Typography>
              <List>
                <Stack gap={2}>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      About
                    </Link>
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      Contact
                    </Link>
                  </ListItem>
                </Stack>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
