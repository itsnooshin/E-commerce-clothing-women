import '@/src/styles/globals.css';
import ThemeRegistry from '@/src/theme/ThemRegistery';
import AuthProvider from '../context/authContext';
import { Providers } from './providers';

export const metadata = {
  title: 'E-commrece Women Clothing',
  description: 'A E-commerece clothing for Women',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <AuthProvider>
        <html lang="en">
          <body>
            <ThemeRegistry>{children}</ThemeRegistry>
          </body>
        </html>
      </AuthProvider>
    </Providers>
  );
}
