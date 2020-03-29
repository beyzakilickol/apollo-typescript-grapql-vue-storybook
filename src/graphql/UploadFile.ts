import gql from 'graphql-tag';
import {FileFragment} from '@/graphql/FileFragment';



export const UploadFile = gql`
${FileFragment}
mutation uploadFile ($file: Upload!) {
  singleUpload (file: $file) {
    ...file
  }
}
`;
