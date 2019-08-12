import React from "react"
import styled from '@emotion/styled';
import PropTypes from "prop-types";
import theme from '../../config/theme';
import Layout from '../components/layout';
import { Link } from "gatsby";

const BlogTitle = styled.h1`
    margin-top: 64px;
    margin-bottom: 8px;
    ${theme.mq({
        width: ['350px', 'auto']
    })}
    @media (max-width: 320px) {
        width: auto;
    }
    a {
        color: ${props => props.theme.primary_color} !important;
        text-decoration: none !important;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4px;
`;

const Tag = styled.p`
    margin-top: 6px;
    margin-bottom: 0;
    margin-right: 8px;
    ${theme.mq({
        fontSize: ['12px', '16px'],
        lineHeight: ['12px', '14px']
    })}
    display: inline-block;
    position: relative;
    border-style: solid;
    border-width: 1px;
    border-radius: 32px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 4px 16px;
    border-color: #8BEFCC;
`;

const MetaData = styled.p`
    margin: 0;
    ${theme.mq({
        fontSize: ['12px', '14px'],
        lineHeight: ['12px', '14px']
    })}
`;

const Spoiler = styled.p`
    ${theme.mq({
        width: ['304px', 'auto']
    })}
    margin-top: 4px;
    margin-bottom: 0;
`;

const BlogCard = ({title, metadata, spoiler, tags, slug}) => {
    return(
        <article>
            <BlogTitle><Link to={slug}>{title}</Link></BlogTitle>
            <MetaData>{metadata}</MetaData>
            <Spoiler>{spoiler}</Spoiler>
            <Tags>
                {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
            </Tags>
            
        </article> 
    )
}

BlogCard.propTypes = {
    title: PropTypes.string,
    metadata: PropTypes.string,
    spoiler: PropTypes.string,
    tags: PropTypes.array
}
  
BlogCard.defaultProps = {
    firstName: ``,
    metadata: ``,
    spoiler: ``,
    tags: []
}

export default BlogCard