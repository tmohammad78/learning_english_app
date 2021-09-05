import { useCallback, useState } from 'react';
import createPortal from 'src/components/portal/createPortal';
import { IPortal } from 'src/types/portal';

export const defaultContainerId = 'modal-root';
export const initAutoRemoveContainer = true;
export const initShow = true;

const usePortal = ({
  containerId = defaultContainerId,
  autoRemoveContainer = initAutoRemoveContainer,
  defaultShow = initShow,
  clickOutsideToHide = true,
  escToHide = true,
  internalShowHide = true,
  onShow,
  onHide,
}: IPortal) => {
  const [isShow, setIsShow] = useState<boolean>(defaultShow);
  const Portal = useCallback(createPortal(containerId, isShow), [
    internalShowHide,
    isShow,
  ]);

  const hide = () => {
    setIsShow(false);
  };

  const show = () => {
    setIsShow(true);
  };

  const toggle = () => {
    isShow ? hide() : show();
  };

  return { Portal, isShow, toggle, show, hide };
};

export default usePortal;
