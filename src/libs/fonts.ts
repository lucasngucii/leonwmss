import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});
