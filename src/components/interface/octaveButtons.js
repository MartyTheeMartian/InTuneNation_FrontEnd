import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { shiftOctaves } from '../../actions'


const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({shiftOctaves}, dispatch);
};


class OctaveButtons extends Component {

  handleClick (direction) {

    this.props.shiftOctaves(direction);
    

  }

  render() {
    return (
      <div className="row">
          <div className="col-md-6">
            <button onClick={() => this.handleClick('-')} className="btn btn-primary btn-lg active"> &lt; Octave Down</button>
          </div>
          <div className="col-md-6">
            <button onClick={() => this.handleClick('+')} className="btn btn-primary btn-lg active">Octave Up &gt; </button>
        </div>
      </div>
    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(OctaveButtons);
