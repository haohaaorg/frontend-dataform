import gql from "graphql-tag";

/**
 * get labc
 */

export const GET_Kwarm_BY_TYPE = gql`
  query ($type: String) {
    getLabcByType(type: $type) {
      id
      name
      type
      averageRating
    }
  }
`;

/**
 * create user by type
 */
export const CREATE_Kwarm = gql`
  mutation ($input: CreateLabcInput) {
    createLabc(input: $input) {
      errors {
        field
        message
      }
      labc {
        id
        name
        averageRating
      }
    }
  }
`;
