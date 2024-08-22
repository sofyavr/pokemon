import React, { useState } from 'react';
import { Card, Flex } from 'antd';
import FormSignIn from './components/SignForm';
import FormSignUp from './components/SignFormUp';

enum AuthTab {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
}

const tabListNoTitle = [
  {
    key: AuthTab.SignUp,
    label: 'Sign up',
  },
  {
    key: AuthTab.SignIn,
    label: 'Sign in',
  }
];


const contentListNoTitle: Record<AuthTab, React.ReactNode> = {
  [AuthTab.SignUp]: <FormSignUp/>,
  [AuthTab.SignIn]: <FormSignIn/>,
};

const App: React.FC = () => {
  const [activeTabKey2, setActiveTabKey2] = useState<AuthTab>(AuthTab.SignUp);

  const onTab2Change = (key: string) => {
    setActiveTabKey2(key as AuthTab);
  };

  return (
    <Flex align='center'  justify='center' style={{height:'100vh', width:'100vw', placeItems: 'center',}} >

      <Card
        style={{ width: '400px', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}
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



