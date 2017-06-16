import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeTuningSpecs, changeGreenTimeRequirement } from '../../actions';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { Col, Grid, Row } from 'react-bootstrap';


class VolumeSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.title = this.props.title;
    if (this.title === 'Accuracy Difficulty') {
      this.state = {
        centDifferential: this.props.tuningSpecs.greenYellowBand,
      }
      this.max = this.props.tuningSpecs.redYellowBand - 1;
      this.min = 0;
      this.reverse = true;
    } else {
      this.state = {
        greenTime: this.props.greenTimeRequirement,
      };
      this.max = 10;
      this.min = 1;
      this.reverse = false;
    }
  }

  handleOnChange = (value) => {
    if (this.title === 'Accuracy Difficulty') { this.handleOnChangeGY(value); }
    else if (this.title === 'Time Difficulty') { this.handleOnChangeGreenTime(value); }
    // this.props.changeTuningSpecs(this.props.tuningSpecs.redYellowBand, value);
    this.setState({
      centDifferential: value,
    });
  }

  handleOnChangeGY = (value) => {
    const newState = {
      redYellowBand: this.props.tuningSpecs.redYellowBand,
      greenYellowBand: value,
    };
    this.props.changeTuningSpecs(newState.redYellowBand, newState.greenYellowBand);
  }

  handleOnChangeGreenTime = (value) => { this.props.changeGreenTimeRequirement(value); }

  render() {
    const { centDifferential } = this.state;
    return (
      <div>
        <h3>{this.title}</h3>
        <Slider
          value={centDifferential}
          max={this.max}
          min={this.min}
          reverse={this.reverse}
          tooltip={true}
          orientation="horizontal"
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tuningSpecs: state.tuningSpecsReducer,
    greenTime: state.greenTimeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeTuningSpecs, changeGreenTimeRequirement }, dispatch);
};

class TuningSpecButtons extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col lg={1}>Hard</Col>
          <Col lg={3}>
            <VolumeSlider
              title={'Accuracy Difficulty'}
              id="accuracySlider"
              tuningSpecs={this.props.tuningSpecs}
              changeTuningSpecs={(rYB, gYB) => { this.props.changeTuningSpecs(rYB, gYB); } }
            />
            <VolumeSlider
              id="timeSlider"
              title={'Time Difficulty'}
              tuningSpecs={this.props.tuningSpecs}
              greenTimeRequirement={this.props.greenTime.required}
              changeTuningSpecs={(rYB, gYB) => { this.props.changeTuningSpecs(rYB, gYB); } }
              changeGreenTimeRequirement={(amount) => { this.props.changeGreenTimeRequirement(amount); }}
            />
          </Col>
          <Col lg={1}>Easy</Col>
        </Row>
      </Grid>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TuningSpecButtons);
