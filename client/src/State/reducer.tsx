// src/patterns/reducer.ts

export interface State {
  isDoorOpen: boolean;
  showPinForm: boolean;
  attempts: number;
  showArrow: boolean;
}

export type Action =
  | { type: 'openDoor' }
  | { type: 'closeDoor' }
  | { type: 'showPinForm' }
  | { type: 'incrementAttempts' }
  | { type: 'resetAttempts' }
  | { type: 'showArrow' }
  | { type: 'hideArrow' };

export const initialState: State = {
  isDoorOpen: false,
  showPinForm: false,
  attempts: 0,
  showArrow: false,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'openDoor':
      return { ...state, isDoorOpen: true, showPinForm: false, attempts: 0 };
    case 'closeDoor':
      return { ...state, isDoorOpen: false, showArrow: false };
    case 'showPinForm':
      return { ...state, showPinForm: true };
    case 'incrementAttempts':
      return { ...state, attempts: state.attempts + 1 };
    case 'resetAttempts':
      return { ...state, attempts: 0 };
    case 'showArrow':
      return { ...state, showArrow: true };
    case 'hideArrow':
      return { ...state, showArrow: false };
    default:
      return state;
  }
}
