import gql from 'graphql-tag';


/**
 * get Department
 */

export const GET_DEPARTMENTS = gql`
query($authUserId: ID, $skip: Int, $limit: Int) {
  getDepartments(authUserId: $authUserId, skip: $skip, limit: $limit) {
    count
    departments {
      id
      departmentId
      name
      introduction
    }
  }
}
 `;

/**
 * create department
 */
export const CREATE_DEPARTMENT = gql`
mutation($input: CreateDepartmentInput!) {
   createDepartment(input: $input) {
      id
      departmentId
      name
      introduction
  }
}
`;

/**
 * create department
 */
export const UPDATE_DEPARTMENT = gql`
mutation($input: UpdateDepartmentInput!) {
   updateDepartment(input: $input) {
    id
    name
  }
}
`;



/**
 * delete department
 */

export const DELETE_DEPARTMENT = gql`
mutation($input: DeleteDepartmentInput!) {
   deleteDepartment(input: $input) {
    id
    name
  }
}
`;