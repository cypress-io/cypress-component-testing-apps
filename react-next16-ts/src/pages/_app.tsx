import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { workerSetup, serverSetup } from '../mocks';

// Start a mock API server to handle auth requests
// only in browser though
if (typeof window === 'undefined') {
  serverSetup().then((worker) => {
    worker?.listen();
  })
} else {
  workerSetup().then((worker) => {
    worker?.start();
  })
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
