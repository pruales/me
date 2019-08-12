import React from "react";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import theme from '../../config/theme';
import Header from './header';
import {ThemeProvider} from 'emotion-theming';

const Content = styled.div`
    ${theme.mq({
        paddingLeft: ['24px', '0'],
        width: ['100%', '640px']
    })}
    margin: 0 auto;
    padding-top: 0;
`

const Background = styled.div`
    background-color: ${props => props.theme.background};
    transition: background-color 0.3s ease-out;
    position: fixed;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    top: 0:
    left: 0;
    overflow-y: auto;
    z-index: 1000;
    p{
        color: ${props => props.theme.secondary_color};
    }
    h1 {
        color: ${props => props.theme.primary_color};
    }
    a {
        color: ${props => props.theme.secondary_color};
    }
    a:hover {
        color: ${props => props.theme.primary_color};
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
class Layout extends React.Component{
    constructor(props) {
        super(props)
        this.state = { darkTheme: true }
        this.changeTheme = this.changeTheme.bind(this)
    }

    componentDidMount() {
        console.log('checking local storage')
        const localStorageLayout = localStorage.getItem(theme.modeOptions.dark)
        if (localStorageLayout) {
          this.setState({ darkTheme: JSON.parse(localStorageLayout) })
        }
    }
    
      changeTheme() {
        console.log(this.state)
        this.setState({
          darkTheme: !this.state.darkTheme,
        })
        localStorage.setItem(theme.modeOptions.dark, !this.state.darkTheme)
      }

    render() {
        const { children }  = this.props;
        
        return (
            <div>
                <ThemeProvider theme={theme.colorTheme(this.state.darkTheme)}>
                    <Global
                        styles = {css`
                            @import url("https://use.typekit.net/bjk4etu.css");
                            body {
                                -moz-osx-font-smoothing: grayscale;
                                -webkit-font-smoothing: antialiased;
                                padding: 0;
                                margin: 0;
                            }
                            p {
                                font-family: proxima-nova, sans-serif;
                                font-weight: 400;
                                font-style: normal;
                                ${theme.mq({
                                    fontSize: ['14px', '20px'],
                                    lineHeight: ['25px', '32px'],
                                })}
                            }

                            h1 {
                                font-size: 30px;
                                font-family: freight-sans-pro, sans-serif;
                                font-weight: 700;
                                font-style: normal;
                                @media (max-width: 320px) {
                                    font-size: 20px;
                                }
                            }
                            
                            * , *:before, *:after{ 
                                box-sizing:border-box; 
                                -moz-box-sizing:border-box; 
                                -webkit-box-sizing:border-box; 
                                -ms-box-sizing:border-box;
                              }
                            
                            a {
                                text-decoration: underline;
                            }
                            a:-webkit-any-link {
                                text-decoration: underline;
                                cursor: pointer;
                            }
                        `}
                    />
                    <Background>
                        <Header changeTheme={this.changeTheme} darkTheme={this.state.darkTheme}/>
                        <Content>
                            <main>{children}</main>
                        </Content>
                        <Footer>
                                <p style={{fontSize: '14px'}}>
                                    paul ruales / maker / <a href="https://github.com/pruales">github</a> / <a href="https://twitter.com/prminified">twitter</a>
                                </p>
                        </Footer>
                    </Background>
                </ThemeProvider>    
            </div>
        )
    
    }  
}

export default Layout;