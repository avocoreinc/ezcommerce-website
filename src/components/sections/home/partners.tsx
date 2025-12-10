import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { partnerLogos } from '@/data/partner-logos';

const Partners = () => {
  return (
    <Container>
      <Typography
        variant="h2"
        sx={{
          background: 'linear-gradient(90deg, #fdc830, #f37335)',
          fontSize: { xs: '2rem', md: '3rem' },
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Trusted Partners for the Most Passionate Brands
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '1.625rem',
          textAlign: 'center',
          color: '#11224e',
          fontWeight: 300,
          mt: 3,
        }}
      >
        We&apos;ve partnered with the world&apos;s leading platforms to deliver
        exceptional results. From marketplace growth to digital advertising, our
        network empowers passionate brands to succeed on every channel.
      </Typography>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        mt={3}
      >
        {partnerLogos.map((logo) => (
          <Grid
            key={logo.key}
            size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
            display="flex"
            justifyContent="center"
          >
            <Box
              sx={{
                width: 200,
                height: 120,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Partners;
