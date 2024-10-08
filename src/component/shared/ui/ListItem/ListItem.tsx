import { Bullet } from '../Bullet/Bullet';

import classes from './listItem.module.css';

export const ListItem = ({ text }: { text: string }) => {
  return (
    <li className={classes.itemWrapper}>
      <Bullet />
      <span className={classes.text}>{text}</span>
    </li>
  );
};
