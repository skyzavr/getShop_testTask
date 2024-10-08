import { useEffect, useState } from 'react';

import classes from './checkBox.module.css';

type checkboxProps = {
  onUpdateData: (data: boolean) => void;
  isChecked?: boolean;
};

export const CheckBox = (checkBoxProps: checkboxProps) => {
  const { onUpdateData, isChecked = false } = checkBoxProps;
  const [checked, setChecked] = useState(isChecked);

  const setCheckedHandler = () => setChecked((prev) => !prev);

  useEffect(() => {
    onUpdateData(checked);
  }, [checked]);

  return (
    <label className={classes.wrapper}>
      <input
        type="checkbox"
        className={checked ? classes.checked : classes.unchecked}
        checked={checked}
        onChange={setCheckedHandler}
      />
    </label>
  );
};
