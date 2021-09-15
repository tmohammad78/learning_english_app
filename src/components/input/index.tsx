import { useState } from 'react';
import './style.scss';

interface IProps {
  onChange: (e: any) => void;
  type: string | 'text';
  value: string | '';
  label: string;
  placeHolder?: string;
  error?: boolean;
  className?: string;
  onEnter?: () => {};
  onBlur?: () => {};
}

const Input = ({
  onChange,
  onEnter,
  type = 'text',
  value,
  label,
  placeHolder,
  error,
  className,
  onBlur,
  ...rest
}: IProps) => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`input ${focus ? 'focus' : ''}`}
      onFocus={() => setFocus(true)}
      onBlur={() => !value && setFocus(false)}>
      <span className="input__label">{label}</span>
      <input
        {...rest}
        type={type}
        className={`input__main ${className ?? ''}`}
        onChange={onChange}
        value={value}
        placeholder={placeHolder}
        onSubmit={onEnter}
      />
    </div>
  );
};

export default Input;
