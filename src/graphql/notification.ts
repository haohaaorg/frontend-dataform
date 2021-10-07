import gql from 'graphql-tag';

/**
 * Records to select from notifications
 */
const notificationPayload = `
 id
 createdAt
 feedback {
      id
      title
      content 
      rating
      creator
 }

`;
/**
 * creates a notification for user
 */
export const CREATE_NOTIFICATION = gql`
      mutation($input: CreateNotificationInput) {
            createNotification(input: $input) {
            id
            }
      }
`;

/**
 * delete a notification
 */
export const DELETE_NOTIFICATION = gql`
  mutation($input: DeleteNotificationInput!) {
        deleteNotification(input: $input) {
            id
        }
  }
`;

/**
 * gets notifications for user
 */
export const GET_USER_NOTIFICATION = gql`
  query($userId: ID!, $skip: Int, $limit: Int) {
        getUserNotifications(userId: $userId, skip: $skip, limit: $limit) {
              count
              notifications {
                    ${notificationPayload}
              }
        }
  }
`;
/**
 * Updates notification seen property
 */
export const UPDATE_NOTIFICATION_SEEN = gql`
   mutation($input: UpdateNotificationSeenInput!) {
         updateNotificationSeen(input: $input)
   }
`;
/**
 * Get user's notifications in real time
 */
export const NOTIFICATION_CREATED_OR_DELETED = gql`
   subscription {
         notificationCreatedOrDeleted {
               operation
               notification {
                     ${notificationPayload}
               }
         }
   }
`;