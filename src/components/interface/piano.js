import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushNoteToArray } from '../../actions';


const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators ({}, dispatch);
};


class Piano extends Component {

  handleClick(note) {
    console.log(note);

  }

  render() {
    return (
      <div className="row">
        <div className="octave">
          <div onClick={() => this.handleClick('C')} id="C" className="white-key" ></div>
          <div onClick={() => this.handleClick('C# / Db')} id="Cs" className="black-key" ></div>
          <div onClick={() => this.handleClick('D')} id="D" className="white-key" ></div>
          <div onClick={() => this.handleClick('D# / Eb')} id="Ds" className="black-key" ></div>
          <div onClick={() => this.handleClick('E')} id="E" className="white-key" ></div>
          <div onClick={() => this.handleClick('F')} id="F" className="white-key" ></div>
          <div onClick={() => this.handleClick('F# / Gb')} id="Fs" className="black-key" ></div>
          <div onClick={() => this.handleClick('G')} id="G" className="white-key" ></div>
          <div onClick={() => this.handleClick('G# / Ab')} id="Gs" className="black-key" ></div>
          <div onClick={() => this.handleClick('A')} id="A" className="white-key" ></div>
          <div onClick={() => this.handleClick('A# / Bb')} id="As" className="black-key" ></div>
          <div onClick={() => this.handleClick('B')} id="B" className="white-key" ></div>
        </div>
      </div>
    );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(Piano);
