import { actionTypes } from '../actions';

interface IAction {
  type: string;
}

export const successReducer = (
  state: boolean = false,
  action: IAction
): boolean => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
