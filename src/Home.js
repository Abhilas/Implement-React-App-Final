import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return <>Hello {this.props.user} !!!</>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.User.currentUser
  };
};

export default connect(mapStateToProps)(Home);
