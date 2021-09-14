import { useState, useCallback } from 'react';

const useInput = (
  initialValue: string,
  validateFn: (value: string) => boolean,
  deps = [],
) => {
  const [value, setValue] = useState(initialValue);
  const [validation, setValidation] = useState({
    error: false,
  });
  const onChange = useCallback((event) => {
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
