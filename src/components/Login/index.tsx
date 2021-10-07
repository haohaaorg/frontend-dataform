import React from 'react'
import './login.less';
import  LoginForm  from './LoginForm';
interface LoginProps {

}

export const Login: React.FC<LoginProps> = ({}) => {
            return (<>
               <div style={{backgroundColor: '#8888'}}>
                <div className="login-container">
                    <div className={`l-box active}`}>
                  
                       <LoginForm  />
                    </div>
                </div>
            </div>
            </>);
}