import React from 'react';
import './App.css';
import styled from 'styled-components';
import { StyledBtn } from './components/Button.styled';
import { Link } from './components/Link.styled';
import { SuperButton } from './components/Button.styled';
import { Menu } from './components/Menu.styled';
import { myTheme } from './styles/Theme.styled';

function App() {
  return (
    <div className="App">
      {/* <Menu>
        <ul>
          <li><a href="">item1</a></li>
          <li><a href="">item2</a></li>
          <li><a href="">item3</a></li>
        </ul>
      </Menu> */}
      <Box>
        <StyledBtn color ={myTheme.colors.primary} btnType= {'outlined'} >Hello</StyledBtn>
        <StyledBtn color = {myTheme.colors.secondary} btnType= {'primary'} >Hello</StyledBtn>
        {/* <SuperButton>Bye</SuperButton>
        <StyledBtn as={Link} href={'#'}>Link</StyledBtn>
        <StyledBtn as= 'a' href = '#'>Link 2</StyledBtn> */}
      </Box>
      
    </div>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet}{
    flex-direction: column;
  }
`;
