import NextLink from 'next/link';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Link from './link';

function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        borderTop: '2px solid #fff',
        pt: 3,
        mt: 4,
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography textAlign={{ xs: 'center', md: 'left' }} variant="body2">
            © {currentYear} EZ Commerce. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid mt={{ xs: 4, md: 0 }} size={{ xs: 12, md: 6 }}>
          <Stack
            justifyContent={{ xs: 'center', md: 'end' }}
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 4 }}
            alignItems="center"
          >
            <Link component={NextLink} href="#" variant="body2">
              Privacy Policy
            </Link>
            <Link component={NextLink} href="#" variant="body2">
              Terms and Conditions
            </Link>
            <Link component={NextLink} href="#" variant="body2">
              Cookie Settings
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterBottom;
