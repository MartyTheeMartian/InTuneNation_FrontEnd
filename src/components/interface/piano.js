import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect as reactConnect } from 'react-redux';
import { pushKeyEventToArray, currentPianoNote } from '../../actions';
import getKeyNum from '../../audio/keyNumGenerator';
import getDisplayableNote from '../../audio/pianoNoteForDisplay';
import Tone from '../../../tone-js/tone';


const mapStateToProps = (state) => {
  return {
    leftOctave: state.octaveReducer.leftOctave,
    rightOctave: state.octaveReducer.rightOctave,
    capture: state.captureReducer.capture,
    recordingStatus: state.recordingStatusReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ pushKeyEventToArray, currentPianoNote }, dispatch);
};

class Piano extends Component {

  constructor(props) {
    super(props);
    this.synth = new Tone.Synth().toMaster();
  }

  handleClick = (pianoObj) => {
    let noteObj = {};

    if (this.props.capture) {
      let keyNumAndtNote;
      if (pianoObj.side === 'left') {
        keyNumAndtNote = getKeyNum(pianoObj.note, this.props.leftOctave);
        noteObj.noteName = getDisplayableNote(pianoObj.note, this.props.leftOctave);
        noteObj.octave = this.props.leftOctave;
      }
      else {
        keyNumAndtNote = getKeyNum(pianoObj.note, this.props.rightOctave);
        noteObj.noteName = getDisplayableNote(pianoObj.note, this.props.rightOctave);
        noteObj.octave = this.props.rightOctave;
      }

      noteObj.keyNum = keyNumAndtNote.keyNum;
      noteObj.tNote = keyNumAndtNote.tNote;
      this.props.pushKeyEventToArray(noteObj);
    }

    if (this.props.recordingStatus !== true) {
      let toneNote = pianoObj.note;
      if (pianoObj.side === 'left') {
        toneNote += this.props.leftOctave;
        this.props.currentPianoNote(getDisplayableNote(pianoObj.note, this.props.leftOctave));
      }
      else {
        toneNote += this.props.rightOctave;
        this.props.currentPianoNote(getDisplayableNote(pianoObj.note, this.props.rightOctave));
      }
      this.synth.triggerAttackRelease(toneNote, 0.65);
    }

  }

  render() {
    return (
      <div className="col-md-12">

        <div id="piano">
          {/* right piano */}
          <div onClick={() => this.handleClick({ note: 'C', side: 'left'})} className="white-key"  ></div>
          <div onClick={() => this.handleClick({ note: 'C#', side: 'left'})} className="black-key" ></div>
          <div onClick={() => this.handleClick({ note: 'D', side: 'left'})} className="white-key" ></div>
          <div onClick={() => this.handleClick({ note: 'D#', side: 'left'})} className="black-key" ></div>
          <div onClick={() => this.handleClick({ note: 'E', side: 'left'})} className="white-key" ></div>
          <div onClick={() => this.handleClick({ note: 'F', side: 'left'})} className="white-key" ></div>
          <div onClick={() => this.handleClick({ note: 'F#', side: 'left'})} className="black-key" ></div>
          <div onClick={() => this.handleClick({ note: 'G', side: 'left'})} className="white-key" ></div>
          <div onClick={() => this.handleClick({ note: 'G#', side: 'left'})} className="black-key" ></div>
          <div onClick={() => this.handleClick({ note: 'A', side: 'left'})} className="white-key" ></div>
          <div onClick={() => this.handleClick({ note: 'A#', side: 'left'})} className="black-key" ></div>
          <div onClick={() => this.handleClick({ note: 'B', side: 'left'})} className="white-key" ></div>
          {/* left piano */}
          <div onClick={() => this.handleClick({ note: 'C', side: 'right'})} className="white-key"  ></div>
          <div onClick={() => this.handleClick({ note: 'C#', side: 'right'})} className="black-key" ></div>
          <div onClick={() => this.handleClick({ note: 'D', side: 'right'})} className="white-key" ></div>
          <div onClick={() => this.handleClick({ note: 'D#', side: 'right'})} className="black-key" ></div>
          <div onClick={() => this.handleClick({ note: 'E', side: 'right'})} className="white-key" ></div>
          <div onClick={() => this.handleClick({ note: 'F', side: 'right'})} className="white-key" ></div>
          <div onClick={() => this.handleClick({ note: 'F#', side: 'right'})} className="black-key" ></div>
          <div onClick={() => this.handleClick({ note: 'G', side: 'right'})} className="white-key" ></div>
          <div onClick={() => this.handleClick({ note: 'G#', side: 'right'})} className="black-key" ></div>
          <div onClick={() => this.handleClick({ note: 'A', side: 'right'})} className="white-key" ></div>
          <div onClick={() => this.handleClick({ note: 'A#', side: 'right'})} className="black-key" ></div>
          <div onClick={() => this.handleClick({ note: 'B', side: 'right'})} className="white-key" ></div>

        </div>
      </div>
    );
  }

}

export default reactConnect(mapStateToProps, mapDispatchToProps)(Piano);
