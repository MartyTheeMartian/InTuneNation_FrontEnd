import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import homeBackground from "../../../public/home-page.png";
import logo from "../../../public/assets/InTune_Nation_typelogo.png";
const queryString = require('query-string');

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

class Home extends Component {

  render() {
    return (
      <div className="row home-component">

        <div className="home-content">
          <div id="main-logo" className="github">
            <img src={logo} alt="logo" />
          </div>
        </div>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
