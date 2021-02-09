import React from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import './VideoCard.scss';
import VideoFooter from './VideoFooter';
import VideoItem from './VideoItem';

function VideoCard({ likes, shares, videoUrl, avatarSrc, channel }) {
    return (
        <div className="VideoCard">
            <div className="VideoCard__topbar">
                <ArrowBackIosIcon />
                <CameraAltIcon />
            </div>
            <VideoItem url={videoUrl} />
            <VideoFooter
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                channel={channel}
            />
        </div>
    );
}

export default VideoCard;
