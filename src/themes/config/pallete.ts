import { TypePalette } from "../types/TypePalette";

export const palette: TypePalette = {
    // Modo do tema
    mode: 'light',

    // COR PRIMÁRIA (Azul Principal)
    primary: {
        main: 'rgb(17, 115, 212)',        // #1173D4
        light: 'rgb(25, 135, 232)',       // #1987E8 - Mais claro
        dark: 'rgb(12, 82, 151)',         // #0C5297 - Mais escuro
        contrastText: '#ffffff',          // Texto branco em cima do azul
        bgColor: '#f5f7fa',
    },

    // COR SECUNDÁRIA (pode usar para acentos)
    secondary: {
        main: 'rgb(33, 145, 242)',        // #2191F2
        light: 'rgb(85, 175, 242)',       // Mais claro
        dark: 'rgb(21, 125, 222)',        // Mais escuro
        contrastText: '#ffffff',
        bgColor: '#ffffff'
    },

    neutral: {
        main: '#718096',                  // Azul claro - Produzindo
        light: '#63b3ed',
        dark: '#3182ce',
        contrastText: '#ffffff',
        bgColor: '#edf2f7'
    },

    info: {
        main: '#4299e1',                  // Azul claro - Produzindo
        light: '#63b3ed',
        dark: '#3182ce',
        contrastText: '#ffffff',
        bgColor: 'rgba(17, 115, 212, 0.1)'
    },

    link: {
        main: '#67127C',                  // Vermelho - Cancelada
        light: '#BC6FF1',
        dark: '#46295A',
        contrastText: '#ffffff',
        bgColor: '#67127C30'
    },

    // CORES DE STATUS (mantendo as do design)
    success: {
        main: '#48bb78',                  // Verde - Concluída
        light: '#68d391',
        dark: '#38a169',
        contrastText: '#ffffff',
        bgColor: '#d1f3ca'
    },

    alert: {
        main: '#FFC222',                  // Amarela - Parada
        light: '#fae68f',
        dark: '#DC9900',
        contrastText: '#ffffff',
        bgColor: '#fff3af'
    },

    warning: {
        main: '#ec7615',                  // Laranja - Atrasada
        light: '#eea44a',
        dark: '#FC6601',
        contrastText: '#ffffff',
        bgColor: '#F0E1C4'
    },

    error: {
        main: '#f56565',                  // Vermelho - Cancelada
        light: '#fc8181',
        dark: '#e53e3e',
        contrastText: '#ffffff',
        bgColor: '#f5656530',
    },

    // CORES NEUTRAS
    grey: {
        50: '#f5f7fa',                    // Background geral
        100: '#edf2f7',
        200: '#e2e8f0',                   // Bordas
        300: '#cbd5e0',
        400: '#a0aec0',                   // Textos secundários
        500: '#718096',
        600: '#4a5568',                   // Textos normais
        700: '#2d3748',                   // Textos principais
        800: '#1a202c',
        900: '#171923',
    },

    // TEXTOS
    text: {
        primary: '#2d3748',               // Texto principal
        secondary: '#718096',             // Texto secundário
        disabled: '#a0aec0',              // Texto desabilitado
    },

    // AÇÕES (estados de interação)
    action: {
        active: 'rgba(17, 115, 212, 0.54)',
        hover: 'rgba(17, 115, 212, 0.08)',
        selected: 'rgba(17, 115, 212, 0.12)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        focus: 'rgba(17, 115, 212, 0.12)',
    },
}