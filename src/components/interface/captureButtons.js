import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleCapture } from '../../actions';


const mapStateToProps = (state, ownProps) => {
  return {
    // capture: state.interface.capture
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({ toggleCapture }, dispatch);
};


class CaptureButtons extends Component {

  constructor(props) {
    super(props);
    this.button = 'Capture Keyboard';
  }

  handleClick () {
    toggleCapture();
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-6">
            <button onClick={this.handleClick} className="btn btn-primary btn-lg active">{this.button}</button>
          </div>
      </div>
    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(CaptureButtons);
