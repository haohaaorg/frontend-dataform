import gql from 'graphql-tag';

export const  UploadImageMutation = gql`
mutation($file: Upload!, $filename: String!) {
  UploadImageReq( file: $file, filename: $filename) {
    result_code,
    image_url
  }
}
`;


export const  UploadFilesMutation = gql`
mutation($file: Upload!, $filename: String!, $filetype: String) {
  UploadFiles( file: $file, filename: $filename,  filetype: $filetype) {
    result_code,
    image_url
  }
}
`;