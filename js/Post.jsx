import React from 'react'
import { string, number } from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
border: 2px solid #333;
border-radius: 4px;
margin-top: 25px;
padding: 10px;
`

const Post = props => (
    <Wrapper>
        <p>{`ID: ${props.id}`}</p>
        <p>{`UserID: ${props.userId}`}</p>
        <p>{props.title}</p>
        <p>{props.body}</p>
    </Wrapper>
    )


Post.defaultProps = {
    title: 'N/A',
    body: 'N/A'
}

Post.propTypes = {
    id: number.isRequired,
    userId: number.isRequired,
    title: string,
    body: string

}

export default Post;