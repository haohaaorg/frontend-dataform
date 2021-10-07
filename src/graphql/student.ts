import gql from 'graphql-tag';





/**
 * create student profile
 */

 export const CREATE_STUDENT_PROFILE =  gql`
      
      mutation($input: CreateStudentProfileInput!) {
       createStudentProfile(input: $input) {
        id,
        dateOfBirth,
        placeOfBirth,
        nationality,
        languages,
        ielts,
        passportNoOrNRCNo,
       }
 }
 `;

 /**
 * create student profile
 */

export const UPDATE_STUDENT_PROFILE =  gql`
      
mutation($input: UpdateStudentProfileInput!) {
 updateStudentProfile(input: $input) {
  id,
  dateOfBirth,
  placeOfBirth,
  nationality,
  languages,
  ielts,
  passportNoOrNRCNo,
 }
}
`;


 /**
 * delete student
 */

export const DELETE_STUDENT =  gql`
      
mutation($input: DeleteStudentInput!) {
 deleteStudent(input: $input)
}
`;

 /**
  * add student education
  */

 export const ADD_STUDENT_EDUCATION = gql`
 mutation($input: addStudentEducationInput!) {
     addStudentEducation(input: $input) {
           id,
           dateOfBirth,
           placeOfBirth,
           nationality,
           languages,
     }
 }

`;

/**
 * delete student education
 * @param eduId ID
 * @param Id ID
 */
export const DELETE_STUDENT_EDUCATION = gql`
  mutation($input: DeleteStudentEducationInput!) {
      deleteStudentEducation(input: $input) {
            id
      }
  }

`;


 /**
  * add student address
  */

 export const ADD_STUDENT_ADDRESS = gql`
 mutation($input: addStudentAddressInput!) {
     addStudentAddress(input: $input) {
           id
     }
 }

`;
/**
 * delete student address
 * @param addressId ID
 * @param Id ID
 */

export const DELETE_STUDENT_ADDRESS = gql`
  mutation($input: DeleteStudentAddressInput!) {
      deleteStudentAddress(input: $input) {
            id
      }
  }

`;






 /**
 * get student profile
 */

export const GET_STUDENT_PROFILE =  gql`
      
query($studentId: ID) {
 getStudentProfile(studentId: $studentId) {

      errors {
          field
          message
    }
    profile {
            id,
            dateOfBirth,
            placeOfBirth,
            nationality,
            languages,
            ielts,
            passportNoOrNRCNo

            education {
                  id,
                  degree,
                  school,
                  degreeSubject,
                  dateDegree,
                  awardedOrResult
            }

            address {
                  id,
                  name,
                  postCode,
                  telePhoneNo,
                  mobileNo,
                  email
            }
    }




 }
}
`;

/**
 * get students
 */
export const GET_STUDENTS = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
      getStudents(authUserId: $authUserId, skip: $skip, limit: $limit) {
         
            id
            name
            studentId
            gender
            fullName
            avatar_url
            dateOfAdmission
            studentAcademicYear
            email
            programme {
                  id
                  name
                  programmeType
            }
      }
}

`;


/**
 * get student
 */

export const GET_STUDENT = gql`
query($id: ID) {
      getStudent(id: $id) {
            id
            name
            studentId
            gender
            fullName
            avatar_url
            dateOfAdmission
            email
            programme {
                  id
                  name
            }
      }
}

`;


/**
 * sign up student
 */
export const CREATE_STUDENT = gql`
 mutation($input: StudentSignUpInput!) {
      studentSignup(input: $input) {
            id
            name
            studentId
            gender
            fullName
            avatar_url
            dateOfAdmission
            studentAcademicYear
            programme {
                  id
                  name
            }
       }
 }
`;


/**
 * sign up student
 */
export const UPDATE_STUDENT = gql`
 mutation($input: UpdateStudentInput!) {
      updateStudent(input: $input) {
            id
            name
            studentId
            gender
            fullName
            avatar_url
            dateOfAdmission
            studentAcademicYear
            programme {
                  id
                  name
            }
       }
 }
`;


/**
 * sign in student
 */
export const SIGN_IN = gql`
mutation($input: SignInInput!) {
      SignIn(input: $input) {
            token
      }
}
`;