import { useState, useCallback } from 'react';
interface IOptions {
  validateFn: (value: string) => boolean;
  change: (value: string) => string;
}

const useInput = (
  initialValue: string,
  { validateFn, change }: IOptions,
  deps = [],
) => {
  const [value, setValue] = useState(initialValue);
  const [validation, setValidation] = useState({
    error: false,
  });

  const onChange = useCallback((event) => {
    console.log(event);

    if (typeof change === 'function') {
      change(event.target.value);
    }
    setValue(event.taget.value);
  }, deps);

  return {
    value,
    onChange,
    validate: () => {
      setValidation({
        error: validateFn(value),
      });
    },
    ...validation,
  };
};

export default useInput;
