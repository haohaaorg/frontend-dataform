import  gql  from 'graphql-tag';

/**
 * get topics 
 */

export const GET_TOPICS = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
    getTopics(authUserId: $authUserId, skip: $skip, limit: $limit) {
    topics{
      id
      name
      introduction
      createdAt
      avatar_url
      slug
    }
    count
  }
}
`;


/**
 * gets all available posts
 */

export const GET_POSTS = gql`
  query($authUserId: ID, $skip: Int, $limit: Int) {
        getPosts(authUserId: $authUserId, skip: $skip, limit: $limit) {
                    id 
                    title
                    bg_img
                    content
                    slug
                    lang
                    createdAt
                    author {
                      id
                      name
                    }
                    tags
                    category{
                     id
                     name
                     }
    
        }
  }
`;


/**
 * get single post
 */
export const GET_POST = gql`
query($slug: String) {
  getPost(slug: $slug){
    id
    slug
    title
    content
    bg_img
    category{
      id
      name
    }
    tags
  }
}`;

/**
 * create post
 */
export const CREATE_POST = gql`
   mutation($input: CreatePostInput!) {
     createPost(input: $input) {
      post {
          id
          title
          content
          bg_img
     }
     errors {
      field
      message
       }
     }
   }
`;

/**
 * update post
 */
export const UPDATE_POST = gql`
   mutation($input: UpdatePostInput!) {
     updatePost(input: $input) {
      post {
      id
      title
      slug
      }
      errors {
      field
      message
     }
     }
   }
`;

/**
 * Deletes a post
 */
export const DELETE_POST = gql`
  mutation($input: DeletePostInput!) {
    deletePost(input: $input) {
      post {
      id
      title
      slug
     }
      errors {
      field
      message
    }
    }
  }
`;


/**
 * get Post 
 */
