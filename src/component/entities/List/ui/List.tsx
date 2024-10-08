import { ListItem } from '@shared/ui';

import classes from './list.module.css';

type listProps = {
  list: string[];
};

export const List = ({ list }: listProps) => {
  return (
    <ul className={classes.list}>
      {list.map((el, i) => (
        <ListItem text={el} key={i} />
      ))}
    </ul>
  );
};
