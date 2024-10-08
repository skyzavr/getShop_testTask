import { ReactNode } from 'react';

import { SignUpForm } from '@screens/signUpForm';
import { Record } from '@screens/record';
import { Balance } from '@screens/balance';
import { MainScreen } from '@screens/mainScreen';
import { Partners } from '@screens/partners';

type screens = { component: ReactNode; id: string; key: string }[];

export const screens: screens = [
  {
    component: <MainScreen />,
    id: 'mainScreen',
    key: 'mainScreen',
  },
  {
    component: <Balance />,
    id: 'balance',
    key: 'balance',
  },
  {
    component: <Partners />,
    id: 'partners',
    key: 'partners',
  },
  {
    component: <Record />,
    id: 'record',
    key: 'record',
  },
  {
    component: <SignUpForm />,
    id: 'signUpForm',
    key: 'signUpForm',
  },
];
