import { useState, createRef } from 'react';
import Head from 'next/head';

import { Header } from '@widgets/Header';
import { screens } from './api/screens';
import { Scroll } from '@features/Scroll';
import { ObserverWrapper } from '@shared/ui';

export const Home = () => {
  const [activeBlock, setActiveBlock] = useState<string>('');
  const params = { screen: activeBlock, setScreen: setActiveBlock };

  type refs = { [key: string]: { current: HTMLDivElement | null } };

  const refs: refs = screens.reduce((refsObj: refs, { key }) => {
    refsObj[key] = createRef();
    return refsObj;
  }, {});

  const handleCLick = (name: string) => {
    if (name === '') return;
    (refs[name].current as HTMLDivElement).scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Head>
        <title>getShopTV testTask</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>
      <Scroll />
      <Header screen={activeBlock} navTo={handleCLick} />
      <main>
        {screens.map((screen) => (
          <ObserverWrapper
            {...{ ...screen, ...params, refParam: refs[screen.key] }}
            key={screen.key}
          >
            {screen.component}
          </ObserverWrapper>
        ))}
      </main>
    </>
  );
};

export default Home;
