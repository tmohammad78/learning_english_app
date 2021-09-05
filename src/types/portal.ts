import { SyntheticEvent, MouseEvent as ReactMouseEvent } from 'react';

interface OnShow<T extends SyntheticEvent | Event = ReactMouseEvent> {
  (event: T): void;
}

export interface IPortal {
  containerId?: string;
  autoRemoveContainer?: boolean;
  defaultShow?: boolean;
  clickOutsideToHide?: boolean;
  escToHide?: boolean;
  internalShowHide?: boolean;
  onShow?: OnShow;
  onHide?: OnShow<ReactMouseEvent | MouseEvent | KeyboardEvent>;
}
