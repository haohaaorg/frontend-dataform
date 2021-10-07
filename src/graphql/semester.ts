import gql from 'graphql-tag';


/**
 * get semester
 */

export const GET_SEMESTERS = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
  getSemesters(authUserId: $authUserId, skip: $skip, limit: $limit) {
    count
    semesters {
      id
      semesterName
      grade {
        id
        mark
        credit
      }
    }
  }
}
 `;


/**
 * get student semester by id
 */

export const GET_STUDENT_SEMESTER = gql`
query($studentId: ID!) {
  getStudentSemester(studentId: $studentId) {
    id
    semesterName
    student {
      id
      name
    }
    grade {
      id
      course {
        id
        name
      }
      mark
      credit
    }
  }
}
 `;





/**
 * create semester
 */
export const CREATE_STUDENT_SEMESTER = gql`
mutation($input: CreateStudentSemesterInput!) {
  createStudentSemester(input: $input) {
    id
    semesterName
  }
}
`;

/**
 * create semester
 */
export const UPDATE_STUDENT_SEMESTER = gql`
mutation($input: UpdateStudentSemesterInput!) {
   updateStudentSemester(input: $input) {
    id
    semesterName
  }
}
`;



/**
 * deleteStudent semester
 */

export const DELETE_STUDENT_SEMESTER = gql`
mutation($input: DeleteStudentSemesterInput!) {
   deleteStudentSemester(input: $input) {
    id
    semesterName
  }
}
`;