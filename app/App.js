import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        let text = this.props.txt;
        let cat = this.props.cat;
        return (
            <div>
            <h1>{text}</h1>
            <p>cat is: <em>{cat}</em></p>
            </div>);
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "default text",
    cat: 5
}

ReactDOM.render(
    <App txt="this is the props value" cat={10} />,
    document.getElementById('app')
);

export default App;
