import React from 'react';
import moment from 'moment';
import { message } from 'antd';
import Loading from './Loading';

/**
 * create custom upload image adapter
 */
var UploadImgMutation: any;

/**
 * formatFile name for post image
 * @param {*} e
 */
const formatFilenamePost = (filename: string) => {
  // console.log('here is post', filename);
  const date = moment().format("YYYYMMDD");
  const randomString = Math.random().toString(36).substring(2, 7);
  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const newFilename = `images/${cleanFileName}-${randomString}-${date}`;
  return newFilename.substring(0, 60);
};

var loading: any;
interface AdapterProps {
  uploadImageMutation?: any
}
class MyUploadAdapter extends React.Component<AdapterProps> {

  loader: any;
  xhr: any;

  constructor(props: any) {
      // CKEditor 5's FileLoader instance.
    super(props);
    this.loader = props;
  
    if(props.uploadImageMutation) {
      UploadImgMutation = props.uploadImageMutation;
    }
  
  }
  
  componentDidMount() {
    loading = false;
  }
  // Starts the upload process.
  upload() {

      return new Promise((resolve, reject) => {

          this._sendRequest(resolve, reject);
      } );
  }

  // Aborts the upload process.
  abort() {
      if ( this.xhr ) {
          this.xhr.abort();
      }
  }




  // Prepares the data and sends the request.
  _sendRequest(resolve: any, reject: any) {

      loading = true;
    

      const data1 = new FormData();
   
      this.loader.file.then((result: any) => {
        data1.append('file', result);

      
          
          let imageUrl;
          let Error;
          (async() => {
          const { data, error } =  await UploadImgMutation({
              variables: {
                file: result,
                filename: formatFilenamePost(result.name)
              },
            });
            // console.log('here is data after upload:', data)

            imageUrl = data.UploadImageReq.image_url
            Error = error;
            // console.log('here is imageUrl', imageUrl)
        
            if(imageUrl&&!error) {
              loading = false;
              message.success("Upload Image Successfully!");

              resolve({
                default: imageUrl,
            });

            
            } else if(!imageUrl && Error) {
              message.error("Upload Image Error!");
              reject(Error);

            }

           })();
   
        

     


        
        }
      )
  }



  render() {
   
    // if(loading) {
    //   message.loading("Loading .... ");
    //  }
     
    return(
      < >
            {loading&&
            <div
            style={{
              position: 'fixed',
              left: '0px',
              top: '0px',
              width: '100%',
              height: '100%',
        
              background: 'rgba(0, 0, 0, 0.5)'
            }}

            >
             <div
             style={{
              position: 'fixed',
              margin: '0px -50% 0px 0px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
       
            }}
             >
           
                 <Loading />
               </div>

               </div>
            }
      </>
    )
  }

}

export default MyUploadAdapter;