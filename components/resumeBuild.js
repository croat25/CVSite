import React, { Component } from 'react'
import { Menu, Icon, Container, Grid } from 'semantic-ui-react'
import jobs from './resume.json'

class ResumeBuilder extends Component {
    constructor(props){
        super(props);
    }
    state = {
        jobList : []
    }

    jobDescription(jobDescription){
        const listOfDescription = jobDescription.map(description => {
            return (
                <div>
                    {description}
                    <br />

                </div>

            )
        })

        return listOfDescription
    }

    renderRow(){
        const items = jobs.map(job => {
            return (
                <div>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                {job.title}
                                <br />
                                {job.ServiceTime}
                                <br />
                                {job.Company}
                                <br />
                                {job.Location}
                                <br />
                            </Grid.Column>
                            <Grid.Column width={11}>
                                {this.jobDescription(job.description)}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            )
        });

        return items;
    }

    render() {
        return (
            <Container>
                <h3> Experience </h3>
                {this.renderRow()}
                <br />
                <h3> Education </h3>
            </Container>
          )
    }
}

export default ResumeBuilder