import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleCapture } from '../../actions';
import { captureReducer } from '../../reducers';


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    captureText: state.captureReducer.captureText
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators ({ toggleCapture }, dispatch);
// };


class CaptureButtons extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.toggleCapture();
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-6">
            <button onClick={this.handleClick} className="btn btn-primary btn-lg active">{this.props.captureText}</button>
          </div>
      </div>
    );
  }

}

export default connect (mapStateToProps, { toggleCapture })(CaptureButtons);
