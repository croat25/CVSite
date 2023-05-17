import React, { Component } from 'react'
import { Card, Grid, Button } from 'semantic-ui-react'
import Layout from '../../components/layout'
import { Link } from '../../routes'
class ProjectsShow extends Component {

    renderCards() {


        const items = [
            {
                header: 'Eth KickStarter Improvement',
                meta: 'https://github.com/croat25/KickStarterVersionUsingEth',
                description: 'Simple app to upgrade kickstarter to a decentralized model',
                style: {overflowWrap: 'break-word'},
                href: 'https://github.com/croat25/KickStarterVersionUsingEth',
            },
            {
                header: 'Lottery Contract Using Ethereum',
                meta: 'https://github.com/croat25/ethereumLotteryAttempt',
                description: 'create a lottery contract with eth',
                style: {overflowWrap: 'break-word'},
                href: 'https://github.com/croat25/ethereumLotteryAttempt',
            },
            {
                header:'Youtube Replica Practicing React',
                meta: 'https://github.com/croat25/youtubeTrialReview',
                description: 'replicate youtube type of service using react',
                style: {overflowWrap: 'break-word'},
                href: 'https://github.com/croat25/youtubeTrialReview',
            },
            {
                header: 'Solidity Training',
                meta: 'https://github.com/croat25/solidityTraining',
                description: 'some solidity training',
                style: {overflowWrap: 'break-word'},
                href: 'https://github.com/croat25/solidityTraining',
            },
            {
                header: 'Tracker For Crypto Currencies',
                meta: 'https://github.com/croat25/ShitCoinsNoMore',
                description: 'instead of looking at thousands of crypto coins only look at the 3 most important',
                style: {overflowWrap: 'break-word'},
                href: 'https://github.com/croat25/ShitCoinsNoMore',
            },
            {
                header: 'Create A Btc Wallet Experiment',
                meta: 'https://github.com/croat25/btcLolWallet',
                description: 'create a btc wallet mimic of wasabii wallet',
                style: {overflowWrap: 'break-word'},
                href: 'https://github.com/croat25/btcLolWallet',
            },
            {
                header: 'Apollo Server Experiment',
                meta: 'https://github.com/croat25/apollo-server-trial',
                description: 'just testing out graphql using apollo',
                style: {overflowWrap: 'break-word'},
                href: 'https://github.com/croat25/apollo-server-trial',
            },
            {
                header: 'League of Legends Players Tracker',
                meta: 'https://github.com/croat25/ritoapppractice',
                description: 'create a small tracker for tracking league of legend progess and view match historys',
                style: {overflowWrap: 'break-word'},
                href: 'https://github.com/croat25/ritoapppractice',
            },
            {
                header: 'Ethereum Book',
                meta: 'https://github.com/croat25/ethereumbook',
                description: 'break down of ethereums book',
                style: {overflowWrap: 'break-word'},
                href: 'https://github.com/croat25/ethereumbook'
            },
            {
                header: 'Bitcoin Book',
                meta: 'https://github.com/croat25/bitcoinbook',
                description: 'a book on bitcoin of ins and outs',
                style: {overflowWrap: 'break-word'},
                href: 'https://github.com/croat25/bitcoinbook'
            },
            {
                header: 'Wedding Reservation Website',
                meta: 'https://github.com/croat25/weddingsite',
                description: 'to help for the newer generation make reservations to our wedding',
                style: {overflowWrap: 'break-word'},
                href : 'https://github.com/croat25/weddingsite'
            }
        ]

        return < Card.Group items = {items} />
    }

    render() {
        return (
        <Layout>
            <h3>Projects</h3>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        {this.renderCards()}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
        )
    }
}

export default ProjectsShow