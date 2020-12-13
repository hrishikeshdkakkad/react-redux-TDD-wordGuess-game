import React, { ReactElement } from 'react';

export interface IGuessedWords {
  guessedWord: string;
  letterMatchCount: number;
}

export interface IProps {
  guessedWords: IGuessedWords[];
}

function GuessWords(props: IProps): ReactElement {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    );
  } else {
    const guessedWordsRows = props.guessedWords.map(
      (word: IGuessedWords, index: number): JSX.Element => (
        <tr data-test="guessed-word" key={index}>
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      )
    );
    contents = (
      <div data-test="guessed-words">
        <h3>
          Guessed words
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>{guessedWordsRows}</tbody>
          </table>
        </h3>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
}

export default GuessWords;
