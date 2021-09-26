import React from 'react';

import { AppProps } from 'next/app';

import { MenuTop } from '../components/MenuTop';
import '../styles/globals.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuTop />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
