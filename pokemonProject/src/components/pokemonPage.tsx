import React from 'react';
import { Flex, Layout } from 'antd';
import './pokemon.css'
const { Header, Sider, Content } = Layout;

const PokemonPage: React.FC = () => (
  <Flex gap="middle" wrap style={{ width: '100vw', height: '100vh' }}>

    <Layout className="layoutStyle">
      <Header className="headerStyle">Header</Header>
      <Layout>
        <Sider width="25%" className="siderStyle">
          Sider
        </Sider>
        <Content className="contentStyle">Content</Content>
        <Sider width="25%" className="siderStyle">
          Sider
        </Sider>
      </Layout>
    </Layout>

  </Flex>
);

export default PokemonPage;