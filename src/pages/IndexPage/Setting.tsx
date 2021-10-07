import React, { useEffect, useState } from 'react';

import { Modal, Form, Input, message, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import {
   LockOutlined

  } from '@ant-design/icons';

import ForgotPasswordModal from "../../components/ForgotPassword/ForgotPasswordModal";

const SettingModal = ({  toggleVisible, visible }: any) => {

    const [form] = Form.useForm();
    const [changePasswordView, setChangePasswordView] = useState(false);
    const { t } = useTranslation();
    useEffect(() => {
       form.setFieldsValue({
       
        //   departmentId: departmentInfo.departmentId,
        //   name: props.departmentInfo.name,
        //   introduction: props.departmentInfo.introduction,

 

       })
    }, []);



    const onCancel = () => {
        
        form.resetFields()
        toggleVisible(false)

    }
     const handleOk = () => {
     
      const values = form.getFieldsValue();

      onRegister(values);
      
   
    }

    const toggleShowChangePassword = (visible: boolean) => {
      setChangePasswordView(visible);
  }

   const handleChangePassword = () => {
       toggleShowChangePassword(true);
   }


 


 const onRegister =  async (values: any) => {
  


    }
  
      


        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        }

        return (
            <>
            <Modal
                onCancel={onCancel}
                visible={visible}
                title='Setting'
                centered
                onOk={handleOk}
                // getContainer={false}
                width={'785px'}
                footer={[
                    <Button key="back" onClick={() => onCancel()}>
                      {/* Return */}
                      {t("return")}
                    </Button>,
                    // <Button key="submit" type="primary"  onClick={handleOk}>
                    //   Submit
                    // </Button>
                  ]}
            >
                  
                <Form
                form={form}
                {...formItemLayout}
                onFinish={handleOk}
                // initialValues={{ 
                //     programme: props.studentInfo?.programme?.id,
                //     gender: props.studentInfo?.gender
                //  }}
                
                >

                   
                   
                          <LockOutlined />
                          {'  '}
                       <Button onClick={handleChangePassword}> 
                     
                         {/* Change Password */}
                         {t("change_password")}
                       </Button>
                    
        





                </Form>
              
            </Modal>

              <ForgotPasswordModal visible={changePasswordView} toggleVisible={toggleShowChangePassword} />
            </>
        );
    }



export default SettingModal;