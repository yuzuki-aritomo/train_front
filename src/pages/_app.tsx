import type { AppProps } from 'next/app';
import 'destyle.css';
import '@/context/style/globalStyle.css';
import 'swiper/css/bundle';
import styled from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wapper>
      <Component {...pageProps} />
    </Wapper>
  );
}

export default MyApp;

const Wapper = styled.div`
  background: #fff;
  font-size: 14px;
  color: #17191e;
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
`;
