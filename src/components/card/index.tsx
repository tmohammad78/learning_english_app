import './style.scss';

interface ICard {
  title: string;
}

const Card = ({ title }: ICard) => {
  return (
    <div className="card-parent">
      <div className="title">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Card;
