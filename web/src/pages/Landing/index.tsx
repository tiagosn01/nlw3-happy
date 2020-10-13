import React from 'react'

import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import logoImg from '../../images/logo.svg'
import { Container, Wrapper, Main, Location } from './styles'

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logoImg} alt="Logo" />

        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>

        <Location>
          <strong>Araçatuba</strong>
          <span>São Paulo</span>
        </Location>

        <Link to="app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Landing
