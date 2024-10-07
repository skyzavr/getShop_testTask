import { CheckBox, Link } from '@shared/ui';

import classes from './termsAgreement.module.css';

type termsAgreement = {
  onUpdateSignPolitics: (data: boolean) => void;
};
export const TermsAgreement = ({ onUpdateSignPolitics }: termsAgreement) => {
  const onUpdateData = (data: boolean) => onUpdateSignPolitics(data);

  return (
    <div className={classes.termsWrapper}>
      <CheckBox onUpdateData={onUpdateData} />
      <p className={classes.termsText}>
        Я ознакомлен(а) с&nbsp;
        <Link underlineText="underline">политикой конфиденциальности</Link> и
        согласен(на) на обработку&nbsp;
        <Link underlineText="underline">персональных данных</Link>.
      </p>
    </div>
  );
};
