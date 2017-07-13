import React from 'react'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import cyan from 'material-ui/colors/cyan';
import grey from 'material-ui/colors/grey';
import red from 'material-ui/colors/red';

import MainFrame from './views/MainFrame';

const theme = createMuiTheme({
    palette: createPalette({
        primary:cyan,// Purple and green play nicely together.
        accent: {
            ...grey
        },
        error: red
    })
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MainFrame/>
            </MuiThemeProvider>
        )
    }
}

export default App
