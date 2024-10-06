import { useEffect, useState } from 'react';

type debounceProps = {
  value: string | number | boolean;
  delay: number;
};

export const useDebounce = ({ value, delay }: debounceProps) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounce;
};
