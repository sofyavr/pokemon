import React from 'react';
import { Input } from 'antd';

type InputType = {
    text?: string;
  };
  

const InputPlace: React.FC<InputType> = ({text}) => <Input placeholder={text} />;

export default InputPlace;