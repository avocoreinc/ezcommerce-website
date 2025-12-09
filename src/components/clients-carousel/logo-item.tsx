import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const LogoItem = styled(Box)({
  transition: 'opacity 0.3s ease',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  flexShrink: 0,
  opacity: 0.6,

  '&:hover': {
    opacity: 1,
  },
});

export default LogoItem;
