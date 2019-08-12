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
    color: ${props => props.theme.primary_color}
`

const Intro = styled.p`
    margin-top: 24px;
    ${theme.mq({
        width: ['auto', '640px'],
        marginRight: ['24px', '']
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
                    The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. 
                    Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! 
                    Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. 
                    Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. 
                    How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. 
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