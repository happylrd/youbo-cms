import React, {Component} from 'react';
import logo from './common/image/logo.png';

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={logo} alt="logo"/>
            </div>
        );
    }
}

export default App;
