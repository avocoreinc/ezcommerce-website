'use client';

import { useState } from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function NewsletterForm() {
  const [email, setEmail] = useState<string>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email: ', email);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6" sx={{ fontWeight: 400, fontSize: '1rem' }}>
        Subscribe for Insights and Future News.
      </Typography>
      <Stack direction="row" alignItems="center" gap={1} mt={1} mb={1}>
        <TextField
          size="small"
          variant="outlined"
          label="Email"
          type="email"
          fullWidth
          required
          margin="normal"
          sx={{
            margin: 0,
            '& .MuiInputBase-root': { color: '#fff' },
            '& .MuiInputLabel-root': { color: '#fff' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#fff' },
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              '& fieldset': { borderColor: '#fff' },
              '&:hover fieldset': { borderColor: '#fff' },
              '&.Mui-focused fieldset': { borderColor: '#fff' },
            },
          }}
        />
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderRadius: '20px',
            borderColor: '#fff',
            color: '#fff',
            px: '2rem',
            py: '0.53125rem',
          }}
        >
          Subscribe
        </Button>
      </Stack>
      <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>
        By subscribing you agree to our Privacy Policy and consent to receive
        updates from our company.
      </Typography>
    </Box>
  );
}

export default NewsletterForm;
