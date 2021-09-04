import './style.scss';

interface ICard {
  title: string | null;
}

const Card = ({ title }: ICard) => {
  return (
    <div className="card-parent">
      <div className="title">
        <span>{title ?? 'default'}</span>
      </div>
    </div>
  );
};

export default Card;
