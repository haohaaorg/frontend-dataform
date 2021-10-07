import React, { useEffect } from "react";

import { connect } from "react-redux";
import { Modal, Form, Input, message, Select } from "antd";
import { LanguageData } from "../CreatePost/LanguageData";

const { Option } = Select;

const CreateCategoryModal = (props: any) => {
  const [form] = Form.useForm();

  // const [CreateCategoryMutation] = useMutation(CREATE_CATEGORY);

  const onCancel = () => {
    form.resetFields();
    props.toggleVisible(false);
  };
  const handleOk = () => {
    const values = form.getFieldsValue();

    onRegister(values);
  };

  const onRegister = async (values: any) => {
    const create__Input = {
      name: values.name,
      introduction: values.introduction,
      creatorId: props.authUser?.id,
      lang: values.lang,
    };

    // const { data, errors } = await CreateCategoryMutation({
    //   variables: {
    //     input: create__Input,
    //   },
    //   update: (cache, { data }) => {
    //     let { getCategories } = cache.readQuery({
    //       query: GET_CATEGORIES,
    //       variables: {
    //         authUserId: null,
    //         skip: 0,
    //         limit: 0,
    //       },
    //     });

    //     const newCategory = data?.createCategory;

    //     cache.writeQuery({
    //       query: GET_CATEGORIES,
    //       variables: {
    //         authUserId: null,
    //         skip: 0,
    //         limit: 0,
    //       },
    //       data: {
    //         getCategories: {
    //           categories: [...getCategories.categories, newCategory],
    //         },
    //       },
    //     });
    //   },
    // });

    // if (data && !errors) {
    //   message.success("Added Category  Successfully!");

    //   onCancel();
    // }
  };

  const { visible } = props;

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <>
      <Modal
        onCancel={onCancel}
        visible={visible}
        title="Create Category"
        centered
        onOk={handleOk}
        // getContainer={false}
        width={"785px"}
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
          <Form.Item
            label={"Name"}
            name="name"
            rules={[
              { required: true, message: "Name is empty." },
              { min: 3, message: "Name must be at least 3 digits!" },
            ]}
          >
            <Input maxLength={100} placeholder="Name" />
          </Form.Item>

          <Form.Item
            label={"Language"}
            name="lang"
            rules={[{ required: true, message: "Language is empty." }]}
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
              {LanguageData.length > 0
                ? LanguageData.map((language: any) => {
                    return (
                      <Option key={language.id} value={`${language.lang}`}>
                        {language?.value}
                      </Option>
                    );
                  })
                : null}
            </Select>
          </Form.Item>

          <Form.Item
            label={"Introduction"}
            name="introduction"
            rules={[
              { required: true, message: "Introduction is empty." },
              { min: 3, message: "Introduction must be at least 3 digits!" },
            ]}
          >
            <Input maxLength={100} placeholder="Introduction" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
const mapStateToProps = (state: any) => ({
  authUser: state.auth.user,
});

const CreateCategory = connect(mapStateToProps, {})(CreateCategoryModal);

export default CreateCategory;
