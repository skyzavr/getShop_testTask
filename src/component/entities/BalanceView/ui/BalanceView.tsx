import Image from 'next/image';

import classes from './balanceView.module.css';
export const BalanceView = () => {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.decorate}>
        <div className={classes.circle}></div>
        <div className={classes.line}></div>
        <div className={classes.circle}></div>
      </div>
      <div className={classes.logoWrapper}>
        <Image
          src="/images/icons/abstraction.svg"
          alt="abstraction"
          width={80}
          height={75}
        />
      </div>
    </div>
  );
};
