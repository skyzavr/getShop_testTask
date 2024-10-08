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
    id: '',
    key: 'mainScreen',
  },
  {
    component: <Balance />,
    id: 'balance',
    key: 'balance',
  },
  {
    component: <Partners />,
    id: '',
    key: 'Partners',
  },
  {
    component: <Record />,
    id: 'record',
    key: 'record',
  },
  {
    component: <SignUpForm />,
    id: '',
    key: 'signUpForm',
  },
];
