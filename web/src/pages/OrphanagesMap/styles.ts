import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;

  .leaflet-container {
    z-index: 5;
  }

  a {
    position: absolute;
    right: 40px;
    bottom: 40px;
    z-index: 10;

    width: 64px;
    height: 64px;
    background: #15c3d6;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;

    &:hover {
      background: #17d6eb;
    }
  }
`
export const Aside = styled.aside`
  width: 448px;
  padding: 80px;

  background: ${props => props.theme.colors.background};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }

  footer {
    display: flex;
    flex-direction: column;
    line-height: 24px;

    > strong {
      font-weight: 800;
    }
  }
`
export const Header = styled.header``
