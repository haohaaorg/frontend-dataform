import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { useMutation } from '@apollo/client';
import { Modal, Form, Input, message, Select } from 'antd';
import { GET_CATEGORIES, UPDATE_CATEGORY } from "../../graphql/category";
import { LanguageData } from '../CreatePost/LanguageData';


const { Option } = Select;
const EditCategoryModal = (props: any) => {
    const [EditCategoryMutation] = useMutation(UPDATE_CATEGORY)
    const [form] = Form.useForm();
    const [langKey, setLangKey] = useState('');

    useEffect(() => {
       form.setFieldsValue({
       
          name: props.categoryInfo.name,
          introduction: props.categoryInfo.introduction,
          lang: props.categoryInfo.lang,
       

       });

       setLangKey(props.categoryInfo.lang);

    }, [props]);



    const onCancel = () => {
        
        form.resetFields()
        props.toggleVisible(false)

    }
     const handleOk = () => {
     
      const values = form.getFieldsValue();

      onRegister(values);
      
   
    }

 


 const onRegister =  async (values: any) => {
  
        const lang_Key = values.lang || langKey;
        const edit__Input = {
            id: props.categoryInfo.id,
            name: values.name,
            introduction: values.introduction,
            creatorId: props.categoryInfo?.creator?.id,
            lang: lang_Key
  
        }

        const { data, errors } = await EditCategoryMutation({
            variables: {
                input: edit__Input
            },
            refetchQueries: [{
    
                query: GET_CATEGORIES,
                variables: {
                    authUserId: null,
                    skip: 0,
                    limit: 0
                },
           }],
           awaitRefetchQueries: true
        });


        if(data && !errors) {
            message.success('Updated Category  Successfully!')

            onCancel();

          }
    }
  
      


    
   
        const { visible } = props;

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        }

        return (
            <>
            <Modal
                onCancel={onCancel}
                visible={visible}
                title='Edit Category'
                centered
                onOk={handleOk}
                // getContainer={false}
                width={'785px'}
            >
                  
                <Form
                form={form}
                {...formItemLayout}
                onFinish={handleOk}
                initialValues={{ 
                    lang: langKey || props.categoryInfo?.lang
                 }}
                
                >

                    <Form.Item label={'Name'}
                    name="name"
                    rules={[
                        { required: true, message: 'Name is empty.' },
                        { min: 3, message: 'Name must be at least 3 digits!' }
                    ]}
                    >
                       
                            <Input
                                maxLength={100}
                                placeholder='Name' />
                    
                    </Form.Item>


                    <Form.Item label={'Introduction'}
                    name="introduction"
                    rules={[
                        { required: true, message: 'Introduction is empty.' },
                        { min: 3, message: 'Introduction must be at least 3 digits!' }
                    ]}
                    >
                       
                            <Input
                                maxLength={100}
                                placeholder='Introduction' />
                    
                    </Form.Item>

                    <Form.Item label={'Language'}
                    name="lang"
                    rules={[
                        { required: true, message: 'Language is empty.' },
                       
                    ]}
                    >
                    
                    <Select
                    
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a Language"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {LanguageData.length > 0 ? LanguageData.map((language: any) => {
                        return(
                            <Option   key={language.id} value={`${language.lang}`}>{language?.value}</Option>
                        )
                    }):null}
            
                </Select>
                        
                    
                    </Form.Item>

                </Form>
              
            </Modal>
            </>
        );
    }
const mapStateToProps = (state: any) => ({

    authUser: state.auth.user
});

const EditCategory= connect(mapStateToProps, {})(EditCategoryModal);

export default EditCategory;