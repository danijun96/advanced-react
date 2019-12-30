import React, { Component } from 'react';

import Header from '../components/Header';
import Meta from '../components/Meta';

class Page extends Component {
  render() {
    // eslint-disable-next-line prettier/prettier
    return (
      <>
        <Meta />
        <Header />
        {this.props.children}
      </>
    );
  }
}

export default Page;
