import gql from 'graphql-tag';

/**
 * get a user
 */
export const GET_AD_USERS = gql`
 query($userId: ID, $skip: Int, $limit: Int) {
       get_AUsers(userId: $userId, skip: $skip, limit: $limit) {
             id

       }
 }
`;
/**
 * get user
 */
export const GET_USERS = gql`
 query($userId: ID, $skip: Int, $limit: Int) {
       getUsers(userId: $userId, skip: $skip, limit: $limit) {
             id
             fullName
             role
             privileges {
                    create,
                    read,
                    update,
                    delete
             }
             name 
             email 
             avatar_url
             createdAt
             gender

       }
 }
`;

export const UPDATE_USER = gql`
  mutation($input: updateUserInput!) {
       updateUser(input: $input) {

            errors {
                  field
                  message
            }
            user {
                   id
                   email
                  }
       }
 }
`;

/**     
 * get me user
 */
export const GET_ME = gql`
 query  {
  getMe{

    errors {
      field
      message
    }

    user {

      id
      fullName
      email
      role
      avatar_url
      userType {  
        admin
        academic
      }
      privileges {
      read
      create
      update
      delete
    }
    newNotifications {
        id
        clientUser
        feedback {
          id
          title
          content
          rating
          email 
          lang
        }
    
      }

  }

  }
}
`;

/**
 * sign up user
 */
export const SIGN_UP = gql`
 mutation($input: SignUpInput!) {
       signup(input: $input) {

            errors {
                  field
                  message
            }
            user {
                        id
                        email
                  }
       }
 }
`;
/**
 * sign in user
 */
export const SIGN_IN = gql`
mutation($input: SignInInput) {
      signin(input: $input) {
            errors {
                  field
                  message
            }
            user { 
                  id
                  email
            }
         
      }
}
`;
/**
 * sign in user
 */
 export const DELETE_USER = gql`
 mutation($input: DeleteUserInput!) {
      deleteUser(input: $input) {
            errors {
                  field
                  message
            }
            status
      }
 }
 `;

export const SIGN_OUT = gql`
mutation {
      signout
}
`;