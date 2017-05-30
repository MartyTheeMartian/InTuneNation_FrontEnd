import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import homeBackground from "../../../public/home-page.png";
import logo from "../../../public/assets/InTune_Nation_typelogo.png";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

class Home extends Component {

  render() {
    return (
      <div className="home-component">
        <div className="home-img-container">
          <img src={homeBackground}></img>
        </div>

        <div className="home-content">
          {/* <h1 id="title" className="text-center">InTuneNation</h1> */}
          <div id="main-logo" className="github">
            <img src={logo} alt="logo" />
          </div>
          {/* <h3 className="text-center">Sing In The Moment</h3> */}
        </div>
        <div className="github">
          <a href="https://github.com/MartyTheeMartian/Intervalicity-FrontEnd/blob/master/README.md">Checkout Out Our GitHub ReadMe!!</a>
        </div>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
