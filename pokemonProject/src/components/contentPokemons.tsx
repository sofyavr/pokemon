import type { CSSProperties } from 'react';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { CollapseProps } from 'antd';
import { Collapse,  } from 'antd';
import PokemonList from './pokemonList';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: <span className='YellowTextStyle' >My Pokemons</span>,
    children: 
            <div>
                <PokemonList/>
            </div>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <span className='YellowTextStyle' >Garden</span>,
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <span className='YellowTextStyle' >Hunt</span>,
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
      expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} className='DownOutlined'/>}
      expandIconPosition='end'
      style={{ background: '#0000',  }}
      items={getItems(panelStyle)}
    />
  );
};

export default ContentPokemons;