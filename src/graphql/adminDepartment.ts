import gql from 'graphql-tag';


/**
 * get Admin Department
 */

export const GET_ADMIN_DEPARTMENTS = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
  getAdminDepartments(authUserId: $authUserId, skip: $skip, limit: $limit) {
    count
    adminDepartments {
      id
      name
      introduction
    }
  }
}
 `;

/**
 * create admin department
 */
export const CREATE_ADMIN_DEPARTMENT = gql`
mutation($input: CreateAdminDepartmentInput!) {
   createAdminDepartment(input: $input) {
      id
      name
      introduction
  }
}
`;

/**
 * create admin department
 */
export const UPDATE_ADMIN_DEPARTMENT = gql`
mutation($input: UpdateAdminDepartmentInput!) {
   updateAdminDepartment(input: $input) {
    id
    name
  }
}
`;



/**
 * delete admin department
 */

export const DELETE_ADMIN_DEPARTMENT = gql`
mutation($input: DeleteAdminDepartmentInput!) {
   deleteAdminDepartment(input: $input) {
    id
    name
  }
}
`;