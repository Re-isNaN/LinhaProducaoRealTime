import { PaletteOptions } from "@mui/material";

interface TypeCommonColors {
    main: string,
    light: string,
    dark: string,
    contrastText: string,
    bgColor: string
}

export interface TypePalette extends PaletteOptions {
    mode: 'light' | 'dark'

    primary: TypeCommonColors,
    secondary: TypeCommonColors,
    success: TypeCommonColors,
    info: TypeCommonColors,
    alert: TypeCommonColors,
    warning: TypeCommonColors,
    neutral: TypeCommonColors,
    link: TypeCommonColors,

    grey: {
        50: string,
        100: string,
        200: string,
        300: string,
        400: string,
        500: string,
        600: string,
        700: string,
        800: string,
        900: string,
    }

    text: {
        primary: string,
        secondary: string,
        disabled: string,
    }

    action: {
        active: string,
        hover: string,
        selected: string,
        disabled: string,
        disabledBackground: string,
        focus: string,
    }
}