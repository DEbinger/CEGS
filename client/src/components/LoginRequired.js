import React from 'react';
import Router from 'react-router';


class EnsureLoggedInContainerKeepSignedIn extends React.Component{
  componentDidMount(){
    const { dispath, currentURL } = this.props;

    if(!isSignedIn){
      dispatch(setRedirectUrl(currentURL));
      browserHistory.replace("/signin");
    }
  }

  render(){
    if(isSignedIn){
      return this.props.children;
    } else {
      return null;
    }
  }
}

function mapStateToProps(state, ownProps){
  return {
    isSignedIn: state.signedIn,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(KeepSignedIn)