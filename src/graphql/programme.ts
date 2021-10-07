import gql from 'graphql-tag';


/**
 * get programmes
 */

export const GET_PROGRAMMES = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
  getProgrammes(authUserId: $authUserId, skip: $skip, limit: $limit) {
    count
    programmes {
      id
      programmeId
      introduction
      programmeType
      name
    }
  }
}
 `;


/**
 * create programme
 */
export const CREATE_PROGRAMME = gql`
mutation($input: CreateProgrammeInput!) {
   createProgramme(input: $input) {
      id
      programmeId
      name
      introduction
      programmeType
  }
}
`;

/**
 * create programme
 */
export const UPDATE_PROGRAMME = gql`
mutation($input: UpdateProgrammeInput!) {
   updateProgramme(input: $input) {
    id
    name
    programmeType
  }
}
`;



/**
 * delete programme
 */

export const DELETE_PROGRAMME = gql`
mutation($input: DeleteProgrammeInput!) {
   deleteProgramme(input: $input) {
    id
    name
  }
}
`;