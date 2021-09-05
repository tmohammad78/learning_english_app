import { ReactNode, useEffect, useState } from 'react';
import usePortal from 'src/hooks/portal/use-portal';
import './style.scss';

const Modal = ({ chidlren }: { chidlren: ReactNode }) => {
  const [isFadeOut, setIsFadeOut] = useState(false);
  const { Portal, show, hide, isShow } = usePortal({
    defaultShow: false,
    escToHide: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isShow && e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isShow]);

  const close = () => {
    setIsFadeOut(true);
  };

  const handleAnimEnd = () => {
    if (!isFadeOut) return;
    setIsFadeOut(false);
    hide();
  };

  const handleClickBackdrop = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as any).id === 'modal') close();
  };

  return (
    <Portal>
      <div
        id="modal"
        className={`modal ${isFadeOut && 'modalFadeOut'}`}
        onAnimationEnd={handleAnimEnd}
        onClick={handleClickBackdrop}>
        <div className="modal-content">{chidlren}</div>
      </div>
    </Portal>
  );
};
export default Modal;
