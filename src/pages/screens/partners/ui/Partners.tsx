import Image from 'next/image';

import { images } from '../model/imagesData';

import classes from './partners.module.css';

export const Partners = () => {
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <h3 className={classes.header}>Наши партнёры по монетизации</h3>
        <div className={classes.partnersWrapper}>
          {images.map((el, i) => (
            <Image {...el} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
