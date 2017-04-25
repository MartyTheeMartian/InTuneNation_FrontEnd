import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({}, dispatch);
};


class OctaveButtons extends Component {

  render() {
    return (
      <div className="row">
          <div className="col-md-6">
            <button className="btn btn-primary btn-lg active"> &lt; Octave Down</button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary btn-lg active">Octave Up &gt; </button>
        </div>
      </div>
    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(OctaveButtons);
