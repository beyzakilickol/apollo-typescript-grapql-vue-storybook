import gql from 'graphql-tag';


export const MessageFragment = gql`
fragment Message on Message {
  id
  text
}
`;
