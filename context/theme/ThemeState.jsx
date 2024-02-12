/*===================================================================================
=   Fichero: ThemeState.js                                                           =
=   Descripción: Funciones asociadas al tema                                 =
=   Fecha: Febero 2022                                                             =
=   Dev: Daniel Fernández                                                              =
=   Versión: 1.0                                                                    =
=====================================================================================*/

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Creando el State
const ThemeState = ({ children }) => {

    const theme = createTheme({
        palette: {
            type: 'dark',
            text: {
                primary: '#515151',
            },
        },
        typography: {
            allVariants: {
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
            },
            label: {
                fontSize: '1.1rem',
                fontWeight: "500"
            },
            paragraph: {
                fontSize: '1rem',
                margin: "1rem 0",
                lineHeight: "2"
            },
        },
        components: {
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        h1: 'h2',
                        h2: 'h2',
                        h3: 'h2',
                        h4: 'h2',
                        h5: 'h2',
                        h6: 'h2',
                        paragraph: "p",
                        label: "label",
                        subtitle1: 'h2',
                        subtitle2: 'h2',
                    },
                },
            }
            // Name of the component
            /*MuiPaper: {
                styleOverrides: {
                    // Name of the slot
                    root: {
                        // Some CSS
                        color: '#ff0000',
                    },
                },
            },
            */
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1920,
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )

}
export default ThemeState;