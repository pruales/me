import React from "react"
import styled from '@emotion/styled';
import theme from '../../config/theme';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import PortfolioCard from '../components/portfolio-card';

import icymtImage from '../assets/time-passing.png';
import thesisLogo from '../assets/brain.png';

const PortfolioGrid = styled.div`
    ${theme.mq({
        gridTemplateColumns: ['auto auto' ,'auto auto auto'],
        gridColumnGap: ['58px', '48px'],
        paddingLeft: ['10px', '0']
    })}
    margin-top: 64px;
    display: grid;
    grid-row-gap: 64px;
`;



const Portfolio = ({data}) => {
    return(
        <Layout>
            <SEO title='Experiments' description='Technology Experiments by Paul Ruales' slug='/portfolio'/>
            <PortfolioGrid>
                <PortfolioCard title='ICYMT' link='https://www.producthunt.com/posts/icymt' imageSource={icymtImage}/>
                <PortfolioCard title='OMNILIFE.ai' link='https://drive.google.com/file/d/1ynLpCV52_n5IoZiWfpFk3FG4ay90KlM8/view?usp=sharing' imageSource={thesisLogo}/>
            </PortfolioGrid>
        </Layout>
    )
}

export default Portfolio