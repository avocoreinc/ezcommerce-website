type testimonialsType = {
  key: string;
  logoSrc: string;
  avatarSrc?: string;
  author: string;
  role?: string;
  quote: string;
};

export const testimonials: testimonialsType[] = [
  {
    key: 'personalize-ornaments',
    logoSrc: '/client-logos/personalize-ornaments.png',
    avatarSrc:
      'https://img1.wsimg.com/isteam/ip/56c0cc13-b423-4d20-93f5-b95b2a675d4e/Robert-Fishman.jpg',
    author: 'Volkan Tekin',
    role: 'Owner',
    quote:
      'Having experienced professionals as our single point of contact has been a huge advantage.Working with the EzCommerce team feels like being part of a family. We can finally focus on growth — not just sales.',
  },
  {
    key: 'vrd-socks',
    logoSrc: '/client-logos/vrd-socks.svg',
    author: 'Fatih Odabasi',
    role: 'Owner',
    quote:
      'We needed unified management for D2C and marketplaces. Their cross-channel approach improved our ROAS and made our ad spend work harder.',
  },
  {
    key: 'tayfus',
    logoSrc: '/client-logos/tayfus.svg',
    author: 'Tayfus Team',
    quote:
      'EZCommerce integrated with our team, delivering steady results and actionable insights. Their transparency and reliability set them apart.',
  },
  {
    key: 'garisar',
    logoSrc: '/client-logos/garisar.svg',
    author: 'Garisar Team',
    quote:
      'We needed unified management for D2C and marketplaces. Their cross-channel approach improved our ROAS and made our ad spend work harder.',
  },
];
