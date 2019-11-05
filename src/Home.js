import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return <>Hello From Home !!! {this.props.counter}</>;
  }
}

const mapStateToProps = state => {
  return {
    counter: state.Register.counter
  };
};

export default connect(mapStateToProps)(Home);
