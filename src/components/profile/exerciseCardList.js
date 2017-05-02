import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// import Vex from 'vexflow';
// import ExerciseCard from './exerciseCard';
import { connect } from 'react-redux';
// const VF = Vex.Flow;

const mapStateToProps = (state) => {
  return {
    userId: state.loginReducer,
  };
};


// // Create an SVG renderer and attach it to the DIV element named "boo".
// var div = document.getElementById("boo")
// var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// // Configure the rendering context.
// renderer.resize(500, 500);
// var context = renderer.getContext();
// context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
//
// // Create a stave of width 400 at position 10, 40 on the canvas.
// var stave = new VF.Stave(10, 40, 400);
//
// // Add a clef and time signature.
// stave.addClef("treble").addTimeSignature("4/4");
//
// // Connect it to the rendering context and draw!
// stave.setContext(context).draw();

const mapDispatchToProps = (dispatch) => { return bindActionCreators({}, dispatch); };

class ExerciseCardList extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCardList)
