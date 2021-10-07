import gql from 'graphql-tag';


/**
 * create transcript
 */

export const CREATE_TRANSCRIPT = gql`

mutation($input: CreateTranscriptInput!) {
  createTranscript(input: $input) {
    id
    mark
    credit
    createdAt
  }
}
 `;


/**
 * create transcript
 */

export const UPDATE_TRANSCRIPT = gql`

mutation($input: UpdateTranscriptInput!) {
  updateTranscript(input: $input) {
    id
    mark
    credit
    createdAt
  }
}
 `;

 
/**
 * create transcript
 */

export const DELETE_TRANSCRIPT = gql`

mutation($input: DeleteTranscriptInput!) {
  deleteTranscript(input: $input) {
    id
  }
}
 `;