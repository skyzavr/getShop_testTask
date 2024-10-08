import { useState } from 'react';
import Head from 'next/head';

import { Header } from '@widgets/Header';
import { screens } from './api/screens';
import { Scroll } from '@features/Scroll';
import { ObserverWrapper } from '@shared/ui';

export const Home = () => {
  const [activeBlock, setActiveBlock] = useState<string>('');
  const params = { screen: activeBlock, setScreen: setActiveBlock };

  return (
    <>
      <Head>
        <title>getShopTV testTask</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>
      <Scroll />
      <Header screen={activeBlock} />
      <main>
        {screens.map((screen) => (
          <ObserverWrapper {...{ ...screen, ...params }} key={screen.key}>
            {screen.component}
          </ObserverWrapper>
        ))}
      </main>
    </>
  );
};

export default Home;
