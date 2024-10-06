import { ChangeEvent, useEffect, useState } from 'react';

import classNames from 'classnames';

import { useDebounce } from '../../lib/useDebounce';

import classes from './input.module.css';

type inputProps = {
  type: 'text';
  placeholder: string;
  SetValueHandler: (data: string) => void;
  isDataCorrect: (data: string) => boolean;
};

export const Input = (inputProps: inputProps) => {
  const { type, placeholder, SetValueHandler, isDataCorrect } = inputProps;

  const [value, setValue] = useState('');
  const [error, setIsError] = useState(false);
  const debounceValue = useDebounce({ value, delay: 1000 });

  const clName = classNames(classes.input, error ? classes.error : '');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsError(false);
  };
  const onValidateHandler = (value: string) => {
    if (isDataCorrect(value)) return SetValueHandler(value);
    setIsError(true);
  };

  useEffect(() => {
    if (debounceValue) onValidateHandler(debounceValue as string);
  }, [debounceValue]);

  return (
    <div className={classes.wrapper}>
      <input
        className={clName}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
      {error && (
        <label className={classes.errorTitle}>Неправильно указана почта</label>
      )}
    </div>
  );
};
