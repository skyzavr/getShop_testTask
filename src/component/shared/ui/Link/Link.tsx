import classNames from 'classnames';
import classes from './link.module.css';
type linkProps = {
  children: string;
  isActive?: boolean;
  underlineText?: string;
};

export const Link = (LinkProps: linkProps) => {
  const { children, isActive = false, underlineText = 'none' } = LinkProps;

  const cl = classNames(classes.link, isActive ? classes.active : '');

  return (
    <a style={{ textDecoration: underlineText }} className={cl}>
      {children}
    </a>
  );
};
