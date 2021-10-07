import gql from 'graphql-tag';





/**
 * create teacher profile
 */

 export const CREATE_TEACHER_PROFILE =  gql`
      
      mutation($input: CreateTeacherProfileInput!) {
       createTeacherProfile(input: $input) {
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
 * create teacher profile
 */

export const UPDATE_TEACHER_PROFILE =  gql`
      
mutation($input: UpdateTeacherProfileInput!) {
 updateTeacherProfile(input: $input) {
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
 * delete teacher
 */

export const DELETE_TEACHER =  gql`
      
mutation($input: DeleteTeacherInput!) {
 deleteTeacher(input: $input)
}
`;




 /**
 * get teacher profile
 */

export const GET_TEACHER_PROFILE =  gql`
      
query($teacherId: ID) {
 getTeacherProfile(teacherId: $teacherId) {

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
       
    }




 }
}
`;

/**
 * get teachers
 */
export const GET_TEACHERS = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
      getTeachers(authUserId: $authUserId, skip: $skip, limit: $limit) {
         
            id
            name
            userId
            gender
            fullName
            avatar_url
            dateOfAdmission
            email
            department {
                  id
                  name
            }
      }
}

`;


/**
 * get teacher
 */

export const GET_TEACHER = gql`
query($id: ID) {
      getTeacher(id: $id) {
            id
            name
            teacherId
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
 * sign up teacher
 */
export const CREATE_TEACHER = gql`
 mutation($input: TeacherSignUpInput!) {
      teacherSignup(input: $input) {
            id
            name
            userId
            gender
            fullName
            avatar_url
            dateOfAdmission
       
       }
 }
`;


/**
 * sign up teacher
 */
export const UPDATE_TEACHER = gql`
 mutation($input: UpdateTeacherInput!) {
      updateTeacher(input: $input) {
            id
            name
            userId
        
       }
 }
`;


/**
 * sign in teacher
 */
export const SIGN_IN = gql`
mutation($input: SignInInput!) {
      SignIn(input: $input) {
            token
      }
}
`;