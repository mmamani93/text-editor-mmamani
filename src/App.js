import React, {Component} from 'react';
import TextEditor from './screens/TextEditor';
import './App.css';
import getMockText from './text.service';

class App extends Component {
    getText() {
        getMockText().then(function (result) {
            console.log(result);
        });
    }
    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <TextEditor />
                </main>
            </div>
        );
    }
}

export default App;
