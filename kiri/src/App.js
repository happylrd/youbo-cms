import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header></Header>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
