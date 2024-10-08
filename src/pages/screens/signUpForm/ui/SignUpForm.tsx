import { SignUp } from '@widgets/SignUp';

import classes from './signUpForm.module.css';

export const SignUpForm = () => {
  return (
    <article className={classes.wrapper}>
      <div className={classes.container}>
        <h2 className={classes.header}>Заполните форму</h2>
        <SignUp />
      </div>
    </article>
  );
};
