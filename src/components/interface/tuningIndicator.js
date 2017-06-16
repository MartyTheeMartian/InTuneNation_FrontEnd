import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushNoteToArray,
        toggleAudioCapture } from '../../actions';

import ReactGauge from '../../utils/react-gauge-capacity/lib/react-gauge.js';

let contWidth = 360;
let contHeight = 200;
let gaugeRadius = 125;
let centerLineHeight = 35;

/** *************************
** Set following variable to make gauge meter responsive
*/
if (window.innerWidth <= 420 && window.innerWidth > 375) {
  contWidth = 340;
  contHeight = 190;
  gaugeRadius = 120;
  centerLineHeight = 30;
} else if (window.innerWidth <= 375 && window.innerWidth > 320) {
  contWidth = 300;
  contHeight = 170;
  gaugeRadius = 100;
  centerLineHeight = 30;
} else if (window.innerWidth <= 320) {
  contWidth = 260;
  contHeight = 155;
  gaugeRadius = 85;
  centerLineHeight = 20;
}
/** **************************/


const mapStateToProps = (state, ownProps) => ({
  tuningSpecs: state.tuningSpecsReducer,
  sungNote: state.sungNoteReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({ pushNoteToArray, toggleAudioCapture }, dispatch);

const offsetNegative = (cD) => { return ((180 * (((cD * -1) + 50) / 100)) / 180); };
const offsetPositive = (cD) => { return ((180 * ((cD + 50) / 100)) / 180); };

class TuningIndicator extends Component {
  render() {
    const options = {
      isInnerNumbers: false,
      aperture: 180,
      radius: gaugeRadius,
      tickOffset: 20,
      arcStrokeWidth: 40,
      miniTickLength: 1,
      miniTickStrokeWidth: 1,
      tickLabelOffset: 12,
      scaleDivisionNumber: 5,
      centralCircleRadius: 10,
      marks: ['b', null, '-40', null, '-30', null, '-20', null, '-10', null, '0', null, '10', null, '20', null, '30', null, '40', null, '#'],
      contentWidth: contWidth,
      svgContainerWidth: contWidth,
      svgContainerHeight: contHeight,
      arrowValue: this.props.sungNote.arrowValue, // THIS VALUE MUST REACT TO CURRENT SUNG PITCH
      gaugeCenterLineHeight: centerLineHeight,
      ranges: [
        {
          start: 0,
          end: offsetNegative(this.props.tuningSpecs.redYellowBand), // redYellowBand (negative)
          color: '#f3595b',
        },
        {
          start: offsetNegative(this.props.tuningSpecs.redYellowBand), // redYellowBand (negative)
          end: offsetNegative(this.props.tuningSpecs.greenYellowBand), // greenYellowBand (negative)
          color: '#ffc875',
        },
        {
          start: offsetNegative(this.props.tuningSpecs.greenYellowBand), // greenYellowBand (negative)
          end: offsetPositive(this.props.tuningSpecs.greenYellowBand), // greenYellowBand (positive)
          color: '#83d7c0',
        },
        {
          start: offsetPositive(this.props.tuningSpecs.greenYellowBand), // greenYellowBand (positive)
          end: offsetPositive(this.props.tuningSpecs.redYellowBand), // redYellowBand (positive)
          color: '#ffc875',
        },
        {
          start: offsetPositive(this.props.tuningSpecs.redYellowBand), // redYellowBand (positive)
          end: 179 / 180,
          color: '#f3595b',
        },
        {
          start: 179 / 180,
          end: 180 / 180,
          color: '#f3595b',
        },
      ],
    };
    return (
      <div>
        <div id="gauge">
          <ReactGauge {...options} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TuningIndicator);
