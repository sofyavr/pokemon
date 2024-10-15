import React from 'react';
import { Flex, Layout } from 'antd';
import './pokemon.css'
import ContentPokemons from './contentPokemons';

const { Header, Sider, Content } = Layout;

const PokemonPage: React.FC = () => (
  <Flex gap="middle" wrap style={{ width: '100vw', height: '100vh' }}>
    <Layout className="layoutStyle">
      <Header className="headerStyle">
        <div className='headerLogoStyle'>
            <img src="../img/pokemon.png" alt="pokemon" style={{height:'54px', width:'149px', marginRight:'5px'}}/>
            <hr style={{color: 'rgba(239, 239, 239, 1)', height:'54px', width:'2px', border:'1px solid rgba(239, 239, 239, 1)' }}/>
            <img src="../img/clicker.png" alt="pokemon" style={{height:'54px', width:'149px', }}/>
        </div>
        <div className='headerLogoStyle'>
            <img src="../img/coin.png" alt="coin" style={{height:'32px', width:'32px', marginRight:'5px', justifyContent:'flex-end'}}/>
            <span className='YellowTextStyle'>100000000</span> 
        </div>
      </Header>
      <Layout>
        <Sider width="25%" className="siderStyle" style={{backgroundColor:'#ffff'}}>
        <span className='YellowTextStyle' style={{marginLeft:'20px', }}>Inventory</span> 

        </Sider>
        <Content className="contentStyle" >
        <ContentPokemons/>
        </Content>
        <Sider width="25%" className="siderStyle" style={{backgroundColor:'#ffff'}}>
        <span className='YellowTextStyle' style={{marginLeft:'20px'}}>Shop</span> 
        </Sider>
      </Layout>
    </Layout>

  </Flex>
);

export default PokemonPage;