import gql from 'graphql-tag';


/**
 * get academicYear
 */

export const GET_ACADEMIC_YEARS = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
  getAcademicYears(authUserId: $authUserId, skip: $skip, limit: $limit) {
    count
    academicYears {
      id
      academicYearName
    }
  }
}
 `;


/**
 * get student academicYear by id
 */

export const GET_STUDENT_ACADEMIC_YEAR = gql`
query($studentId: ID!) {
  getStudentAcademicYear(studentId: $studentId) {
    id
    academicYearName
    semester {
      id
      semesterName
      
      grade {
        id
        mark
        course {
        id
        name
        }
        credit
      }
  }
}

}
 `;





/**
 * create academicYear
 */
export const CREATE_STUDENT_ACADEMIC_YEAR = gql`
mutation($input: CreateStudentAcademicYearInput!) {
  createStudentAcademicYear(input: $input) {
    id
    academicYearName
  }
}
`;

/**
 * create academicYear
 */
export const UPDATE_STUDENT_ACADEMIC_YEAR = gql`
mutation($input: UpdateStudentAcademicYearInput!) {
   updateStudentAcademicYear(input: $input) {
    id
    academicYearName
  }
}
`;



/**
 * deleteStudent academicYear
 */

export const DELETE_STUDENT_ACADEMIC_YEAR = gql`
mutation($input: DeleteStudentAcademicYearInput!) {
   deleteStudentAcademicYear(input: $input) {
    id
    academicYearName
  }
}
`;