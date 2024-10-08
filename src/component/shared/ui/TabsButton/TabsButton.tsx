import { TabsButtonItem } from '@shared/ui/index';
import { tabBtnProps } from '@shared/lib/types';

import classes from './tabsButton.module.css';

export const TabsButton = ({ list, onToggle }: tabBtnProps) => {
  return (
    <div className={classes.tabsWrapper}>
      {list.map((el) => (
        <TabsButtonItem {...{ ...el, onToggle }} key={el.id} />
      ))}
    </div>
  );
};
