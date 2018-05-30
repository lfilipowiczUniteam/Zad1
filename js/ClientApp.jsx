import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import Post from './Post'

class App extends  React.Component {
    state = {
        searchTerm: "",
        postId: 0 
        data: [{
            userId: 0,
            id: 0,
            title: '',
            body: ''
        }]
    };

    componentDidMount() {
       this.fetchData(this.state.pagination)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.postId!== this.state.postId){
            this.fetchDate(this.state.postId)
        }
    }

    fetchData(pagination){ axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data.map(({userId, id, title, body}) => ({userId, id, title, body})))
        .then(data => this.setState({data}))
               }

    handleSearchTermChange = event => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
        <div className='app'>
            <input type="text" onChange={this.handleSearchTermChange} value={this.state.searchTerm} />
            <div>
                {this.state.data.filter(post => 
                post.title.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
                .map(post => <Post key={post.id} {...post}/>)}
            </div>
        </div>
        )
    }
}


render(<App />, document.getElementById('app'));
