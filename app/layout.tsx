import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import { PrimeReactProvider } from 'primereact/api';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Property App',
  description: 'Property App',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </PrimeReactProvider>
  );
}
