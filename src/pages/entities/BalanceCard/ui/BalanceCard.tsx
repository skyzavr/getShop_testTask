import { Bullet } from '@shared/ui';

import classes from './balanceCard.module.css';

type balanceCardProps = {
  header: string;
  desc: string;
};
export const BalanceCard = ({ header, desc }: balanceCardProps) => {
  return (
    <div className={classes.cardWrapper}>
      <Bullet />
      <div className={classes.card}>
        <p className={classes.cardHeader}>{header}</p>
        <p className={classes.cardDescription}>{desc}</p>
      </div>
    </div>
  );
};
