import classNames from 'classnames';
import classes from './button.module.css';

type classOptions = 'orange' | 'black';

type buttonProps = {
  cl: classOptions;
  children: string;
  isDisabled?: boolean;
};

export const Button = (props: buttonProps) => {
  const { cl, children, isDisabled = false } = props;

  const btnClassName = classNames(
    classes.button,
    isDisabled ? classes.disabled : classes[cl]
  );

  return (
    <button disabled={isDisabled} className={btnClassName}>
      {children}
    </button>
  );
};
