import 'destyle.css';
import type { AppProps } from 'next/app';
import '@/context/style/globalStyle.css';
import '@/context/style/swiperStyle.css';
import 'swiper/css/bundle';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
