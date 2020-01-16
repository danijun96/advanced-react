import gql from 'graphql-tag';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Head from 'next/head';

import Error from '../components/ErrorMessage';

const SingleItemStyle = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-heightL 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      description
      title
      largeImage
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.itemId
        }}
      >
        {({ data, loading, error }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loadgin...!</p>;
          if (!data.item) {
            return <p>No Item Found for this {this.props.itemId}</p>;
          }
          const item = data.item;
          return (
            <SingleItemStyle>
              <Head>
                <title>Sick Fits | {item.title}</title>
              </Head>
              <img src={item.largeImage} alt={item.title} />
              <div className="details">
                <h2>Viewing {item.title}</h2>
                <p>{item.description}</p>
              </div>
            </SingleItemStyle>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
