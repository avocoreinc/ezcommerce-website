import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Hero() {
  return (
    <Box id="hero-section" sx={{ position: 'relative', py: 40 }}>
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

      <Container maxWidth="xl">
        <Typography
          variant="h1"
          color="white"
          fontWeight={700}
          textAlign="center"
        >
          <Box sx={{ fontSize: { xs: 50, md: 100 } }}>
            Holistic eCommerce Growth
          </Box>
          <Box sx={{ fontSize: { xs: 30, md: 50 }, mt: 1 }}>
            No Gaps. No Stress.
          </Box>
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
