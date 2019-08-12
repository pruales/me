import React from "react"
import styled from '@emotion/styled';
import theme from '../../config/theme';
import Layout from '../components/layout';
import LandingBio from '../components/landing-bio';
import SEO from '../components/SEO';

const HomePage = () => {

    return (
    
        <Layout>
            <SEO/>
            <LandingBio /> 
        </Layout>
    
    )
}

export default HomePage;