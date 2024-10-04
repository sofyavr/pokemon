import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Card, Flex } from 'antd'; 
import FormSignIn from './components/SignForm';
import FormSignUp from './components/SignFormUp';
import { Counter } from './features/counter/counter';

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
  [AuthTab.SignUp]: <FormSignUp />,
  [AuthTab.SignIn]: <FormSignIn />,
};

const App: React.FC = () => {
  const location = useLocation();
  const [activeTabKey2, setActiveTabKey2] = useState<AuthTab>(AuthTab.SignIn);

  useEffect(() => {
    if (location.pathname === '/signup') {
      setActiveTabKey2(AuthTab.SignUp);
    } else if (location.pathname === '/signin') {
      setActiveTabKey2(AuthTab.SignIn);
    }
  }, [location.pathname]);

  const onTab2Change = (key: string) => {
    setActiveTabKey2(key as AuthTab);
    
    if (key === AuthTab.SignUp) {
      window.history.pushState({}, '', '/signup');
    } else {
      window.history.pushState({}, '', '/signin');
    }
  };

  return (
    <Flex align='center' justify='center' style={{ height: '100vh', width: '100vw', placeItems: 'center' }}>
      <Card
        style={{ width: '400px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        onTabChange={onTab2Change}
        tabProps={{
          size: 'middle',
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
      <Counter />
    </Flex>
  );
};

const MainApp = () => (
  <Router>
    <Routes>
      <Route path="/signup" element={<App />} />
      <Route path="/signin" element={<App />} />
      <Route path="/" element={<App />} /> 
    </Routes>
  </Router>
);

export default MainApp;