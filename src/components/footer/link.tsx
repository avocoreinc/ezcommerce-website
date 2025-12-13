import MUILink, { type LinkProps } from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const Link = styled(MUILink)<LinkProps>(() => ({
  transition: 'opacity 0.2s ease-in-out',
  textDecoration: 'none',
  position: 'relative',
  color: 'inherit',

  '&::after': {
    transition: 'width 0.3s ease-in-out',
    backgroundColor: 'currentColor',
    position: 'absolute',
    content: '""',
    height: '1px',
    width: '0%',
    bottom: 0,
    left: 0,
  },

  '&:hover::after': {
    width: '100%',
  },

  '&:hover .link-icon': {
    color: '#ff991d',
  },
}));

export default Link;
