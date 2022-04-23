import { BLACK, WHITE } from '@/context/style/colorTheme';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${WHITE};
  color: ${BLACK};
`;
