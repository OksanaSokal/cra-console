import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: 'outlined' | 'primary'
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  background-color: ${props => props.color || 'grey'};
  color: #1a271d;
  padding: 10px;
  font-size: ${props => props.fontSize};

  &:hover {
    background-color: #abb75e;
  }

  ${props => props.btnType === 'outlined' && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || 'yellow'};
    color: ${props => props.color || 'yellow'};
    background-color: pink;
  `}


  //primary

  ${props => props.btnType === 'primary' && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || 'yellow'};
    color: snow;  
  `}


  /* &:last-child {
    background-color: beige;
  } */
`;

export const SuperButton = styled(StyledBtn)`
border-radius: 5px;
background-color: aqua;

&:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
}

`