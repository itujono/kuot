import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "antd";


const Post = ({ data: { markdownRemark } }) => {
    const { title, date } = markdownRemark.frontmatter
    const html = markdownRemark.html

    return (
        <Row>
            <Col span={12}>
                <h3>{title}</h3>
                <p>{date}</p>
                <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
            </Col>
        </Row>
    )
}

export const postQuery = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
            html
            frontmatter {
                title
                date
                path
                tags
                excerpt
            }
        }
    }
`

export default Post