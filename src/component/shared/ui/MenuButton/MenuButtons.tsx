import classes from './menuButton.module.css';

type menuButtonProps = { onToggle: () => void; isOpen: boolean };

export const MenuButton = ({ onToggle, isOpen }: menuButtonProps) => {
  return (
    <div className={classes.toggle} onClick={onToggle}>
      <div className={!isOpen ? classes.openMenu : classes.closeMenu}>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>
    </div>
  );
};
