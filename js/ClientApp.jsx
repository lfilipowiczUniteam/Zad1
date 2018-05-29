import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'

class App extends  React.Component {
    state = {
        searchTerm: "",
        data: [{
            userId: '',
            id: '',
            title: '',
            body: ''
        }]
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data.map(({userId, id, title, body}) => ({userId, id, title, body})))
        .then(data => this.setState({data: data}))
    }

    handleSearchTermChange = event => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
        <div className='app'>
            <input type="text" onChange={this.handleSearchTermChange} value={this.state.searchTerm} />
        </div>
        )
    }
}


render(<App />, document.getElementById('app'));