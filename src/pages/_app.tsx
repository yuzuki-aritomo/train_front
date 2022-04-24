import type { AppProps } from 'next/app';
import '@/context/style/globalStyle.css';
import '@/context/style/swiperStyle.css';
import 'swiper/css/bundle';
import 'destyle.css';
import "@/context/style/style.css"
import "destyle.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  
}

export default MyApp;

