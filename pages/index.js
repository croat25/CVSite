import React, { Component } from 'react'
import Layout from '../components/layout'
import ResumeBuilder from '../components/resumeBuild'
import Education from '../components/Education'
class CVIndex extends Component {
    componentDidMount() {
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker
            .register("/service-worker.js")
            .then(registration => {
              console.log("service worker registration successful: ", registration);
            })
            .catch(err => {
              console.warn("service worker registration failed", err.message);
            });
        }
      }
    render() {
        return (
            <Layout>
            <div> 
                <link async rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>

                <h3 style={{textAlign: 'center'}}> Bruno Salapic CV</h3>

                <ResumeBuilder /> 
                <Education />

            </div>
            </Layout>
        )
    }
}

export default CVIndex