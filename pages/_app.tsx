import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { stats } from 'utils/stats';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    stats.pageview();
  }, [router.pathname])
  return <Component {...pageProps} />;
}
