import React from 'react'

import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarker from '../../images/local.svg'

import { Container, Aside, Header } from './styles'

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <Aside>
        <Header>
          <img src={mapMarker} alt="mapIcon" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <footer>
          <strong>Araçatuba</strong>
          <span>São Paulo</span>
        </footer>
      </Aside>

      <Map
        center={[-21.2049975, -50.4763916]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="/">
        <FiPlus />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
