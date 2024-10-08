import { BalanceCard } from '@/pages/entities/BalanceCard';
import { BalanceView } from '@/pages/entities/BalanceView';

import classes from './balance.module.css';
export const Balance = () => {
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.header}>
          Баланс между выручкой и удовлетворённостью пользователей
        </h2>
        <div className={classes.cardWrapper}>
          <BalanceCard
            header="Частотность под контролем"
            desc="Чтобы не ронять NPS и не увеличивать отток пользователей"
          />
          <BalanceView />
          <BalanceCard
            header="Максимальная выручка"
            desc="За счёт заполенения всех рекламных мест по высокой цене"
          />
        </div>
      </div>
    </section>
  );
};
