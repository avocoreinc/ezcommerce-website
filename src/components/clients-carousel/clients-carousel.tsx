'use client';

import Image from 'next/image';

import { CLIENT_CAROUSEL_LOGOS, DUPLICATE_COUNT } from '@/data/client-carousel';

import ScrollContainer from './scroll-container';
import ScrollTrack from './scroll-track';
import LogoItem from './logo-item';

export default function ClientsCarousel() {
  const duplicatedLogos = Array(DUPLICATE_COUNT)
    .fill(CLIENT_CAROUSEL_LOGOS)
    .flat();

  return (
    <ScrollContainer aria-label="Client logos carousel" role="region">
      <ScrollTrack aria-live="off">
        {duplicatedLogos.map((logo, index) => (
          <LogoItem key={`${logo.key}-${index}`} aria-hidden="true">
            <Image
              src={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
              loading="lazy"
            />
          </LogoItem>
        ))}
      </ScrollTrack>
    </ScrollContainer>
  );
}
