import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';

export default class Comment extends React.Component {
    render() {
        return (
            <div className='card w-75'>
                <div className='card-header bg-success text-white'>
                    {this.props.userName} {this.props.date}
                </div>
                <div className='card-body'>
                    {this.props.content}
                </div>
                <div className='card-footer'>
                    <LikeButton />
                    <ReplyButton />
                    
                </div>
            </div>
        )

    }
}