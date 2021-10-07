import gql from 'graphql-tag';


/**
 * get downloads
 */

export const GET_DOWNLOADS = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
  getDownloads(authUserId: $authUserId, skip: $skip, limit: $limit) {
    count
    downloads {
      id
      name
      links
      admin
      academic
      content
    }
  }
}
 `;

 
/**
 * get downloads by type
 */

export const GET_DOWNLOADS_BY_TYPE = gql`
query($type: String) {
  getDownloadsByType(type: $type) {
    count
    downloads {
      id
      name
      links
      content
      admin
      academic
      student
    }
  }
}
 `;


/**
 * create download
 */
export const CREATE_DOWNLOAD = gql`
mutation($input: CreateDownloadInput!) {
   createDownload(input: $input) {
      id
      name
      links
      content
  }
}
`;

/**
 * create download
 */
export const UPDATE_DOWNLOAD = gql`
mutation($input: UpdateDownloadInput!) {
   updateDownload(input: $input) {
      id
      name
      links
      content
  }
}
`;



/**
 * delete download
 */

export const DELETE_DOWNLOAD = gql`
mutation($input: DeleteDownloadInput!) {
   deleteDownload(input: $input) {
    id
    name
  }
}
`;