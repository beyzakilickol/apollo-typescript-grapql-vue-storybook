import gql from 'graphql-tag';
import {MessageFragment} from '@/graphql/MessageFragment';


export const Messages = gql`
${MessageFragment}
query messages {
  messages {
    ...Message
  }
}
`;
