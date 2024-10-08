import { useEffect, useState } from 'react';

import { Link, MenuButton } from '@shared/ui';
import { CloseBackground } from './CloseBackgroundHelper';

import classes from './header.module.css';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuClass, setMenuClass] = useState<string>(classes.none);
  const [isDocument, setIsDocument] = useState(false);

  const toggleMenu = () => {
    if (!showMenu) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
    setShowMenu((prev) => !prev);
  };

  const onUpdateHeaderStyles = () =>
    setMenuClass(window.scrollY > 300 ? classes.fixed : classes.none);

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
          <a href="#" className={classes.logo}>
            Logo
          </a>
          <div
            className={`${classes.navMenu} ${showMenu ? classes.showMenu : ''}`}
          >
            <ul className={classes.navList}>
              <li className={classes.navItem}>
                <Link>Преимущества</Link>
              </li>
              <li className={classes.navItem}>
                <Link>Как мы работаем</Link>
              </li>
            </ul>
          </div>
          <MenuButton onToggle={toggleMenu} isOpen={showMenu} />
        </nav>
      </header>
      {<CloseBackground {...{ toggleMenu, isDocument, showMenu }} />}
    </>
  );
};
