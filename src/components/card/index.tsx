import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import usePortal from 'src/components/portal/use-portal';
import { WordState } from 'src/types/store';
import './style.scss';

interface ICard {
  word: WordState;
}

const Card = ({ word }: ICard) => {
  const [isFadeOut, setIsFadeOut] = useState(false);
  const { Portal, show, hide, isShow } = usePortal({
    defaultShow: false,
    escToHide: false,
  });

  const close = () => {
    setIsFadeOut(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isShow && e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isShow]);

  const handleClickBackdrop = (e: any) => {
    // const { id } = e.target as HTMLDivElement;

    if (e.target.id === 'modal') close();
  };

  const handleAnimEnd = () => {
    if (!isFadeOut) return;

    setIsFadeOut(false);
    hide();
  };

  return (
    <>
      <div className="card-parent" onClick={show}>
        <div className="title">
          <span>{word.name ?? 'default'}</span>
        </div>
      </div>
      <Portal>
        <div
          id="modal"
          className={`modal ${isFadeOut && 'modalFadeOut'}`}
          onAnimationEnd={handleAnimEnd}
          onClick={handleClickBackdrop}>
          <div className="modal-content">this is modal</div>
        </div>
      </Portal>
    </>
  );
};

export default Card;
