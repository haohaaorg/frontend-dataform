import gql from 'graphql-tag';


/**
 * get course
 */

export const GET_COURSES = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
  getCourses(authUserId: $authUserId, skip: $skip, limit: $limit) {
    count
    courses {
      id
      name
      courseId
      introduction
      averageRating
      department {
        id
        name
      }
      students {
            id
            name
            studentId
            avatar_url
      }
      teachers {
        id
        name
        avatar_url
      }
    }
  }
}
 `;

/**
 * create course
 */
export const CREATE_COURSE = gql`
mutation($input: CreateCourseInput!) {
   createCourse(input: $input) {
      id
      name
      courseId
      introduction
      department {
        id
        name
      }
  }
}
`;

/**
 * create course
 */
export const UPDATE_COURSE = gql`
mutation($input: UpdateCourseInput!) {
   updateCourse(input: $input) {
    id
    name
  }
}
`;

/**
 * enroll student to  course
 */
export const ENROLL_STUDENT = gql`
mutation($input: EnrollStudentInput!) {
   enrollStudent(input: $input) {
    id
    name
    students {
            id
            name
            studentId
            avatar_url
      }
  }
}
`;

/**
 * enroll teacher to  course
 */
export const UPDATE_ENROLL_TEACHER = gql`
mutation($input: UpdateEnrollTeacherInput!) {
   updateEnrollTeacher(input: $input) {
    id
    name
    teachers {
            id
            name
            avatar_url
      }
  }
}
`;


/**
 * enroll student to  course
 */
export const UPDATE_ENROLL_STUDENT = gql`
mutation($input: UpdateEnrollStudentInput!) {
   updateEnrollStudent(input: $input) {
    id
    name
    students {
            id
            name
            studentId
            avatar_url
      }
  }
}
`;


/**
 * delete course
 */

export const DELETE_COURSE = gql`
mutation($input: DeleteCourseInput!) {
   deleteCourse(input: $input) {
    id
    name
  }
}
`;