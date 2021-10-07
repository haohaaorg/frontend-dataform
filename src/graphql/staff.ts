import gql from 'graphql-tag';





/**
 * create staff profile
 */

 export const CREATE_STAFF_PROFILE =  gql`
      
      mutation($input: CreateStaffProfileInput!) {
       createStaffProfile(input: $input) {
        id,
        dateOfBirth,
        placeOfBirth,
        nationality,
        languages,
        passportNoOrNRCNo,
       }
 }
 `;

 /**
  * add staff education
  */

export const ADD_STAFF_EDUCATION = gql`
  mutation($input: addStaffEducationInput!) {
      addStaffEducation(input: $input) {
            id,
            dateOfBirth,
            placeOfBirth,
            nationality,
            languages,
      }
  }

`;

 /**
  * add staff experience
  */

 export const ADD_STAFF_EXPERIENCE = gql`
 mutation($input: addStaffExperienceInput!) {
     addStaffExperience(input: $input) {
           id,
           dateOfBirth,
           placeOfBirth,
           nationality,
           languages,
     }
 }

`;


/**
 * delete staff education
 * @param eduId ID
 * @param staffId ID
 */
export const DELETE_STAFF_EDUCATION = gql`
  mutation($input: DeleteStaffEducationInput!) {
      deleteStaffEducation(input: $input) {
            id,
            dateOfBirth,
            placeOfBirth,
            nationality,
            languages,
      }
  }

`;

/**
 * delete staff experience
 * @param expId ID
 * @param staffId ID
 */
export const DELETE_STAFF_EXPERIENCE = gql`
  mutation($input: DeleteStaffExperienceInput!) {
      deleteStaffExperience(input: $input) {
            id,
            dateOfBirth,
            placeOfBirth,
            nationality,
            languages,
      }
  }

`;





 /**
 * create staff profile
 */

export const UPDATE_STAFF_PROFILE =  gql`
      
mutation($input: UpdateStaffProfileInput!) {
 updateStaffProfile(input: $input) {
  id,
  dateOfBirth,
  placeOfBirth,
  nationality,
  languages,
  passportNoOrNRCNo,
 }
}
`;


 /**
 * delete staff
 */

export const DELETE_STAFF =  gql`
      
mutation($input: DeleteStaffInput!) {
 deleteStaff(input: $input)
}
`;




 /**
 * get staff profile
 */

export const GET_STAFF_PROFILE =  gql`
      
query($staffId: ID) {
 getStaffProfile(staffId: $staffId) {
    
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
            passportNoOrNRCNo,
            parentName,
            phoneNo,
            currentPosition,
            hobby,
            education {
                  id
                  school
                  fieldofstudy
                  degree
                  from
                  to
                  current
                  school
            }
            experience {
                  id
                  title
                  company
                  location
                  description
                  from
                  to 
                  current

            }
    }

 }
}
`;

/**
 * get staffs
 */
export const GET_STAFFS = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
      getStaffs(authUserId: $authUserId, skip: $skip, limit: $limit) {
         
            id
            name
            staffId
            gender
            fullName
            avatar_url
            dateOfAdmission
            email
            adminDepartment {
                  id
                  name
            }
      }
}

`;

/**
 * get staffs
 */
export const GET_STAFF = gql`
query($id: ID) {
      getStaff(id: $id) {
         
            id
            name
            staffId
            gender
            fullName
            avatar_url
            dateOfAdmission
            adminDepartment {
                  id
                  name
            }
      }
}

`;


/**
 * sign up staff
 */
export const CREATE_STAFF = gql`
 mutation($input: StaffSignUpInput) {
      staffSignup(input: $input) {
            id
            name
            staffId
            gender
            fullName
            avatar_url
            dateOfAdmission
            adminDepartment {
                  id
                  name
            }
       }
 }
`;


/**
 * sign up staff
 */
export const UPDATE_STAFF = gql`
 mutation($input: UpdateStaffInput!) {
      updateStaff(input: $input) {
            id
            name
            staffId
            gender
            fullName
            avatar_url
            dateOfAdmission
            adminDepartment {
                  id
                  name
            }
       }
 }
`;


/**
 * sign in staff
 */
export const SIGN_IN = gql`
mutation($input: SignInInput!) {
      SignIn(input: $input) {
            token
      }
}
`;