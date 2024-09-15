import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';

interface Props {
  
}

const NavBar: React.FC<Props> = ({  }) => {
  return (
    <Segment  inverted attached size='mini'>
      <Menu inverted secondary>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>Home</Menu.Item>
      </Menu>
    </Segment>
  );
};

export default NavBar;