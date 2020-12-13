/* eslint-disable no-empty-pattern */
import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';

interface Props {
  success: boolean | object;
}

function Congrats(props: Props): ReactElement {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
