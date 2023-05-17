import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from '../routes'

const Header = (props) => {

    return (
        <Menu style={{ marginTop: '10px' }} borderless>
          <Link route="/index">
            <a className='item'>
              Bruno Salapic
            </a>
          </Link>
  
          <Menu.Menu position='right'>
            <Link route="/projects">
              <a className='item'>
                Projects
              </a>
            </Link>

            <Link route="/About">
              <a className='item'>
                About
              </a>
            </Link>
          </Menu.Menu>
        </Menu>
      )
}

export default Header