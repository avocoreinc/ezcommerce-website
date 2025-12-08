'use client';

import Image from 'next/image';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const ScrollContainer = styled(Box)({
  overflow: 'hidden',
  width: '100%',
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    width: '100px',
    height: '100%',
    zIndex: 2,
    pointerEvents: 'none',
  },
  '&::before': {
    left: 0,
    background: 'linear-gradient(to right, white, transparent)',
  },
  '&::after': {
    right: 0,
    background: 'linear-gradient(to left, white, transparent)',
  },
});

const ScrollTrack = styled(Box)({
  display: 'flex',
  gap: '60px',
  width: 'max-content',
  animation: 'scroll 30s linear infinite',
  '&:hover': {
    animationPlayState: 'paused', // pause on hover
  },
  '@keyframes scroll': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(calc(-100% / 3))',
    },
  },
});

const LogoItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  opacity: 0.6,
  transition: 'opacity 0.3s ease',
  '&:hover': {
    opacity: 1,
  },
});

const CLIENT_LOGOS = [
  { src: '/client-logos/alize.png', alt: 'Alizé', width: 120, height: 120 },
  { src: '/client-logos/alton.png', alt: 'Alton', width: 120, height: 120 },
  {
    src: '/client-logos/bayelon.png',
    alt: 'Bayelon',
    width: 120,
    height: 120,
  },
  { src: '/client-logos/culver.png', alt: 'Culver', width: 120, height: 120 },
  {
    src: '/client-logos/garisar.png',
    alt: 'Garisar',
    width: 120,
    height: 120,
  },
  {
    src: '/client-logos/sarahs-candy-factory.png',
    alt: 'Sarah Candy',
    width: 120,
    height: 120,
  },
  { src: '/client-logos/tayfus.png', alt: 'Tayfus', width: 120, height: 120 },
  {
    src: '/client-logos/tek-cabinets.png',
    alt: 'Tek Cabinets',
    width: 120,
    height: 120,
  },
  {
    src: '/client-logos/w-kitchen-and-bath.png',
    alt: 'W Kitchen and Bath',
    width: 120,
    height: 120,
  },
];

export default function ClientsCarousel() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <ScrollContainer>
      <ScrollTrack>
        {duplicatedLogos.map((logo, index) => (
          <LogoItem key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
            />
          </LogoItem>
        ))}
      </ScrollTrack>
    </ScrollContainer>
  );
}
