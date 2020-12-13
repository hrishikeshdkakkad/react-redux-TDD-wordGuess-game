interface ICorrectGuess {
  type: string;
}

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

export const correctGuess = (): ICorrectGuess => {
  return { type: actionTypes.CORRECT_GUESS };
};
