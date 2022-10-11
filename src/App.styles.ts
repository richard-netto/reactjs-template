import styled, { keyframes } from 'styled-components';

const logoSpinAnimation = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `;

export const AppContainerDiv = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLogoImg = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${logoSpinAnimation} infinite 10s linear;
`;

export const TextP = styled.p``;

export const LinkA = styled.a`
  color: #61dafb;
`;
