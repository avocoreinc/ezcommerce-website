import Image from 'next/image';
import Link from 'next/link';

import Box from '@mui/material/Box';

type LogoPropTypes = {
  white?: boolean;
};

function Logo({ white = false }: LogoPropTypes) {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Box sx={{ cursor: 'pointer' }}>
        <Image
          src={white ? '/ezcommerce-logo-white.svg' : '/ezcommerce-logo.svg'}
          alt="EzCommerce Logo"
          width={180}
          height={50}
          priority
        />
      </Box>
    </Link>
  );
}

export default Logo;
