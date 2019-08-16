import facepaint from 'facepaint';

const breakpoints = [640];

const mq = facepaint(
    breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)


const colors = {
    transparent: 'transparent',
    black: '#222b2f',
    gray: {
        '100': '#F7FAFC',
        '200': '#EDF2F7',
        '300': '##E2E8F0',
        '400': '#CBD5E0',
        '500': '#A0AEC0',
        '600': '#718096',
        '700': '#4A5568',
        '800': '#2D3748',
        '900': '#1A202C'
    },
    white: '#ffffff',
    background_dark: '#1A202C',
    background_light: '#FDFDFD',
    text_white: '#FDFDFD',
    text_lightgray: '#A0AEC0',
    card: "#35425C"

}

export const modeOptions = {
    dark: 'dark',
    light: 'light'
}

const lightTheme = {
    background: colors.background_light,
    primary_color: colors.background_dark,
    secondary_color: '#35425C', 
}

const darkTheme = {
    background: colors.background_dark,
    primary_color: colors.text_white,
    secondary_color: colors.text_lightgray
}

const colorTheme = dark => (dark ? darkTheme : lightTheme) 

const theme = {
    mq,
    colors,
    modeOptions,
    colorTheme,
    lightTheme,
    darkTheme
}   

export default theme;