import { useState } from 'react';

import { TabsButton } from '@shared/ui/index';
import { TabsButtonItemToggleBtn, TabList } from '@shared/lib/types';

import classes from './tabs.module.css';

export const Tabs = ({ list }: TabList) => {
  const [buttonsList, setButtonsList] = useState([...list]);

  const updateListOfParams = (currentId: number) => {
    const btns = [...buttonsList].map((el) => {
      return { ...el, isActive: el.id === currentId ? true : false };
    });
    setButtonsList(btns);
  };

  const onToggle = (data: TabsButtonItemToggleBtn) => {
    const { isTheSame, id } = data;
    if (isTheSame) return;
    updateListOfParams(id);
  };

  const desc = buttonsList.filter((el) => el.isActive === true)[0].desc;

  return (
    <div className={classes.wrapper}>
      <TabsButton {...{ list: buttonsList, onToggle }} />
      <div className={classes.description}>{desc}</div>
    </div>
  );
};
