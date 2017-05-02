import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { shiftOctaves } from '../../actions';


const mapStateToProps = (state) => {
  return {
    octave: state.octaveReducer.current,
    up: state.octaveReducer.up,
    down: state.octaveReducer.down,
  };
};

const mapDispatchToProps = (dispatch) => { return bindActionCreators ({ shiftOctaves }, dispatch); };


class OctaveButtons extends Component {

  handleClick(direction) {
    this.props.shiftOctaves(direction); // console.log(this.props.octave);
  }

  render() {
    return (
      <div className="row">
          <div className="col-md-6">
            <button onClick={() => this.handleClick('-')} className="btn btn-primary btn-lg active" disabled={this.props.down} > &lt; Octave Down</button>
          </div>
          <div className="col-md-6">
            <button onClick={() => this.handleClick('+')} className="btn btn-primary btn-lg active" disabled={this.props.up} >Octave Up &gt; </button>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(OctaveButtons);
