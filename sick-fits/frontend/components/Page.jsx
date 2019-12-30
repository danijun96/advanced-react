import React, { Component } from 'react';

class Page extends Component {
  render () {
    return (
      <>
        <p>Hey im the page component</p>
        {this.props.children}
      </>
    )
  }
}

export default Page;
