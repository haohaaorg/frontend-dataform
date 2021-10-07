import React, { FC, useEffect } from 'react';
import { Modal, Form } from 'antd';

interface CategoryProps {
    visible: boolean,
    toggleVisible: any,
    categoryInfo: categoryInfo
}

interface categoryInfo {
    name?: string,
    category_id?: string,
    age?: number,
    gender?: string,
    major?: string,
    country?: string,
    academic_year?: string,
    address?: string

}

type Props = categoryInfo & CategoryProps;

const Category: FC<Props> = ({ visible, categoryInfo, toggleVisible }) => {


    const [form] = Form.useForm();


    const onCancel = (): void => {
         toggleVisible(false);
    }

    const handleOk = () => {
        // const value = form.getFieldValue();

    }

  
    useEffect(() => {

        form.setFieldsValue({
            name: categoryInfo?.name,
            Category_id: categoryInfo?.category_id,
     
          });

    }, [categoryInfo]);

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    }


    return (
        <>
           <Modal
            onCancel={onCancel}
            visible={visible}
            title={`${categoryInfo?.name}`}
            centered
            onOk={handleOk}
           >
              <Form
              form={form}
              {...formItemLayout}
              >
                  testing form .....
              </Form>
           </Modal>
        </>
    )
}

export default Category;
