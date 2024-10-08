import { useEffect, useState } from 'react';

import { ScrollBtn } from '@shared/ui';

export const Scroll = () => {
  const [isScrollVisible, setIsScrollVisible] = useState<boolean>(false);

  const offSet = 200;
  const handleScroll = () => setIsScrollVisible(window.scrollY > offSet);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrollVisible ? <ScrollBtn onScrollFunc={handleClick} /> : null;
};
