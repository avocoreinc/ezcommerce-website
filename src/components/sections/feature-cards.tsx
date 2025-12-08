import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import FeatureCard from '@/components/feature-card';

export default function FeatureCards() {
  return (
    <Container>
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          background: 'linear-gradient(90deg, #38ef7d, #11998e)',
          fontSize: { xs: '2rem', md: '3rem' },
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          fontWeight: 700,
          mb: '3rem',
        }}
      >
        The EzCommerce Growth System
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 3 }}>
          <FeatureCard
            imageSrc="/feature-illustrations/amazon-full-service.png"
            imageAlt="Amazon Full Service Illustration"
            title="Amazon Full Service"
            description="End-to-end listing, SEO, and account management for predictable marketplace growth."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <FeatureCard
            imageSrc="/feature-illustrations/amazon-advertising.png"
            imageAlt="Amazon Advertising Illustration"
            title="Amazon Advertising"
            description="Always-on PPC and DSP campaigns with clear reporting and measurable results."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <FeatureCard
            imageSrc="/feature-illustrations/google-meta-ads.png"
            imageAlt="Google and Meta Ads Illustration"
            title="Google & Meta Ads"
            description="Integrated paid search and social to drive demand across channels, not silos."
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <FeatureCard
            imageSrc="/feature-illustrations/d2c-store-solutions.png"
            imageAlt="D2C Store Solutions Illustration"
            title="D2C Store Solutions"
            description="Shopify and WooCommerce builds, CRO, and post-purchase flows for direct sales."
          />
        </Grid>
      </Grid>
    </Container>
  );
}
