import  gql  from 'graphql-tag';

/**
 * get topics 
 */

export const GET_CATEGORIES = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
    getCategories(authUserId: $authUserId, skip: $skip, limit: $limit) {
    categories{
      id
      name
      slug
      lang
      introduction
      creator {
        id
        name
      }
    }
    count
  }
}
`;
/**
 * create category
 */
export const CREATE_CATEGORY = gql`
 mutation($input: CreateCategoryInput!) {
  createCategory(input: $input) {
    category {
        id
        name
        slug
        lang
        creator {
          id
          name
        }
      }
    errors {
      field
      message
    }
  }
}
`;

/**
 * update category
 */
 export const UPDATE_CATEGORY = gql`
 mutation($input: UpdateCategoryInput!) {
  updateCategory(input: $input) {
    category {
        id
        name
        slug
        lang
        creator {
          id
          name
        }
      }
    errors {
      field
      message
    }
  }
}
`;
/**
 * delete category
 */
 export const DELETE_CATEGORY = gql`
 mutation($input: DeleteCategoryInput!) {
  deleteCategory(input: $input) {
    category {
        id
        name
        slug
        lang
 
      }
    errors {
      field
      message
    }
  }
}
`;