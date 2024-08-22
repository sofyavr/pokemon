import React, { useState } from 'react';
import { Card, Flex } from 'antd';
import FormSignIn from './components/SignForm';
import FormSignUp from './components/SignFormUp';

const tabListNoTitle = [
  {
    key: 'signup',
    label: 'Sign up',
  },
  {
    key: 'signin',
    label: 'Sign in',
  }
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  signup: <p><FormSignUp/></p>,
  signin: <p><FormSignIn/></p>,
};

const App: React.FC = () => {
  const [activeTabKey2, setActiveTabKey2] = useState<string>('app');

  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <Flex gap="middle" align='start' vertical justify='center'>

      <Card
        style={{ width: '400px',}}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        onTabChange={onTab2Change}
        tabProps={{
          size: 'middle',
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
      </Flex>
  );
};

export default App;



