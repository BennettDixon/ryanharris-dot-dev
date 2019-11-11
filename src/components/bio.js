/** @jsx jsx */
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

import SocialMenu from "../components/SocialMenu"

const bioHeader = css`
  align-items: center;
  display: flex;
  margin-bottom: 8px;

  h3 {
    margin: 0;
  }
`

const descriptionLink = css`
  box-shadow: none;
  padding: 2px 4px;
  text-decoration: none;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <div
      css={css`
        padding: 8px 0;
      `}
    >
      <div css={bioHeader}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt="Ryan Harris profile picture"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
            margin: 0,
          }}
        />
        <h3>{author}</h3>
      </div>
      <p
        css={css`
          line-height: 2.25;
          margin: 0 0 16px 0;
        `}
      >
        Software engineer @{" "}
        <a
          css={descriptionLink}
          sx={{
            color: "white",
            fontWeight: "bold",
            backgroundColor: "accent",
          }}
          href="https://www.getguru.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guru
        </a>
        . Organizer of{" "}
        <a
          css={descriptionLink}
          sx={{
            color: "white",
            fontWeight: "bold",
            backgroundColor: "accent",
          }}
          href="https://www.meetup.com/Reactadelphia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reactadelphia
        </a>
        . Writer for{" "}
        <a
          css={descriptionLink}
          sx={{
            color: "white",
            fontWeight: "bold",
            backgroundColor: "accent",
          }}
          href="https://blog.logrocket.com/author/ryanharris/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LogRocket
        </a>
        .
      </p>
      <SocialMenu />
    </div>
  )
}

export default Bio
