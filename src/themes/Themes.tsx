import { createTheme } from '@mui/material'
import { ptBR as coreptBR } from '@mui/material/locale'
import { typography } from './config/typography'
import { breakpoints } from './config/breakpoints'
import { TypeBreakpoints } from './types/TypeBreakpoints';
import { TypeTypography } from './types/TypeTypography';
import { palette } from './config/pallete';
import { TypePalette } from './types/TypePalette';
import { TypeMicroInteractions } from './types/TypeMicroInteractions';
import { microInteractions } from './config/microInteraction';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    dataDisplay: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides extends TypeBreakpoints { }
  interface TypographyVariants extends TypeTypography { }

  interface Palette extends TypePalette { }
  interface PaletteColor { bgColor?: string }
  interface SimplePaletteColorOptions { bgColor?: string }
  interface Theme { microInteractions: TypeMicroInteractions }
  interface ThemeOptions { microInteractions?: TypeMicroInteractions }
}

export const theme = createTheme(
  {
    breakpoints: breakpoints,
    direction: 'ltr',
    typography: typography,

    microInteractions: microInteractions,

    // PALETA DE CORES
    palette: palette
  },
  coreptBR,
)
