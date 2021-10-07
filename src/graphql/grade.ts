import gql from 'graphql-tag';



export const GET_STUDENT_GRADE_BY_ID = gql`
query($studentId: ID) {
    getGradeByStudentID(studentId: $studentId) {
     id
     mark
     course {
       id
       name
     }
     credit
     weightedMark
     semester {
      id
      semesterName
     }
     academicYear {
      id
      academicYearName
     }
     gradeDetail {
      id
      name
      credit
      mark
      weightedMark
    }
    
  }
}

`;
/**
 * create grade
 */

export const CREATE_GRADE = gql`

mutation($input: CreateGradeInput!) {
  createGrade(input: $input) {
    id
    mark
    credit
  }
}
 `;


/**
 * create grade
 */

export const UPDATE_GRADE = gql`

mutation($input: UpdateGradeInput!) {
  updateGrade(input: $input) {
    id
    mark
    
    credit
    createdAt
  }
}
 `;

 
/**
 * create grade
 */

export const DELETE_GRADE = gql`

mutation($input: DeleteGradeInput!) {
  deleteGrade(input: $input) {
    id
  }
}
 `;