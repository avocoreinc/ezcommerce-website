import { Typography } from '@mui/material';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import ClientsCarousel from '@/components/clients-carousel';
import ContactSection from '@/components/sections/home/contact';
import FeatureCards from '@/components/sections/feature-cards';
import Testimonials from '@/components/sections/testimonials';
import Footer from '@/components/footer/footer';
import FAQ from '@/components/sections/faq';
import Hero from '@/components/hero';
import Partners from '@/components/sections/home/partners';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div style={{ position: 'relative' }}>
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '-3%',
              left: '45%',
              right: 0,
              bottom: 0,
              zIndex: -1,
              backgroundImage:
                'url("/patterns/bg-pattern-green-checkmark.svg")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto',
              backgroundPosition: 'top left',
            }}
          />
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '40%',
              right: 0,
              left: 0,
              bottom: 0,
              zIndex: -1,
              backgroundImage:
                'url("/patterns/bg-pattern-orange-checkmark.svg")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto',
              backgroundPosition: 'top right',
            }}
          />

          <Box mt={10}>
            <ClientsCarousel />
          </Box>

          <Box mt={10}>
            <Partners />
          </Box>

          <Box mt={10}>
            <Testimonials />
          </Box>
          <Box mt={10}>
            <FeatureCards />
          </Box>
          <Box mt={10} mb={10}>
            <FAQ />
          </Box>
          {/* <Box mt={10}>
            <ContactSection />
          </Box> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
