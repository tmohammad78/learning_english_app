import { ReactNode, ReactPortal, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const createEl = (id: string): HTMLDivElement => {
  const el = document.createElement('div');
  el.setAttribute('id', id);
  document.body.appendChild(el);

  return el;
};

interface Props {
  children: ReactNode;
}
export default (id: string, isShow: boolean) =>
  ({ children }: Props): ReactPortal | null => {
    const [container, setContainer] = useState<HTMLElement>();

    useEffect(() => {
      if (!isShow) return () => null;

      setContainer(document.getElementById(id) || createEl(id));

      return () => {
        if (!container) return;
        container.innerHTML === '' && container.remove();
      };
    }, [container]);

    return isShow && container ? createPortal(children, container) : null;
  };
