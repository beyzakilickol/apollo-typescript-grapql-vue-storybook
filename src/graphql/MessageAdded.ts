import gql from 'graphql-tag';
import {MessageFragment} from '@/graphql/MessageFragment';

export const MessageAdded = gql`
${MessageFragment}
subscription messageAdded {
  messageAdded {
    ...Message
  }
}
`;
