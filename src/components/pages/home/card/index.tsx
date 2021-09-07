import { useHistory } from 'react-router';
import './style.scss';

interface ICard {
  title: string;
  route: string;
}

const CardDay = ({ title = 'default', route }: ICard) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${8 - parseInt(route)}th`);
  };

  return (
    <>
      <div className="card-parent" onClick={handleClick}>
        <div className="title">
          <span>{title}</span>
        </div>
      </div>
    </>
  );
};

export default CardDay;
