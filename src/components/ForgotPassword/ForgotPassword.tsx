import React, { useEffect, useState } from "react";
import { Form, Input, message, Button, Result } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import "./style.less";
import { Link } from "react-router-dom";

const ForgotPassword = ({}: any) => {
  const [form] = Form.useForm();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const handleOk = () => {
    const values = form.getFieldsValue();

    onRegister(values);
  };

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onRegister = async (values: any) => {
    setEmail(values?.email);

    // if(errors) {
    //     message.error(`${errors}`)
    // }
    // if(data?.forgotPassword && !errors) {

    //       setSuccess(true);

    //   }
  };

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <div className="password-form">
      <Form
        form={form}
        {...formItemLayout}
        onFinish={handleOk}
        // initialValues={{
        //     programme: props.studentInfo?.programme?.id,
        //     gender: props.studentInfo?.gender
        //  }}
      >
        {!success ? (
          <Form.Item
            label={t("forgot_password.email")}
            name="email"
            rules={[
              { required: true, message: t("forgot_password.req_msg_email") },
              { min: 3, message: t("forgot_password.min_msg_email") },
            ]}
          >
            <Input
              onChange={handleChangeEmail}
              maxLength={100}
              prefix={<MailOutlined className="site-form-item-icon" />}
              type={"email"}
              placeholder={t("forgot_password.email")}
            />
          </Form.Item>
        ) : (
          <div>
            <Result
              status="success"
              title={t("forgot_password.send_done")}
              subTitle={t("forgot_password.send_done_detail")}
              extra={[
                <Button type="primary" key="console">
                  <Link to={"/"}>{t("return")}</Link>
                </Button>,
                <Button key="buy" onClick={handleOk}>
                  {t("forgot_password.send_again")}
                </Button>,
              ]}
            />
          </div>
        )}

        {!success && (
          <div className="submit-btn">
            <Button key="link">
              <Link to={"/"}>{t("return")}</Link>
            </Button>
            <Button key="submit" type="primary" onClick={handleOk}>
              {t("submit")}
            </Button>
          </div>
        )}
      </Form>
    </div>
  );
};

export default ForgotPassword;
