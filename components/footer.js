import React from 'react'
import { Menu, Icon, Container } from 'semantic-ui-react'

const Footer = (props) => {

    return (
        <Container>
        <div style={{marginTop: '100px', textAlign: 'center'}}>
            <a href="https://www.linkedin.com/in/bruno-s-8132b6127/">
            <Icon link name='linkedin'/>
            </a>
            <a href="https://github.com/croat25">
            <Icon link name='github'/>
            </a>
        </div>
        </Container>
      )
}

export default Footer