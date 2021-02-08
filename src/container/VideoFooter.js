import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SendIcon from '@material-ui/icons/Send';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FeedbackIcon from '@material-ui/icons/Feedback';

import './VideoFooter.scss';

function VideoFooter() {
    return (
        <div className="VideoFooter">
            <div className="VideoFooter__text">
                <Avatar src="https://i.pinimg.com/originals/56/41/54/564154aacdbe7d3238df86fef9fae136.jpg" />
                <h3>clever follow</h3>
            </div>
            <div className="VideoFooter__controls">
                <div className="left">
                    <SendIcon fontSize="medium" />
                    <ChatBubbleIcon fontSize="medium" />
                    <MoreHorizIcon fontSize="medium" />
                </div>
                <div className="right">
                    <FavoriteIcon fontSize="medium" /> <span>100</span>
                    <FeedbackIcon fontSize="medium" />
                    200
                </div>
            </div>
        </div>
    );
}

export default VideoFooter;
