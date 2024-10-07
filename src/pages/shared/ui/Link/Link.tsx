import classes from './link.module.css';
type linkProps = {
  children: string;
  underlineText?: string;
};

export const Link = ({ children, underlineText = 'none' }: linkProps) => {
  return (
    <a style={{ textDecoration: underlineText }} className={classes.link}>
      {children}
    </a>
  );
};
