import React from 'react';
import Post from './post';


export default class NewsFeed extends React.Component {
    render() {
       let comments = [
        {
            content: 'First comment',
            userName: 'Billy',
            date: '4/23/23'
        },
        {
            content: 'Second comment',
            userName: 'Mark',
            date: '4/1/23'
        },
        {
            content: 'Third comment',
            userName: 'Billy',
            date: '6/13/23'
        }
    ];
        return(
            <div className='container'>
                <Post {...{comments: comments, content: 'This is my post content'}} />
                <Post />
            </div>
        )
    }
}