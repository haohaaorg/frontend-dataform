import gql from 'graphql-tag';



export const GET_GRADE_DETAILS_GRADE_BY_ID = gql`
query($gradeId: ID) {
    getGradeDetailByGradeID(gradeId: $gradeId) {
      id
      name
      mark
      credit
      weightedMark
      course {
        id
        name
      }
    
  }
}

`;


/**
 * create gradeDetail
 */

export const CREATE_GRADE_DETAIL = gql`

mutation($input: CreateGradeDetailInput!) {
  createGradeDetail(input: $input) {
    id
    credit
    weightedMark
    mark
  }
}
 `;


/**
 * create gradeDetail
 */

export const UPDATE_GRADE_DETAIL = gql`

mutation($input: UpdateGradeDetailInput!) {
  updateGradeDetail(input: $input) {
    id
    credit
    mark
    weightedMark

  }
}
 `;

 
/**
 * create gradeDetail
 */

export const DELETE_GRADE_DETAIL = gql`

mutation($input: DeleteGradeDetailInput!) {
  deleteGradeDetail(input: $input) {
    id
  }
}
 `;