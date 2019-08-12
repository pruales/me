import {Link} from "gatsby";
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from '../../config/theme';
import React from 'react';
import MePic from '../assets/me.jpg';
import Sun from '../assets/sun.svg';
import Moon from '../assets/moon.svg';

const Content = styled.nav`
    ${theme.mq({
        paddingLeft: ['24px', '0'],
        width: ['100%', '640px']
    })}
    padding-top: 18px;

`

const NavLink = styled(Link)`
    ${theme.mq({
        marginLeft: ['32px', '48px']
    })}
    color: ${props => props.theme.primary_color} !important;
    text-decoration: none !important;
    display: inline-block;
    position: relative; 
    font-family: freight-sans-pro, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px !important;
    @media (max-width: 320px) {
        font-size: 16px !important; 
    }

`

const HomeLink = styled(NavLink)`
    margin-left: 0 !important;
`

const SiteHeader = styled.header`
    background: transparent;
    ${theme.mq({
        display: ['block', 'flex'],
        justifyContent: ['left', 'center']
    })}
    align-content: center;
`

const ProfilePic = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-bottom: 0;
    vertical-align: middle;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);

    &:hover {
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.5);
        transform: scale(0.99);
    }

    &:active {
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
        transform: scale(0.98)
    }

    transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

`

const ThemeIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-bottom: 0;
    margin-top: 12px;
    ${theme.mq({
        marginRight: ['24px', '0'],
    })}
    float: right;
    vertical-align: middle;
    transition: opacity 0.25s ease;
`

//const themeButton = styled.im

const Header = ({changeTheme, darkTheme}) => (
    <SiteHeader>
        <Content>
            <p>
                <HomeLink to="/">
                    <ProfilePic src={MePic}/>
                </HomeLink>
                <NavLink to="/portfolio">Experiments</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <ThemeIcon onClick={changeTheme} src={darkTheme ? Sun : Moon}/>           
            </p>
        </Content>
    </SiteHeader>
)

Header.propTypes = {
    changeTheme: PropTypes.func,
    darkTheme: PropTypes.bool
}
  
Header.defaultProps = {
    changeTheme: ()=>{},
    darkTheme: true
}

export default Header;