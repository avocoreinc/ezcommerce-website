import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Hero() {
  return (
    <Box
      id="hero-section"
      sx={{ position: 'relative', pt: 45, height: '1050px' }}
    >
      <Image
        src="/hero-section/clouds.jpg"
        alt="Hero Section Background"
        fill
        priority
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
      />

      <Container sx={{ height: '500px' }}>
        <Typography
          variant="h1"
          color="white"
          fontWeight={700}
          sx={{ fontSize: { xs: 30, md: 100 } }}
          textAlign="center"
        >
          Holistic eCommerce Growth No Gaps. No Stress.
        </Typography>

        <Typography
          variant="h2"
          color="white"
          fontWeight={500}
          sx={{ fontSize: { xs: 20, md: 26 } }}
          textAlign="center"
          mt={5}
        >
          Unlock predictable revenue with full-service marketplace and D2C
          management. Strategy, creative, media, and analytics delivered in
          clear, actionable steps for ambitious brands.
        </Typography>
      </Container>
    </Box>
  );
}
