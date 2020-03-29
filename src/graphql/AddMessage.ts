import gql from 'graphql-tag';


export const AddMessage = gql`
mutation addMessage ($input: MessageInput!) {
  addMessage (input: $input) {
    ...Message
  }
}
`;
