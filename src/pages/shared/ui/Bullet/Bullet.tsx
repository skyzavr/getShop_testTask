import Image from 'next/image';

import classes from './bullet.module.css';

export const Bullet = () => {
  return (
    <div className={classes.icon}>
      <Image src="/images/icons/arrow.svg" alt="arrow" width={8} height={8} />
    </div>
  );
};
