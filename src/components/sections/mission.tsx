import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Mission() {
  return (
    <Container>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          background: 'linear-gradient(90deg, #fdc830, #f37335)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
        }}
      >
        Where Brands Grow on Every Channel
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        mt={3}
        sx={{ fontSize: { md: '1.625rem' }, color: '#11224e', fontWeight: 300 }}
      >
        We help the most passionate brands scale on Amazon, D2C, and beyond. Our
        team covers strategy, creative, media, and analytics-so your growth
        compounds, not scatters.
      </Typography>
    </Container>
  );
}
