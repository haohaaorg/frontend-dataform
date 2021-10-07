import React, { useEffect } from 'react';
import { Spin } from 'antd';
import nprogress from 'nprogress';
import { LoadingOutlined } from '@ant-design/icons';
import './nprogress.css';
import './loading.less';

interface LoadingProps {
  style?: object,
  spinner?: boolean
}

 const Loading: React.FC<LoadingProps> = ({ spinner = true,  className = '', style = {} }: any) => {
      
     nprogress.configure({ showSpinner: false });
   
     if(spinner) {
       nprogress.start();
      }
     useEffect(() => {
       nprogress.done();
   
     }, [spinner]);

           const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
         
        return (<div id="my-loading" className={className} style={style}>
                       <div className="loader">
                            <Spin indicator={antIcon} />
                       </div>
              </div>);
}

export default Loading;