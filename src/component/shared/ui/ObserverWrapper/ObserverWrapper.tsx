import { ReactNode, RefObject, useCallback, useEffect } from 'react';

type OWProps = {
  children: ReactNode;
  id: string;
  screen: string;
  setScreen: (param: string) => void;
  refParam: RefObject<HTMLDivElement>;
};
export const ObserverWrapper = (props: OWProps) => {
  const { children, id, screen, setScreen, refParam } = props;

  const intersectHandler = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const { isIntersecting, target } = entries[0];
      if (target.id === '') return setScreen('');
      if (isIntersecting && target.id !== screen) setScreen(target.id);
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(intersectHandler, {
      rootMargin: '0% 0% -80%',
    });
    observer.observe(refParam.current as Element);
    return () => observer.disconnect();
  }, [intersectHandler, refParam]);

  return (
    <div id={id} ref={refParam}>
      {children}
    </div>
  );
};
