import React from "react";
import styled from "@emotion/styled";
import theme from '../../config/theme';
import Header from './header';
import "./layout.css";

const Content = styled.div`
    ${theme.mq({
        width: ['100%', '640px']
    })}
    margin: 0 auto;
    padding-top: 0;
`

const StyleWrapper = styled.div`    
    position: fixed;
    height: 100%;
    width: 100%;
    padding: 0 24px 0 24px;
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
    ol,ul {
        ${theme.mq({
            fontSize: ['14px', '20px'],
            lineHeight: ['25px', '32px'],
        })}
    }
    h1 {
        font-family: freight-sans-pro, sans-serif;
        font-weight: 700;
        font-style: normal;
        @media (max-width: 320px) {
            font-size: 20px;
        }
        color: var(--h1Color);
        ${theme.mq({
            fontSize: ['20px', '30px']
        })}
    }

    a {
        color: var(--aColor);
    }

    a:hover {
        color: var(--aHoverColor);
    }
    --webkit-overflow-scrolling: touch;


`

const Footer = styled.footer`
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-content: center;
    p{
        ${theme.mq({
            width: ['100%', '640px']
        })}
    }
`
const Layout = (props) => {
    const { children } = props;

    return (
        <div>
            <StyleWrapper>
                <Header />
                <Content>
                    <main>{children}</main>
                </Content>
                
                <Footer>
                    <p style={{ fontSize: '14px' }}>
                        paul ruales / maker / <a href="https://github.com/pruales">github</a> / <a href="https://twitter.com/prminified">twitter</a>
                    </p>
                </Footer>
            </StyleWrapper>
        </div>
    )

}

export default Layout;