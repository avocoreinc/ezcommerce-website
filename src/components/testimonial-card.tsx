import { Saira_Stencil_One } from 'next/font/google';
import Image from 'next/image';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

type TestimonialCardPropTypes = {
  logoSrc: string;
  avatarSrc?: string;
  author: string;
  role?: string;
  quote: string;
  rating?: number;
};

export default function TestimonialCard({
  logoSrc,
  avatarSrc,
  author,
  role,
  quote,
  rating = 5,
}: TestimonialCardPropTypes) {
  return (
    <Card
      elevation={0}
      sx={{
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',

        boxShadow:
          '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.16)',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: '25px',
        display: 'flex',
        height: '100%',
        padding: 3,

        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow:
            '0 12px 24px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04)',
          borderColor: 'rgba(0, 0, 0, 0.12)',
        },
        '&:hover .testimonial-quote': {
          color: '#ff8c42',
        },
      }}
    >
      <CardContent
        sx={{
          flexDirection: 'column',
          display: 'flex',
          flexGrow: 1,
          gap: 2,
        }}
      >
        {/* DECORATIVE QUOTES */}
        <Box
          className={`testimonial-quote ${sairaStencilOne.className}`}
          sx={{
            transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            color: 'rgba(0, 0, 0, 0.1)',
            pointerEvents: 'none',
            position: 'absolute',
            fontSize: '4.5rem',
            fontWeight: 'bold',
            left: 20,
            top: 0,
          }}
        >
          “
        </Box>
        <Box
          className={`testimonial-quote ${sairaStencilOne.className}`}
          sx={{
            transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            color: 'rgba(0, 0, 0, 0.1)',
            pointerEvents: 'none',
            position: 'absolute',
            fontSize: '4.5rem',
            fontWeight: 'bold',
            bottom: 0,
            right: 20,
          }}
        >
          ”
        </Box>

        {/* LOGO & AVATAR */}
        <Box
          sx={{
            position: 'relative',
            width: 130,
            height: 100,
            margin: '0 auto',
          }}
        >
          {/* LOGO */}
          <Box
            sx={{
              // background: 'rgba(255, 165, 90, 0.10)',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              display: 'flex',
              borderRadius: 2,
              height: '100%',
              width: '100%',
              mx: 'auto',
              mb: 1,
            }}
          >
            <Image
              src={logoSrc}
              alt={`${author} logo`}
              width={110}
              height={90}
              style={{ objectFit: 'contain' }}
            />

            {/* AVATAR */}
            {avatarSrc && (
              <Avatar
                src={avatarSrc}
                alt={author}
                sx={{
                  border: '3px solid white',
                  position: 'absolute',
                  boxShadow: 3,
                  bottom: -18,
                  height: 42,
                  right: -18,
                  width: 42,
                }}
              />
            )}
          </Box>
        </Box>

        {/* AUTHOR & ROLE */}
        <Stack spacing={0.3} textAlign="center" mt={2}>
          <Typography variant="subtitle1" fontWeight={600}>
            {author}
          </Typography>

          {role && (
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          )}
        </Stack>

        {/* QUOTE */}
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            textAlign: 'center',
            fontStyle: 'italic',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            mt: 1,
            px: 1,
          }}
        >
          “{quote}”
        </Typography>

        {/* STARS */}
        <Stack direction="row" spacing={0.5} justifyContent="center" mt="auto">
          {[...Array(rating)].map((_, i) => (
            <StarIcon key={i} fontSize="small" color="warning" />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
