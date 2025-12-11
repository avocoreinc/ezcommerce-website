import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import TestimonialCard from '@/components/testimonial-card';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <Container>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          background: 'linear-gradient(90deg, #e100ff, #7f00ff)',
          fontSize: { xs: '2rem', md: '3rem' },
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          fontWeight: 700,
          mb: '3rem',
        }}
      >
        Hear From Our Partners
      </Typography>
      <Grid container columnSpacing="65px" rowSpacing="35px">
        {testimonials.map((testimonial) => (
          <Grid
            key={testimonial.key}
            size={{ xs: 12, md: 6 }}
            sx={{ display: 'flex' }}
          >
            <TestimonialCard
              logoSrc={testimonial.logoSrc}
              avatarSrc={testimonial.avatarSrc}
              author={testimonial.author}
              role={testimonial.role}
              quote={testimonial.quote}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
