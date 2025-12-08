import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NewTestimonialCard from '@/components/testimonial-card';

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
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
          <NewTestimonialCard
            logoSrc="/testimonials-section/personalized-ornaments-logo.png"
            avatarSrc="https://img1.wsimg.com/isteam/ip/56c0cc13-b423-4d20-93f5-b95b2a675d4e/Robert-Fishman.jpg"
            author="Volkan Tekin"
            role="Owner"
            quote="Having experienced professionals as our single point of contact has
            been a huge advantage.Working with the EzCommerce team feels like
            being part of a family. We can finally focus on growth — not just
            sales."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
          <NewTestimonialCard
            logoSrc="/testimonials-section/vrd-socks-logo.png"
            author="Fatih Odabasi"
            role="Owner"
            quote="We needed unified management for D2C and marketplaces. Their
            cross-channel approach improved our ROAS and made our ad spend work
            harder."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
          <NewTestimonialCard
            logoSrc="/testimonials-section/tayfus-logo.png"
            author="Tayfus Team"
            quote="EZCommerce integrated with our team, delivering steady results and
            actionable insights. Their transparency and reliability set them
            apart."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
          <NewTestimonialCard
            logoSrc="/testimonials-section/garisar-logo.png"
            author="Garisar Team"
            quote="We needed unified management for D2C and marketplaces. Their
            cross-channel approach improved our ROAS and made our ad spend work
            harder."
          />
        </Grid>
      </Grid>
    </Container>
  );
}
