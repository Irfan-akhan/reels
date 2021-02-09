import React from 'react';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SendIcon from '@material-ui/icons/Send';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FeedbackIcon from '@material-ui/icons/Feedback';

import './VideoFooter.scss';

function VideoFooter({ likes, shares, avatarSrc, channel }) {
    return (
        <div className="VideoFooter">
            <div className="VideoFooter__text">
                <Avatar src={avatarSrc} />
                <h3>{channel} follow</h3>
            </div>
            <div className="VideoFooter__controls">
                <div className="left">
                    <SendIcon fontSize="medium" />
                    <ChatBubbleIcon fontSize="medium" />
                    <MoreHorizIcon fontSize="medium" />
                </div>
                <div className="right">
                    <div>
                        <FavoriteIcon fontSize="small" /> <span>{likes}</span>
                    </div>
                    <div>
                        <FeedbackIcon fontSize="small" />
                        <span>{shares}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoFooter;
