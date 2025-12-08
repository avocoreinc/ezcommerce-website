import Image from 'next/image';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Partners() {
  return (
    <Container>
      <Grid container spacing={8} alignItems="center" justifyContent="center">
        <Grid>
          <Image
            src="/partners-section/amazon-ads-verified-partner-logo.png"
            alt="Amazon Ads Verified Partner Logo"
            width={155}
            height={110}
          />
        </Grid>
        <Grid>
          <Image
            src="/partners-section/google-partner-logo.png"
            alt="Google Partner Logo"
            width={155}
            height={58}
          />
        </Grid>
        <Grid>
          <Image
            src="/partners-section/aws-partner-network-logo.svg"
            alt="AWS Partner Network Logo"
            width={155}
            height={67}
          />
        </Grid>
        <Grid>
          <Image
            src="/partners-section/shopify-partners-logo.png"
            alt="Shopify Partners Logo"
            width={185}
            height={55}
          />
        </Grid>
        <Grid>
          <Image
            src="/partners-section/walmart-advertising-partners-logo.png"
            alt="Walmart Advertising Partners Logo"
            width={220}
            height={115}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
