import React from 'react';
import { Button, Flex } from 'antd';

type ButtonType = {
    label?: string;
  };
  
const SignButton: React.FC<ButtonType> = ({label}) => (
  <Flex vertical gap="small" style={{ width: '100%' }}>
    <Button type="primary" htmlType='submit' block>
      {label}
    </Button>
  </Flex>
);

export default SignButton;