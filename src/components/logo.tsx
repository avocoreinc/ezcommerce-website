import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/ezcommerce-logo.svg"
      alt="EzCommerce Logo"
      width={175}
      height={30}
      style={{ objectFit: 'contain', marginBottom: '8px' }}
    />
  );
}
