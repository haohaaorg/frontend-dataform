import React, { useState } from "react";
import { Form, Input, message, Button } from "antd";
import { Redirect, useParams } from "react-router";
import { CHANGE_PASSWORD } from "../../graphql/password";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ChangePassword = ({}: any) => {
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const { token }: any = useParams();

  const handleOk = () => {
    const values = form.getFieldsValue();

    onRegister(values);
  };

  const onHandlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const onRegister = async (values: any) => {
    // const { data, errors } = await ChangePasswordMutation({
    //     variables: {
    //          token,
    //          newPassword: values.newPassword
    //     }
    // });
    // if(data?.changePassword && !errors) {
    //     message.success(t('forgot_password.msg_success'))
    //     setSuccess(true);
    //   }
  };

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  if (success) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="password-form">
      <Form
        {...layout}
        form={form}
        {...formItemLayout}
        onFinish={handleOk}
        // initialValues={{
        //     programme: props.studentInfo?.programme?.id,
        //     gender: props.studentInfo?.gender
        //  }}
      >
        <Form.Item
          label={t("forgot_password.new_password")}
          name="newPassword"
          rules={[
            { required: true, message: "New Password is empty." },
            { min: 6, message: "New Password must be at least 6 digits!" },
          ]}
        >
          <Input
            onChange={onHandlePasswordChange}
            maxLength={20}
            type={"password"}
            placeholder={t("forgot_password.new_password")}
          />
        </Form.Item>

        <Form.Item
          label={t("forgot_password.comfirm_password")}
          name="comofirmPassword"
          rules={[
            {
              required: true,
              message: t("forgot_password.req_msg_comfirm_password"),
            },
            { min: 6, message: t("forgot_password.min_msg") },
            {
              validator: async (_rule, value) => {
                if (
                  value.length >= 6 &&
                  password.toUpperCase() !== value.toUpperCase()
                ) {
                  throw new Error(t("forgot_password.p_not_eql"));
                }
              },
            },
          ]}
        >
          <Input
            maxLength={20}
            type={"password"}
            placeholder={t("forgot_password.comfirm_password")}
          />
        </Form.Item>

        <div className="submit-btn">
          <Button key="link">
            <Link to={"/"}>
              {/* Return */}
              {t("return")}
            </Link>
          </Button>
          <Button key="submit" type="primary" onClick={handleOk}>
            {/* Submit */}
            {t("submit")}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ChangePassword;
