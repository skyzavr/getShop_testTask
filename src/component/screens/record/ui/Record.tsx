import Image from 'next/image';

import { List } from '@entities/List';
import { Button } from '@shared/ui';

import classes from './record.module.css';
export const Record = () => {
  const list: string[] = [
    'Выручка, CTR, показы и другие показатели в реальном времени.',
    'Инструменты контроля качества трафика.',
    'Ежемесячные автоматические отчёты для каждого правообладателя.',
  ];

  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.descriptionWrapper}>
          <div>
            <h2 className={classes.header}>
              Подробные отчёты для вас и правообладателей
            </h2>
            <List list={list} />
          </div>
          <Button cl="black">Заказать звонок</Button>
        </div>
        <div className={classes.reportImg}>
          <Image src="/images/report.png" alt="" width={721} height={482} />
        </div>
      </div>
    </section>
  );
};
