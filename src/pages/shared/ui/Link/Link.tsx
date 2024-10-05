import classes from './link.module.css';
type linkProps = {
  children: string;
};

export const Link = ({ children }: linkProps) => {
  return <a className={classes.link}>{children}</a>;
};
