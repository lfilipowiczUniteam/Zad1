import React from 'react'
import { render } from 'react-dom'

class App extends  React.Component {
    state = {
        searchTerm: ""
    };

    handleSearchTermChange = event => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
        <div className="app">
            <input type="text" onChange={this.handleSearchTermChange} value={this.state.searchTerm} />
        </div>
        )
    }
}


render(<App />, document.getElementById('app'));