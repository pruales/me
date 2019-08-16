import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import theme from '../../config/theme'
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const Title = styled.h1`
    margin-top: 64px;
    margin-bottom: 8px;
`

const Content = styled.div`
    margin-top: 24px;
    ${theme.mq({
        width: ['auto', '640px'],
        marginRight: ['24px', '']
    })};
`
const Metadata = styled.p`
    margin: 0;
    ${theme.mq({
        fontSize: ['12px !important', '14px !important'],
        lineHeight: ['12px !important', '14px !important']
    })}
`;

const MarkdownContent = styled.div`

`;

export default ({ pageContext: { slug, prev, next }, data: { mdx: postNode } }) => {
    const post = postNode.frontmatter;
    
    return (
        <Layout>
           <SEO title={post.title} description={post.spoiler} slug={slug}/>
           <Title>{post.title}</Title>
           <Metadata>{post.date + " - " + postNode.timeToRead + " min read"}</Metadata>
           <Content>
               <MDXRenderer>
                   {postNode.body}
               </MDXRenderer>
           </Content>
        </Layout>
    )
}

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        spoiler
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`