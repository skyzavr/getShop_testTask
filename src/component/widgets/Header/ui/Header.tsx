import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Link, MenuButton } from '@shared/ui';
import { CloseBackground } from './CloseBackgroundHelper';
import { linkList } from '../model/linksList';

import classes from './header.module.css';

type HeaderProps = {
  screen: string;
  navTo: (key: string) => void;
};

export const Header = ({ screen, navTo }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuClass, setMenuClass] = useState<string>(classes.none);
  const [isDocument, setIsDocument] = useState(false);

  const navigateToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const toggleMenu = () => {
    if (!showMenu) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
    setShowMenu((prev) => !prev);
  };

  const onUpdateHeaderStyles = () =>
    setMenuClass(window.scrollY > 100 ? classes.fixed : classes.none);

  const navMenuClasses = classNames(
    classes.navMenu,
    showMenu ? classes.showMenu : ''
  );
  const navigateToBlock = (id: string) => {
    if (showMenu) toggleMenu();
    navTo(id);
  };

  useEffect(() => {
    window.addEventListener('scroll', onUpdateHeaderStyles);
    return () => {
      window.removeEventListener('scroll', onUpdateHeaderStyles);
    };
  }, []);

  useEffect(() => {
    setIsDocument(typeof document !== 'undefined');
  });

  return (
    <>
      <header className={`${classes.header} ${menuClass}`}>
        <nav className={classes.wrapper}>
          <a className={classes.logo} onClick={navigateToTop}>
            Logo
          </a>
          <div className={navMenuClasses}>
            <ul className={classes.navList}>
              {linkList.map(({ child, id }) => (
                <li key={id} onClick={() => navigateToBlock(id)}>
                  <Link isActive={screen === id}>{child}</Link>
                </li>
              ))}
            </ul>
          </div>
          <MenuButton onToggle={toggleMenu} isOpen={showMenu} />
        </nav>
      </header>
      {<CloseBackground {...{ toggleMenu, isDocument, showMenu }} />}
    </>
  );
};
