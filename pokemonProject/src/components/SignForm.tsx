import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form } from 'antd';
import InputPlace from '../components/input';

type FieldType = {
  login?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const FormSignIn: React.FC = () => (
  <Form
    name="basic"
    layout='vertical'
    style={{ maxWidth: 600 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Login"
      name="login"
      rules={[{ required: true, message: 'Please input your login!' }]}
    >
      <InputPlace 
        text="Input login"
      />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <InputPlace 
            text="Input password"
/>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Sign in
      </Button>
    </Form.Item>
  </Form>
);

export default FormSignIn;