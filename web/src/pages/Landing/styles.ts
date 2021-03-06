import styled from 'styled-components'

import backgroundImg from '../../images/ilustration.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  background: url(${backgroundImg}) no-repeat 80% center;
  background-size: 40%;

  height: 100%;
  max-height: 580px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  a {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background: #ffd666;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;

    &:hover {
      background: #96feff;
    }
  }
`

export const Main = styled.main`
  max-width: 350px;

  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;

    line-height: 34px;
  }
`

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
  }
`
