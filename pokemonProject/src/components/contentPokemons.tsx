import type { CSSProperties } from 'react';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse,  } from 'antd';
import { Pokemon } from './getPokemons'

const pokemon = ['clefairy', 'pikachu', 'ditto', 'bulbasaur']

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: <span className='YellowTextStyle' style={{marginLeft:'20px'}}>My Pokemons</span>,
    children: <p>
              <div>
        {pokemon.map((poke, index) => (
          <Pokemon key={index} name={poke} pollingInterval={0} />
        ))}
      </div>
    </p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <span className='YellowTextStyle' style={{marginLeft:'20px'}}>Garden</span>,
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <span className='YellowTextStyle' style={{marginLeft:'20px', }}>Hunt</span>,
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const ContentPokemons: React.FC = () => {


  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    borderRadius: '16px',
    border: 'none',
    backgroundColor:'#ffff',
    boxShadow: '0px 0px 16px 0px rgba(58, 58, 58, 0.1)',
    
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} style={{color:' rgba(54, 95, 172, 1)', width:'16px', height:'10px', marginTop:'17px'}}/>}
      expandIconPosition='end'
      style={{ background: '#0000' }}
      items={getItems(panelStyle)}
    />
  );
};

export default ContentPokemons;