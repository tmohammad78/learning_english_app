import './style.scss';

interface IButton {
  submitText?: string;
  handleClick: () => void;
  customClass?: string;
  children?: object;
}

const Button = ({
  submitText,
  handleClick,
  customClass,
  children,
}: IButton) => {
  return (
    <button onClick={handleClick} className={`button ${customClass}`}>
      {submitText}
      {children}
    </button>
  );
};

export default Button;
