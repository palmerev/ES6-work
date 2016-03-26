import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super(); // sets 'this' to proper context
        this.state = {
            txt: 'state text (type something)'
        }
    }
    update(e) {
        this.setState({txt: e.target.value});
    }
    render() {
        // return (<h1>{this.props.txt}</h1>)
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)} />
                <h1>{this.state.txt}</h1>
            </div>
        );
    }
}

export default App;

// example code didn't have this, but I can't get it to render without it.
ReactDOM.render(
    <App txt="app text" />,
    document.getElementById('app')
)

// const App = () => (<h1>Hello</h1>);
