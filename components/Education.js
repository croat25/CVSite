import React from 'react'
import { Menu, Icon, Container, Grid } from 'semantic-ui-react'

const Education = (props) => {

    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={7}>
                        Wilfrid Laurier University, Waterloo - B.S.c Computer Science
                    </Grid.Column>
                </Grid.Row>
                <br/>
                <Grid.Row>
                    <Grid.Column width={7}>
                        Sept 2010 - April 2016
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
      )
}

export default Education