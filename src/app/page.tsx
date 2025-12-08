import { Typography } from '@mui/material';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import ClientsCarousel from '@/components/sections/clients-carousel';
import ContactSection from '@/components/sections/home/contact';
import FeatureCards from '@/components/sections/feature-cards';
import Testimonials from '@/components/sections/testimonials';
import Partners from '@/components/sections/partners';
import Mission from '@/components/sections/mission';
import Footer from '@/components/footer/footer';
import FAQ from '@/components/sections/faq';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div>
          <Box mt={10}>
            <Partners />
          </Box>
          <Box mt={10}>
            <ClientsCarousel />
          </Box>
          <Box mt={10}>
            <Mission />
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
