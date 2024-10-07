import { FormEvent, useCallback, useEffect, useState } from 'react';

import { TermsAgreement } from '@entities/TermsAgreement';
import { Button, Input, TextArea } from '@shared/ui';

import classes from './signUp.module.css';

type formData = {
  message: string;
  email: string;
  signPolitics: boolean;
};

export const SignUp = () => {
  const [isForm, setIsForm] = useState(false);
  const [formData, setFormData] = useState<formData>({
    message: '',
    email: '',
    signPolitics: false,
  });

  const onSetEmail = (data: { error: boolean; value: string }) => {
    const { error, value } = data;
    return error
      ? setIsForm(false)
      : setFormData({ ...formData, email: value });
  };
  const onUpdateSignPolitics = (data: boolean) =>
    setFormData({ ...formData, signPolitics: data });

  const onSetText = useCallback(
    (data: string | number | boolean) =>
      setFormData({ ...formData, message: data as string }),
    [formData]
  );

  const isFormValidate = () => {
    const { email, signPolitics } = formData;
    return Boolean(email && signPolitics);
  };

  const validateEmail = (data: string) => {
    const emailRegex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(data);
  };

  const onSendForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(
      ` your message - ${formData.message} and your email address - ${formData.email} has been sent`
    );
  };

  useEffect(() => {
    setIsForm(isFormValidate());
  }, [formData]);

  return (
    <form className={classes.signUpForm} onSubmit={onSendForm}>
      <div className={classes.textAreaField}>
        <TextArea onSetText={onSetText} placeholder="Напишите свой вопрос" />
      </div>
      <div className={classes.contactInfoField}>
        <Input
          type="text"
          placeholder="Введите e-mail"
          isDataCorrect={validateEmail}
          SetValueHandler={onSetEmail}
        />
        <TermsAgreement onUpdateSignPolitics={onUpdateSignPolitics} />
        <Button isDisabled={!isForm} cl="black">
          Отправить
        </Button>
      </div>
    </form>
  );
};
