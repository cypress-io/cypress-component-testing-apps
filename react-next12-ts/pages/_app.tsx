import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { workerSetup, serverSetup } from './mocks';

// Start a mock API server to handle auth requests
// only in browser though
if (typeof window === 'undefined') {
  serverSetup().listen();
} else {
  workerSetup().start();
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
