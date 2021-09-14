import './style.scss';

interface IProps {
  onChange: () => {};
  type: string | 'text';
  name: string;
  value: string | '';
  label: string;
  placeHolder?: string;
  error?: boolean;
  className?: string;
  register?: any;
  onEnter?: () => {};
  onBlur?: () => {};
}

const Input = ({
  onChange,
  onEnter,
  type = 'text',
  name,
  value,
  label,
  placeHolder,
  error,
  className,
  register,
  onBlur,
  ...rest
}: IProps) => {
  return (
    <div className="input">
      <span className="input__label">{label}</span>
      <input
        {...register(name)}
        {...rest}
        type={type}
        className={`input__main ${className}`}
        onChange={onChange}
        value={value}
        placeholder={placeHolder}
        onSubmit={onEnter}
      />
    </div>
  );
};

export default Input;
