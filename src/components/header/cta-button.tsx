import Link from 'next/link';

import Button from '@mui/material/Button';

const rainbowGradient = `linear-gradient(120deg, #ff4d4d, #ffa64d, #ffff4d, #4dff4d, #4dffff, #4d4dff, #ff4dff, #ff4d4d)`;
const maskStyle = `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`;

type CTAButtonPropTypes = {
  fullWidth?: boolean;
};

export default function CTAButton({ fullWidth = false }: CTAButtonPropTypes) {
  return (
    <Button
      fullWidth={fullWidth}
      LinkComponent={Link}
      variant="outlined"
      href="#"
      sx={{
        display: fullWidth ? 'flex' : { xs: 'none', md: 'flex' },
        border: '1px solid rgba(255, 255, 255, 0.15)',
        transition: 'all 0.25s ease',
        textTransform: 'none',
        position: 'relative',
        borderRadius: '50px',
        overflow: 'hidden',
        color: '#ff911b',
        fontSize: '1rem',
        fontWeight: 500,
        p: '10px 28px',

        '&::before': {
          animation: 'rainbowGlow 4s linear infinite',
          background: rainbowGradient,
          backgroundSize: '300% 300%',
          maskComposite: 'exclude',
          WebkitMask: maskStyle,
          position: 'absolute',
          borderRadius: '50px',
          mask: maskStyle,
          content: '""',
          padding: '2px',
          inset: 0,

          WebkitMaskComposite: 'xor',
        },

        '&:hover': {
          background: 'rgba(255, 145, 27, 0.08)',
          transform: 'translateY(-1px)',
        },

        '&:active': { transform: 'scale(0.98)' },

        '@keyframes rainbowGlow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      }}
    >
      Free Brand Audit
    </Button>
  );
}
