import type { AppProps } from 'next/app';
import "@/context/style/style.css"
import "destyle.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  
}

export default MyApp;

