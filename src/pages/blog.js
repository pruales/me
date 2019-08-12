import React from "react"
import styled from '@emotion/styled';
import theme from '../../config/theme';
import Layout from '../components/layout';
import BlogCard from '../components/blog-card';
import { Link, graphql } from 'gatsby';

const Blog = ({data: {allMdx: {nodes: posts}}}) => {
    return(
        <Layout>
            {posts.map(post => 
                <BlogCard 
                tags={post.frontmatter.categories}
                title={post.frontmatter.title}
                metadata={post.frontmatter.date + " - " + post.timeToRead + " min read"}
                spoiler={post.frontmatter.spoiler}
                slug={post.fields.slug}
                key={post.fields.slug}
                />
            )}
        </Layout>
    )
}

export default Blog

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          categories
          spoiler
        }
        timeToRead
      }
    }
  }
`