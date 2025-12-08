import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function FAQ() {
  return (
    <Container>
      <Paper
        sx={{
          p: '30px 40px',
        }}
      >
        <Box>
          <Typography
            sx={{
              background: 'linear-gradient(90deg, #e100ff, #7f00ff)',
              fontSize: '1rem',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              textAlign: 'center',
              fontWeight: 700,
            }}
          >
            FAQ
          </Typography>
          <Typography
            sx={{
              background: 'linear-gradient(90deg, #e100ff, #7f00ff)',
              fontSize: { xs: '2rem', md: '3.75rem' },
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              textAlign: 'center',
              fontWeight: 700,
            }}
          >
            Clarity For Every Commerce Question
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#11224e',
              fontSize: '1.625rem',
              my: 3,
            }}
          >
            Find straightforward answers about our e-commerce process, services,
            and how we help brands grow on Amazon and D2C
          </Typography>
        </Box>
        <Stack>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  color: '#11224e',
                }}
              >
                What services do you offer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              We provide end-to-end support for brands on Amazon and D2c,
              covering listing management, advertising, creative, analytics, and
              compliance. Our team handles strategy, execution, and reporting so
              you can focus on growth.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  color: '#11224e',
                }}
              >
                How do you work with brands
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              We begin with an audit and goal alignment, then build a 90-day
              plan. Weekly updates, clear ownership, and transparent reporting
              keep you informed. We can work alongside your team or as your full
              e-commerce department.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  color: '#11224e',
                }}
              >
                How is your approach unique?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Our operator-led team bring deep channel expertise and
              cross-channel planning. We focus on compounding results, not
              scattered tasks, and provide real-time dashboards for full
              visibility.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                component="span"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  color: '#11224e',
                }}
              >
                Who benefits most from your services?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              We work best with brands selling on Amazon and D2C, especially in
              beauty, food, home, fashion, and specialty CPG. We tailor our
              approach for both full ownership and in-house support.
            </AccordionDetails>
          </Accordion>
          <Box>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                color: '#11224e',
              }}
            ></Typography>
            <Typography
              sx={{
                color: '#11224e',
              }}
            ></Typography>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}
