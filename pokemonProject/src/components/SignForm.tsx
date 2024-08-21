import React from 'react';
import type { FormProps } from 'antd';
import { Form, Input } from 'antd';
import SignButton from '../components/button';

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

const FormSignIn: React.FC = () => {
  return (
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
      <Input
      placeholder='Input login'
      />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password
      placeholder='Input password'
/>
    </Form.Item>

    <SignButton
    label="Sign in">
        
      </SignButton>
  </Form>
  );
};

export default FormSignIn;