import gql from 'graphql-tag';


export const HelloWorld = gql`
query HelloWorld ($name: String) {
  hello (name: $name)
}
`;
