import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushNoteToArray,
         toggleCapture,
         toggleAudioCapture
       } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    captureText: state.captureReducer.captureText,
    disabled: state.captureReducer.disabled,
    keyStrokeEvents: state.keyStrokeEvents,
    vocalInputResults: state.vocalInputResults,
    exerciseScores: state.exerciseScores,
    greenTime: state.greenTime,
    targetNote: state.targetNote,
    targetNoteIndex: state.targetNoteIndex,
    sungNote: state.sungNote,
    recordingStatus: state.recordingStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({toggleAudioCapture, toggleCapture}, dispatch);
};


class CaptureButtons extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () =>  {
    this.props.toggleCapture();

  // handleClick(id) {
    // toggleCapture();
//     console.log('click');
//     switch(id) {
//       case 1:
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       default:
//         break;
    }

  render() {
    return (
      <div className="row">
          <div className="col-md-6">
            <button onClick={this.handleClick} className="btn btn-primary btn-lg active" disabled={this.props.disabled}>{this.props.captureText}</button>
          <div className="col-md3">
            <button onClick={this.props.toggleAudioCapture} className="btn btn-primary btn-lg active">Toggle Audio Input</button>
          </div>
            <p>
              Recording Status: { this.props.recordingStatus }
            </p>
          </div>
{/* //           <div className="col-md3">
//             <button onClick={this.handleClick(5)} className="btn btn-primary btn-lg active">Reset Key Events</button>
//           </div> */}
      </div>
    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(CaptureButtons);
