import React, { useState, useEffect, useRef } from 'react';
import { useMutation } from "@apollo/client";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter, Link, Redirect, RouteComponentProps } from 'react-router-dom';
import { Form, Input, Row, Col, message } from 'antd';
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import { GET_ME, SIGN_IN } from '../../graphql/user';
import { randomNum } from '../../utils/randomNum'
import { loginAction } from "../../actions/auth";
import Checkbox from 'antd/lib/checkbox/Checkbox';

import Logo from '../../../src/labc-logo.png';
import LanguageChanger from '../LanguageChanger';


interface LoginFormProps {
      isAuthenticated?: boolean,
      loginAction: any,
      authUser: any,
      authLoading: any
   
}

export interface LoginComponentProps extends RouteComponentProps<any> {
      history: any
}
type Props = LoginFormProps & LoginComponentProps;
type InputEvent = React.ChangeEvent<HTMLInputElement>;



 const LoginForm: React.FC<Props> = ({ isAuthenticated, authLoading, loginAction }) => {
      const canvasRef = useRef(null);

      const [loading, setLoading] = useState(true);
      const [code,setCode] = useState("");
      const [LoginUser] = useMutation(SIGN_IN);
      useEffect(() => {
        createCode();
        setLoading(false);
    }, []);
  
      const { t } = useTranslation();

            const [form] = Form.useForm();
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [enterCode, setEnterCode] = useState('');
            const [focusItem, setFocusItem] = useState(-1);

          
  



            
        

     /**
     * 生成验证码
     */


    const createCode = () => {
    const canvas = canvasRef?.current;
    const ctx = canvas?.getContext('2d')   
    const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let code = ''
    ctx?.clearRect(0, 0, 80, 40)
    for (let i = 0; i < 4; i++) {
        const char = chars[randomNum(0, 57)]
        code += char
        ctx.font = randomNum(20, 25) + 'px SimHei'  //设置字体随机大小
        ctx.fillStyle = '#666'
        ctx.textBaseline = 'middle'
        ctx.shadowOffsetX = randomNum(-3, 3)
        ctx.shadowOffsetY = randomNum(-3, 3)
        ctx.shadowBlur = randomNum(-3, 3)
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
        let x = 80 / 5 * (i + 1)
        let y = 40 / 2
        let deg = randomNum(-25, 25)
        /**设置旋转角度和坐标原点**/
        ctx.translate(x, y)
        ctx.rotate(deg * Math.PI / 180)
        ctx.fillText(char, 0, 0)
        /**恢复旋转角度和坐标原点**/
        ctx.rotate(-deg * Math.PI / 180)
        ctx.translate(-x, -y)
    }
     setCode(code);
}

            const handleChangePassword = (e: InputEvent) => {
                  e.preventDefault();
                  setPassword(e.target.value)
            }

            const handleChangeEmail = (e: InputEvent) => {
                  e.preventDefault();
                  setEmail(e.target.value)
            }




            const  onSubmitData =  async (e: InputEvent) => {
                  e.preventDefault();
                
     
                if(code.toUpperCase() !== enterCode.toUpperCase()) {
                    message.warning('Please Enter Captcha Code Correctly!')
                    return;
                }


    
    
                const { data } = await LoginUser({
                    variables: {
                        input: {
                            emailOrID: email,
                            password: password
                        }
                    },
                    update: (cache, { data }) => {
               
                        cache.writeQuery({
                            query: GET_ME,
                            data: {
                              __typename: "Query",
                              getMe: data?.signin,
                            },
                          });
                    }
                });

              
             
                if(data?.signin?.errors) {
                    return message.error(`${data?.signin?.errors.map((error: any) => t(`login.${error.message}`))}`)
                }

                if(data&&data?.signin) {
                    loginAction(data?.signin);
                }

             
                
                

                
            
          
                
              
         
        }

     
     
        const handleCaptchaChange = (e: InputEvent): void => {
           e.preventDefault();
           setEnterCode(e.target.value)
        }

      






           
//   emailOrUsername
    if(isAuthenticated) {
        return <Redirect to={`/`} />
    } else {
        return (
                          
        
            <div>

              
            <div className="logo">
                <img src={Logo} />
            </div>
                {/* <h3 className="title">Admin Login</h3> */}
    
    {/* {error&& message.error(`${error.message}`)} */}
    <Form 
    form={form}
    hideRequiredMark
    className="login-form"
    name="normal_login"
    initialValues={{ remember: true }}

  
    >
        <Form.Item
          
            // style={{ marginBottom: 10 }}
            // wrapperCol={{ span: 20, pull:  0 }}
            // labelCol={{ span: 3, pull:  0 }}
            // label={<span className='iconfont icon-User'
            //  style={{ opacity: focusItem === 0 ? 1 : 0.6 }} 
            //  />}
            // colon={false}
            name="email" rules={[{ 
                required: true, 
                message: t("login.req_msg_emailOrID")
             }]}
            >
           
                <Input
                   prefix={<UserOutlined className="site-form-item-icon" />}
                   onChange={e => handleChangeEmail(e)}
                    // className="myInput"
                    // onFocus={() => this.setState({ focusItem: 0 })}
                    // onBlur={() => this.setState({ focusItem: -1 })}
                    // onPressEnter={this.onSubmit}
                    placeholder={ t("login.emailOrID")}
                />
        

        </Form.Item>
        <Form.Item
        
            // style={{ marginBottom: 10 }}
            // wrapperCol={{ span: 20, pull:  0 }}
            // labelCol={{ span: 3, pull:  0 }}
            // label={<span className='iconfont icon-suo1' style={{ opacity: focusItem === 1 ? 1 : 0.6 }} />}
            // colon={false}
            
            name="password" rules={[{ 
                 required: true,
                 message: t("login.req_msg_password")
                }]}
            
            >
          
                <Input
                    // className="myInput"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    onChange={e => handleChangePassword(e)}
                    type="password"
                    // onFocus={() => this.setState({ focusItem: 1 })}
                    // onBlur={() => this.setState({ focusItem: -1 })}
                    // onPressEnter={this.onSubmit}
                    placeholder={ t("login.password")}
                />
           
        </Form.Item>

     
        
        <Form.Item 
        
        >
            
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>  { t("login.remember_me")} </Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/forgot-password">
        { t("login.forgot_password")}
        </a>
      </Form.Item>

           {/* 验证码 */}
        
           <Form.Item
         
        //  style={{ marginBottom: 20 }}
        //  wrapperCol={{ span: 20, pull:  0 }}
        //  labelCol={{ span: 3, pull:  0 }}
        //  label={<span className='iconfont icon-securityCode-b' style={{ opacity: focusItem === 2 ? 1 : 0.6 }} />}
        //  colon={false}
         
         name="captcha" 
         
         rules={[
             { required: true, message: t("login.req_msg_verify_code") },
             {
                 validator: async (_rule, value) => {
                     if (value.length >= 4 && code!== value) {
                         throw new Error(`${t("login.verify_code_error")}`);
                     }
                  
                 }
             }
         ]}
         >
         <Row gutter={8}>
             <Col span={15}
             >
                

                      <Input
                     // className="myInput"
                     onChange={handleCaptchaChange}
                     onFocus={() => setFocusItem(2)}
                     onBlur={() => setFocusItem(-1)}
                     // onPressEnter={e => onSubmit(e, SignIn)}
                     placeholder={t("login.verify_code")}
                 />
             </Col>
             <Col span={9}>
                 <canvas
                  onClick={createCode} 
                  width="80" 
                  height='40'
                  ref={canvasRef}
                    />
             </Col>
         </Row>
     </Form.Item>

     <Form.Item>
            <div className="btn-box">
                <div className="loginBtn" 
                onClick={(e: any) => onSubmitData(e)}> { t("login.submit")} </div>
                {/* <div className="registerBtn">
                    <Link to="/">Signup</Link>
                </div> */}
            </div>
        </Form.Item>

        


    </Form>
          {!loading&& <LanguageChanger />}
     
       
          </div>
   
);

    }
}

const MapStateToProps = (state: any) => ({
    authUser: state.auth?.user,
    isAuthenticated: state.auth.isAuthenticated,
    authLoading: state?.auth
 })

 const MyLogin =  withRouter(LoginForm);
export default connect(MapStateToProps, { loginAction })(MyLogin);