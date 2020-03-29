import gql from 'graphql-tag';

import { FileFragment } from './FileFragment';

export const Files = gql`
${FileFragment}
query files {
  files: uploads {
    ...file
  }
}
`;
