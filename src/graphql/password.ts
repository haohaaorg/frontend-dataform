
import gql from "graphql-tag";

export const CHANGE_PASSWORD =  gql`
      
mutation($token: String!, $newPassword: String!) {
   changePassword(token: $token, newPassword: $newPassword) {
       user {
          id
       }
       errors {
          field
          message
       }
   }
}
`;


export const FORGOT_PASSWORD =  gql`
mutation($email: String!, $lang: String) {
   forgotPassword(email: $email, lang: $lang)
}
`;