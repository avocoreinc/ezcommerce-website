import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const ScrollContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',

  '&::before, &::after': {
    pointerEvents: 'none',
    position: 'absolute',
    height: '100%',
    width: '100px',
    content: '""',
    zIndex: 2,
    top: 0,
  },

  '&::before': {
    background: 'linear-gradient(to right, white, transparent)',
    left: 0,
  },

  '&::after': {
    background: 'linear-gradient(to left, white, transparent)',
    right: 0,
  },

  '@media (prefers-reduced-motion: reduce)': {
    '& > *': {
      animation: 'none !important',
    },
  },
});

export default ScrollContainer;
