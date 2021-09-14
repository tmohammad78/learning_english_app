import { useCallback, useState } from 'react';
import createPortal from 'src/hooks/portal/createPortal';
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
  const Portal = useCallback(
    createPortal(containerId, !internalShowHide || isShow),
    [internalShowHide, isShow],
  );

  const hide = () => {
    setIsShow(false);
  };

  const show = () => {
    setIsShow(true);
  };

  const toggle = () => {
    setIsShow((prev) => !prev);
  };

  return { Portal, isShow, toggle, show, hide };
};

export default usePortal;
