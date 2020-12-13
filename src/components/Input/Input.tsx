import React, { Component } from 'react';
import { connect } from 'react-redux';

interface Props {
  success: boolean;
}
interface State {
  success: boolean;
}

class Input extends Component<Props, State> {
  render(): JSX.Element {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="Enter guess"
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary"
        >
          Guess
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }: State) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
