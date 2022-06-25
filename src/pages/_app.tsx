import type { AppProps } from 'next/app';
import 'destyle.css';
import '@/context/style/globalStyle.css';
import 'swiper/css/bundle';
import styled from 'styled-components';
import { BLUE } from '@/context/style/colorTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wapper>
      <Component {...pageProps} />
    </Wapper>
  );
}

export default MyApp;

const Wapper = styled.div`
  position: relative;
  border: 1px solid ${BLUE};
`;
