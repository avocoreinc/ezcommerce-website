import Image from 'next/image';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import ContactForm from '@/components/forms/contact-form';

export default function ContactSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #f37335, #fdc830)',
      }}
    >
      <Container>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography>CONTACT OUR TEAM</Typography>
            <Typography>
              Start your growth journey with expert support
            </Typography>
            <Typography>
              Have a question? Email us at{' '}
              <Link href="#">info@ezcommerce.us</Link>
            </Typography>
            <ContactForm />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ width: '460px', height: '400px', position: 'relative' }}>
              <Image
                src="/misc/home-contact-section-illustration.png"
                alt=""
                fill
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
