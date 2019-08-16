import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import theme from '../../config/theme';
import Header from './header';
import useDarkMode from 'use-dark-mode';
import "./layout.css";

const Content = styled.div`
    ${theme.mq({
    paddingLeft: ['24px', '0'],
    width: ['100%', '640px']
    })}
    margin: 0 auto;
    padding-top: 0;
`

const Background = styled.div`    
    position: fixed;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    top: 0:
    left: 0;
    overflow-y: auto;
    z-index: 1000;
    p {
        font-family: proxima-nova, sans-serif;
        font-weight: 400;
        font-style: normal;
        ${theme.mq({
            fontSize: ['14px', '20px'],
            lineHeight: ['25px', '32px'],
        })}
        color: var(--pColor);
    }
    
    h1 {
        font-size: 30px;
        font-family: freight-sans-pro, sans-serif;
        font-weight: 700;
        font-style: normal;
        @media (max-width: 320px) {
            font-size: 20px;
        }
        color: var(--h1Color);
    }

    a {
        color: var(--aColor);
    }

    a:hover {
        color: var(--aHoverColor);
    }

`

const Footer = styled.footer`
    margin-top: 64px;
    display: flex;
    justify-content: center;
    align-content: center;
    p{
        ${theme.mq({
            paddingLeft: ['24px', '0'],
            width: ['100%', '640px']
        })}
    }
`
const Layout = (props) => {

    const { children } = props;
    //const darkMode = useDarkMode(false);

    return (
        <div>
            <Background>
                <Header />
                <Content>
                    <main>{children}</main>
                </Content>
                <Footer>
                    <p style={{ fontSize: '14px' }}>
                        paul ruales / maker / <a href="https://github.com/pruales">github</a> / <a href="https://twitter.com/prminified">twitter</a>
                    </p>
                </Footer>
            </Background>
        </div>
    )

}

export default Layout;