import gql from "graphql-tag";

/**
 * get all data
 */
export const GET_ALL_DATA = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
      _getAllData(authUserId: $authUserId, skip: $skip, limit: $limit) {
        
        data  {
            name
            value
         }

      }    
}

`;