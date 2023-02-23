import React from "react"
import { createTheme, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';

type ThemeProp = {
    children: JSX.Element;
}
export enum themePalette {
    BG = '#12181b',
    LIME = '#C8FA5F',
    GLOBAL_FONT = "'JetBrains Mono',monospace"
}
const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: themePalette.BG
        },
        primary: {
            main: themePalette.LIME
        }

    },
    typography: {
        fontFamily: themePalette.GLOBAL_FONT
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {

                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '0.5em'
                }
            }
        }
    }
})
export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </ThemeProvider>
}