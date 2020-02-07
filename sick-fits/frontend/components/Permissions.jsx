import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Error from './ErrorMessage';

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`;
const Permissions = (props) => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => (
      <>
        <Error error={error} />
        <p>Hey</p>
      </>
    )}
  </Query>
);

export default Permissions;
