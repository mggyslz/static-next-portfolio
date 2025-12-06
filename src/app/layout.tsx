import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'mggyslz',
  description: 'Graphic Designer, UX/UI Designer & Front-End Developer',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}