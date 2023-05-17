import React from 'react'
import Header from './header'
import Head from 'next/head'
import Footer from './footer'
import  { Container } from 'semantic-ui-react'
const Layout = (props) => {

    return (
        <div>
            <Container>
                <Head>
                <link async rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
                </Head>
            <Header />
            { props.children }
            <Footer />
            </Container>
        </div>
    )
}

export default Layout