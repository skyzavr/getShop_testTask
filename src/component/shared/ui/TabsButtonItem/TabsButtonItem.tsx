import classNames from 'classnames';

import { tabBtnPropsItem } from '@shared/lib/types';

import classes from './tabsButtonItem.module.css';

export const TabsButtonItem = (btnProps: tabBtnPropsItem) => {
  const { id, value, isActive, onToggle } = btnProps;

  const cl = classNames(classes.btn, isActive ? classes.active : classes.off);

  const onToggleHandler = () => {
    return isActive
      ? onToggle({ isTheSame: true, id })
      : onToggle({ isTheSame: false, id });
  };
  return (
    <button className={cl} onClick={onToggleHandler}>
      {value}
    </button>
  );
};
