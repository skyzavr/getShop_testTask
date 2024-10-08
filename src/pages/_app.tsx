import '@/styles/clear.css';
import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/typography.css';
import '@/styles/transitions.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
