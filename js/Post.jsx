import React from 'react'
import { string } from "prop-types"

const Post = props => (
    <div className="post">
        <p>{props.id}</p>
        <p>{props.userId}</p>
        <p>{props.title}</p>
        <p>{props.body}</p>
    </div>
    )


Post.defaultProps = {
    title: 'N/A',
    body: 'N/A'
}

Post.propTypes = {
    id: string.isRequired,
    userId: string.isRequired,
    title: string,
    body: string

}

export default Post;