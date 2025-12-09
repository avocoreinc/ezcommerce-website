import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { DUPLICATE_COUNT } from '@/data/client-carousel';

const ScrollTrack = styled(Box)({
  animation: 'scroll 30s linear infinite',
  width: 'max-content',
  display: 'flex',
  gap: '60px',

  '@keyframes scroll': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: `translateX(calc(-100% / ${DUPLICATE_COUNT}))`,
    },
  },

  '&:hover': {
    animationPlayState: 'paused',
  },
});

export default ScrollTrack;
