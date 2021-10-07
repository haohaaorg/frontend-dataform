import gql from 'graphql-tag';


/**
 * get Feedback
 */

export const GET_FEEDBACKS = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
  getFeedbacks(authUserId: $authUserId, skip: $skip, limit: $limit) {
    count
    feedbacks {
      id
      title
      content 
      rating
      creator
    
    }
  }
}
 `;

/**
 * create feedback
 */
export const CREATE_FEEDBACK = gql`
mutation($input: CreateFeedbackInput!) {
   createFeedback(input: $input) {
      id
      title
      content
      rating
 
      
  }
}
`;

/**
 * create feedback
 */
export const UPDATE_FEEDBACK = gql`
mutation($input: UpdateFeedbackInput!) {
   updateFeedback(input: $input) {
      id
      title
      content
      rating

 
  }
}
`;



/**
 * delete feedback
 */

export const DELETE_FEEDBACK = gql`
mutation($input: DeleteFeedbackInput!) {
   deleteFeedback(input: $input) {
    id
  }
}
`;