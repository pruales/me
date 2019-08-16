import React from "react"
import styled from '@emotion/styled';
import theme from '../../config/theme';


const size = {
    normal: '120px',
    small: '80px'
};

const Card = styled.div`
    display: inline-block;
    position: relative;
    width: ${size.normal};
    height: ${size.normal};
    border-radius: 21px;
    background: ${theme.colors.card};
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
    @media (max-width: 320px) {
        width: ${size.small};
        height: ${size.small};
        border-radius: 10px; 
    }

    &:hover {
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.5);
        transform: scale(0.99);
        cursor: pointer;
    }

    &:active {
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
        transform: scale(0.98)
    }

    transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const Name = styled.h1`
    margin-top: 8px;
    font-size: 20px !important;
    font-family: freight-sans-pro, sans-serif;
    font-weight: 400 !important;
    font-style: normal;
    width: ${size.normal};
    text-align:center;
    @media (max-width: 320px) {
        width: ${size.small};
        font-size: 18px !important;
        margin-top: 6px !important;
    }
`;

const AppImage = styled.img`
    width: 84px;
    height: 84px;
    display: block;
    margin-top: 19px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 320px) {
        width: 56px;
        height: 56px;
        display: block;
        margin-top: 14px;
        margin-left: auto;
        margin-right: auto;
    }
`;

const PortfolioCard = ({link, title, imageSource}) => {
    return(
        <div>
            <a href={link}>
            <Card><AppImage src={imageSource}></AppImage></Card>
            </a>
            <Name>{title}</Name>
        </div>
    )
}

export default PortfolioCard