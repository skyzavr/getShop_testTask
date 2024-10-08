import { ChangeEvent, useEffect, useState } from 'react';

import { useDebounce } from '../../lib/useDebounce';

import classes from './textArea.module.css';

type textAreaProps = {
  onSetText: (text: string | number | boolean) => void;
  placeholder: string;
  isDisabled?: boolean;
};

export const TextArea = (props: textAreaProps) => {
  const { onSetText, placeholder, isDisabled = false } = props;

  const [value, setValue] = useState('');
  const debounce = useDebounce({ value, delay: 500 });

  const onSetNewValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (debounce) onSetText(debounce);
  }, [debounce]);

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onSetNewValue}
      disabled={isDisabled}
      className={classes.textArea}
    />
  );
};
