import React from 'react';
import { Input } from 'antd';

type InputType = {
    text?: string;
  };
  
const InputPass: React.FC<InputType> = ({text}) => <Input.Password placeholder={text} />;

export default InputPass;