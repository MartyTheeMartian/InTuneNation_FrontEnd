import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushNoteToArray,
        toggleAudioCapture } from '../../actions';

import ReactGauge from 'react-gauge-capacity';
let contWidth = 360;
let contHeight = 200;
let gaugeRadius = 125;
let centerLineHeight = 35;

/***************************
** Set following variable to make gauge meter responsive
*/
if(window.innerWidth <= 420 && window.innerWidth > 375){
	contWidth = 340;
	contHeight = 190;
	gaugeRadius = 120;
	centerLineHeight = 30;
} else if (window.innerWidth <= 375 && window.innerWidth > 320){
	contWidth = 300;
	contHeight = 170;
	gaugeRadius = 100;
	centerLineHeight = 30;
} else if (window.innerWidth <= 320){
	contWidth = 260;
	contHeight = 155;
	gaugeRadius = 85;
	centerLineHeight = 20;
}
/****************************/


const mapStateToProps = (state, ownProps) => {
  return ({
    keyStrokeEvents: state.keyStrokeEventsReducer,
    vocalInputResults: state.vocalInputResultsReducer,
    exerciseScores: state.exerciseScoresReducer,
    targetNote: state.targetNoteReducer,
    targetNoteIndex: state.targetNoteIndexReducer,
    sungNote: state.sungNoteReducer,
    recordingStatus: state.recordingStatusReducer,
  });
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({pushNoteToArray, toggleAudioCapture}, dispatch);
};


class TuningIndicator extends Component {
  render() {
    let options = {
      isInnerNumbers: false,
      aperture: 180,
      radius : gaugeRadius,
      tickOffset: 20,
      arcStrokeWidth: 40,
      miniTickLength: 1,
      miniTickStrokeWidth: 1,
      tickLabelOffset: 12,
      scaleDivisionNumber: 5,
      centralCircleRadius: 10,
      marks: ["-50c b", null, "-40", null, "-30", null , "-20", "-15", "-10", "-5", "C", "5", "10", "15", "20", null, "30", null , "40", null, "50c #"],
      contentWidth: contWidth, svgContainerWidth: contWidth, svgContainerHeight: contHeight,
      arrowValue: this.props.sungNote.arrowValue, // THIS VALUE MUST REACT TO CURRENT SUNG PITCH
      gaugeCenterLineHeight: centerLineHeight,
      ranges: [
        {
          start: 0,
          end: 36/180,
          color: "#f3595b",
        },
        {
          start: 36/180,
          end: 72/180,
          color: "#ffc875",
        },
        {
          start: 72/180,
          end: 108/180,
          color: "#83d7c0",
        },
        {
          start: 108/180,
          end: 144/180,
          color: "#ffc875",
        },
        {
          start: 144/180,
          end: 180/180,
          color: "#f3595b",
        },
      ],
    };
    return (
      <div className="container">
        <ReactGauge {...options} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TuningIndicator);
