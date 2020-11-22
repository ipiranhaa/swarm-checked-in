import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const FontLoader = styled.span`
  /* thai */
  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraBGwCKd6xBDFs.woff2')
      format('woff2');
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }

  /* latin-ext */
  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcrabGwCKd6xBDFs.woff2')
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
      U+2C60-2C7F, U+A720-A7FF;
  }

  /* latin */
  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/kanit/v7/nKKZ-Go6G5tXcraVGwCKd6xB.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* thai */
  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr4uPhWzVaFrNlJzIu4.woff2')
      format('woff2');
    unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
  }

  /* latin-ext */
  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr4uPhWpVaFrNlJzIu4.woff2')
      format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
      U+2C60-2C7F, U+A720-A7FF;
  }

  /* latin */
  @font-face {
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr4uPhWnVaFrNlJz.woff2')
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  font-family: 'Kanit';
`

const Container = styled.div`
  padding: 2vh 2vw;
`

const Navigator = styled.div`
  text-align: center;
`

const MenuList = styled.ul`
  list-style-type: none;
  height: 40px;
  tex li {
    float: left;
    padding: 0 8px;
  }

  li:not(:last-child) {
    border-right: 1px solid #95a5a6;
  }

  li a {
    text-decoration: none;
  }
`

const Layout = (props: { children: ReactElement }) => {
  const { children } = props

  return (
    <FontLoader>
      <Container>{children}</Container>
      <Navigator>
        <MenuList>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/geography">
              <a>Geography</a>
            </Link>
          </li>
          <li>
            <Link href="/all">
              <a>All checked-In</a>
            </Link>
          </li>
        </MenuList>
      </Navigator>
    </FontLoader>
  )
}

export default Layout
