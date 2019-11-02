import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from '@emotion/styled';
import theme from '../../config/theme';

const NameHeader = styled.h1`
    margin-top: 64px;
    font-size: 30px;
    font-family: freight-sans-pro, sans-serif;
    font-weight: 700;
    font-style: normal;
`

const Intro = styled.p`
    margin-top: 24px;
    ${theme.mq({
        width: ['auto', '640px'],
    })};
`

const LandingBio = () => (
    <StaticQuery
        query={graphql`
            query LandingBioQuery {
                site{
                    siteMetadata{
                        firstName
                    }
                }
            }
        `}
        render={data => (
            <div>
                <NameHeader>Hi, I'm {data.site.siteMetadata.firstName}</NameHeader>
                <Intro>
                    I like to build useful things with code. I'm currently working on blockstack applications. In my free time, I like to write and 
                    experiment with new product ideas. I'm currently building 12 products in 12 months in 12 different programming
                    languages.
                </Intro>
            </div>
        )}
    />
)

NameHeader.propTypes = {
    firstName: PropTypes.string,
}
  
NameHeader.defaultProps = {
    firstName: ``,
}

export default LandingBio
