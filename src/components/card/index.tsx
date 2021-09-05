import { useHistory } from 'react-router';
import { WordState } from 'src/types/store';
import './style.scss';

interface ICard {
  word: WordState;
}

const Card = ({ word }: ICard) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`${history.location.pathname}/test`);
  };

  return (
    <>
      <div className="card-parent" onClick={handleClick}>
        <div className="title">
          <span>{word.name ?? 'default'}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
