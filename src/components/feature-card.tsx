import Image from 'next/image';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

type FeatureCardPropTypes = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  imageSrc,
  imageAlt,
  title,
  description,
}: FeatureCardPropTypes) {
  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 4,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.25s ease',
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        '&:hover': {
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
          transform: 'translateY(-4px)',
          borderColor: 'rgba(0, 0, 0, 0.05)',
        },
      }}
    >
      {/* IMAGE SECTION */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.02)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={240}
          height={180}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* CARD CONTENT */}
      <CardContent
        sx={{
          flexGrow: 1,
          px: 3,
          py: 4,
        }}
      >
        <Typography variant="h6" component="h3" fontWeight={700} sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
