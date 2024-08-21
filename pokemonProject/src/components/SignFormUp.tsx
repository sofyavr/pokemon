import React from 'react';
import type { FormProps } from 'antd';
import {
  Form,
  Input,
} from 'antd';
import SignButton from '../components/button';


const App: React.FC = () => {
  const [form] = Form.useForm();

  type FieldType = {
    login?: string;
    password?: string;
  };
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  return (
    <Form
      form={form}
      name="register"
      layout='vertical'
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="login"
        label="Login"
        rules={[{ required: true, message: 'Please input your login!' }]}
      >
        <Input 
              placeholder='Input login'
/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password 
              placeholder='Input password'
/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Password confirmation"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password 
              placeholder='Input password again'
/>
      </Form.Item>
      <SignButton
    label="Sign in">
        
      </SignButton>
    </Form>
  );
};

export default App;