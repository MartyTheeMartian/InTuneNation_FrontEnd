import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OctaveButtons from './octaveButtons';
import NoteIndicator from './noteIndicator';
import Piano from './piano';


const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({}, dispatch);
};


class Interface extends Component {

  render() {
    return (
      <div className="container">
        <OctaveButtons />
        <Piano />
        <NoteIndicator />
      </div>
    );
  }


}

export default connect (mapStateToProps, mapDispatchToProps)(Interface);
