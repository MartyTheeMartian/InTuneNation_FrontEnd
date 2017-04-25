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


class NoteIndicator extends Component {



  render() {

    let style = {backgroundColor: 'red'};

    return (
      <div className="container">
        <div sytle={style}>{this.props.note}</div>
      </div>
    );
  }


}

export default connect (mapStateToProps, mapDispatchToProps)(NoteIndicator);
