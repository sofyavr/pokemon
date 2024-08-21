import React from 'react';
import FormSignIn from './components/SignForm';
import FormSignUp from './components/SignFormUp'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Sign up',
    children: <FormSignUp/>,
  },
  {
    key: '2',
    label: 'Sign in',
    children: <FormSignIn/>,
  }
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App;

