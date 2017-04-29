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
  console.log(state);
  return ({
    keyStrokeEvents: state.keyStrokeEventsReducer,
    vocalInputResults: state.vocalInputResultsReducer,
    exerciseScores: state.exerciseScoresReducer,
    // greenTime: state.greenTime,
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
  constructor(props) {
    super();
    this.props = props;
    this.options = {
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
      arrowValue: ((180*((this.props.sungNote.centDiff + 50)/100))/180) || 90/180, // THIS VALUE MUST REACT TO CURRENT SUNG PITCH
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
  }

  // let options = {
  //   isInnerNumbers: false,
  //   aperture: 180,
  //   radius : gaugeRadius,
  //   tickOffset: 20,
  //   arcStrokeWidth: 40,
  //   miniTickLength: 1,
  //   miniTickStrokeWidth: 1,
  //   tickLabelOffset: 12,
  //   scaleDivisionNumber: 5,
  //   centralCircleRadius: 10,
  //   marks: ["-50c b", null, "-40", null, "-30", null , "-20", "-15", "-10", "-5", "C", "5", "10", "15", "20", null, "30", null , "40", null, "50c #"],
  //   contentWidth: contWidth,
  //   svgContainerWidth: contWidth,
  //   svgContainerHeight: contHeight,
  //   arrowValue: 96/180,
  //   gaugeCenterLineHeight: centerLineHeight,
  //   ranges: [{
  //     start: 0,
  //     end: 72/180,
  //     color: "#f3595b"
  //   },
  //   {
  //     start: 72/180,
  //     end: 81/180,
  //     color: "#ffc875"
  //   },
  //   {
  //     start: 81/180,
  //     end: 90/180,
  //     color: "#83d7c0"
  //   },
  //   {
  //     start: 90/180,
  //     end: 90/180,
  //     color: "#83d7c0"
  //   },
  //   {
  //     start: 90/180,
  //     end: 99/180,
  //     color: "#83d7c0"
  //   },
  //   {
  //     start: 99/180,
  //     end: 108/180,
  //     color: "#ffc875"
  //   },
  //   {
  //     start: 108/180,
  //     end: 180/180,
  //     color: "#f3595b"
  //   }]
  //
  // }

  render() {
    return (
      <div className="container">
        <ReactGauge {...this.options} />
        {/* <div>
          <div class="tuner">
          <div class="wheel"></div>
          <div class="arrow"></div>
          <div class="freq">440<span>Hz</span></div>
          <svg class="flat" xmlns="http://www.w3.org/2000/svg">
          	<path fill="white" d="M1.349,0v16.376c1.525-1.365,3.251-2.063,5.177-2.095c1.172-0.016,2.176,0.45,3.011,1.397
          		c0.786,0.899,1.204,1.942,1.253,3.131c0.031,0.899-0.193,1.935-0.675,3.106c-0.192,0.466-0.569,0.972-1.132,1.518
          		c-0.306,0.288-0.764,0.714-1.373,1.276C5.073,26.555,2.536,28.426,0,30.321V0H1.349z M5.515,17.532
          		c-0.434-0.481-0.98-0.723-1.638-0.723c-0.834,0-1.493,0.467-1.974,1.397c-0.371,0.707-0.554,2.394-0.554,5.058v4.408
          		c0.016,0.127,0.971-0.707,2.866-2.506c1.011-0.963,1.676-2.087,1.999-3.371c0.128-0.529,0.193-1.043,0.193-1.542
          		C6.407,19.114,6.108,18.207,5.515,17.532z"/>
          </svg>
          <svg class="sharp" xmlns="http://www.w3.org/2000/svg">
          	<path fill="white" d="M0,9.692l2.074-0.676V1.217h1.397v7.344L8.138,7.04V0h1.397v6.584l1.871-0.61v4.979l-1.871,0.61v7.153
          		l1.871-0.611v4.955l-1.871,0.61v7.866H8.138v-7.395l-4.666,1.506v7.105H2.074v-6.65L0,26.778v-4.979l2.074-0.676v-7.128L0,14.672
          		V9.692z M8.138,12.019L3.472,13.54v7.128l4.666-1.498V12.019z"/>
          </svg>

          </div>

          <script src="shims.js"></script>
          <script src="../../../../vendors/mike.js/mike.js"></script>
          <script src="../../../../vendors/pitch.js/src/pitch.js"></script>
          <script src="pitch-logic.js"></script>
        </div> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TuningIndicator);
