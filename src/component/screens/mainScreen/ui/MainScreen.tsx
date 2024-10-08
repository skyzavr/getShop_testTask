import { Tabs } from '@widgets/Tabs';
import { Button } from '@shared/ui';

import classes from './mainScreen.module.css';
export const MainScreen = () => {
  const toggleData = [
    {
      id: 1,
      value: 'Операторам',
      desc: 'Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации',
      isActive: true,
    },
    {
      id: 2,
      value: 'ОТТ сервисам',
      desc: 'Дополнительные возможности обогащения данных об аудитории и монетизации',
      isActive: false,
    },
  ];
  return (
    <section className={classes.container} style={{ height: '100vh' }}>
      <div className={classes.wrapper}>
        <div className={classes.infoBlock}>
          <h1 className={classes.header}>
            Монетизируйте клиентскую базу, не снижая NPS
          </h1>
          <p className={classes.desc}>
            Найдите идеальный баланс выручки и удовлетворённости пользователей
            с платформой рекламной монетизации
          </p>
          <Button cl="orange">Заказать звонок</Button>
        </div>
        <div className={classes.toggleBlock}>
          <h2>Дополнительные источники выручки для разных компаний</h2>
          <Tabs list={toggleData} />
        </div>
      </div>
    </section>
  );
};
