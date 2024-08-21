import React, { useState } from 'react';
import { Card } from 'antd';
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
    <>
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        onTabChange={onTab2Change}
        tabProps={{
          size: 'middle',
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};

export default App;



// import React from 'react';
// import FormSignIn from './components/SignForm';
// import FormSignUp from './components/SignFormUp';
// import { Tabs } from 'antd';
// import type { TabsProps } from 'antd';

// const onChange = (key: string) => {
//   console.log(key);
// };

// const items: TabsProps['items'] = [
//   {
//     key: '1',
//     label: 'Sign up',
//     children: <FormSignUp/>,
//   },
//   {
//     key: '2',
//     label: 'Sign in',
//     children: <FormSignIn/>,
//   }
// ];

// const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
// export default App;

