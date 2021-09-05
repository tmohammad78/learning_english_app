import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import usePortal from 'src/components/portal/use-portal';
import './style.scss';

interface ICard {
  title: string | null;
}

const Card = ({ title }: ICard) => {
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

    if (e.target.id === 'modal' || e.target.id === 'modal-dialog') close();
  };
  return (
    <>
      <div className="card-parent" onClick={show}>
        <div className="title">
          <span>{title ?? 'default'}</span>
        </div>
      </div>
      <Portal>
        <div
          className={`modal ${isFadeOut && 'modalFadeOut'}`}
          onClick={handleClickBackdrop}>
          this is modal
        </div>
      </Portal>
    </>
  );
};

export default Card;
