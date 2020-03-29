import gql from 'graphql-tag';


export const FileFragment = gql`

fragment file on File {
  id
  path
  filename
  mimetype
  encoding
}
`;
