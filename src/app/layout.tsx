import { Parkinsans } from 'next/font/google';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '@/components/nav-bar';
import theme from '@/theme';

const parkinsans = Parkinsans({
  variable: '--font-parkinsans',
  fallback: ['sans-serif'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={parkinsans.variable}>
      <body>
        <AppRouterCacheProvider>
          <CssBaseline enableColorScheme />
          <ThemeProvider theme={theme}>
            <div style={{ height: '4000px' }}>
              <header>
                <Navbar />
              </header>
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
