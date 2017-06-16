import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleAudioCapture, singButton, resetState } from '../../actions';
import Tone from '../../../tone-js/tone';

const mapStateToProps = (state) => {
  return {
    resetDisabled: state.captureReducer.resetDisabled,
    singText: state.singButtonReducer.singText,
    singDisabled: state.singButtonReducer.disabled,
    captureDisabled: state.captureReducer.disabled,
    captureText: state.captureReducer.captureText,
    keyEvents: state.keyEventsReducer,
    recordingStatus: state.recordingStatusReducer,
  };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators({ toggleAudioCapture, singButton, resetState }, dispatch); };

class SingButtons extends Component {
  constructor(props) {
    super(props);
    this.synth = new Tone.Synth().toMaster();
  }

  handleResetClick = () => { this.props.resetState(); }

  handleSingClick = () => {
    this.props.toggleAudioCapture();
    this.props.singButton();
  }

  handleStartingNoteClick = () => {
    if (!this.props.recordingStatus) {
      const tone = this.props.keyEvents[0].tNote.toUpperCase();
      this.synth.triggerAttackRelease(tone, 0.65);
    }
  }

  // handlePlayExerciseClick = () => {
  //   if (!this.props.recordingStatus) {
  //     const firstNote = this.props.keyEvents[0].tNote.toUpperCase();
  //     let chain = this.synth.triggerAttackRelease(firstNote, 0.65, 0);
  //     for (var i = 1; i < this.props.keyEvents.length; i++) {
  //       let newNote = this.props.keyEvents[i].tNote.toUpperCase();
  //       chain = chain.setNote(newNote, "+4n");
  //     }
  //     chain;
      // this.props.keyEvents.forEach((keyEvent, index) => {
      //   const tone = keyEvent.tNote.toUpperCase();
      //   console.log(index);
      //   this.synth.triggerAttackRelease(tone, 0.5);
      //   // notes.push(instanceFn);
      // });
      // notes.forEach((fn) => { fn(); });
    // }
  // }

  getDisabled = () => {
    if (this.props.captureDisabled === '') { return 'disabled'; }
    else if (this.props.singDisabled === false) { return 'disabled'; }
  }

  render() {
    return (
      <div className="row">
        {/* <div className="col-md-12">
          <button id="play-exercise-button" onClick={this.handlePlayExerciseClick} className="btn btn-lg active captureBox" disabled={this.getDisabled()}>PLAY EXERCISE</button>
        </div> */}
        <div className="col-md-12">
          <button id="starting-note-button" onClick={this.handleStartingNoteClick} className="btn btn-lg active captureBox" disabled={this.getDisabled()}>START 🎵</button>
        </div>
          <div className="col-md-12">
            <button id="sing-button" onClick={this.handleSingClick} className="btn btn-lg active captureBox" disabled={this.getDisabled()}>{this.props.singText}</button>
          </div>
          <div className="col-md-12">
            <button onClick={this.handleResetClick} className="btn btn-lg active captureBox" disabled={this.props.resetDisabled} >RESET</button>
          </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SingButtons);
