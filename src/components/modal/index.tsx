import { ReactNode, useEffect, useState } from 'react';
import usePortal from 'src/hooks/portal/use-portal';
import './style.scss';

const Modal = ({
  children,
  showModal,
}: {
  children: ReactNode;
  showModal: boolean;
}) => {
  const [isFadeOut, setIsFadeOut] = useState(false);
  const { Portal, show, hide, isShow, toggle } = usePortal({
    escToHide: false,
  });

  useEffect(() => {
    toggle();
  }, [showModal]);

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

  const handleClickBackdrop = (e: any) => {
    if (e.target.id === 'modal') close();
  };

  return (
    <Portal>
      <div
        id="modal"
        className={`modal ${isFadeOut && 'modalFadeOut'}`}
        onAnimationEnd={handleAnimEnd}
        onClick={handleClickBackdrop}>
        <div className="modal-content">{children}</div>
      </div>
    </Portal>
  );
};
export default Modal;
