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

componentDidMount = () => {
  let query = {};
  let hash
  let temp = decodeURIComponent(window.location.href.substring(window.location.href.indexOf('?') + 1));
  let cutTemp = temp.substring(0, temp.length-1);
  let returnObj = JSON.parse(cutTemp);
}

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
