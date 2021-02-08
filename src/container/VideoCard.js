import React from 'react';
import './VideoCard.scss';
import VideoItem from './VideoItem';

function VideoCard(props) {
    return (
        <div className="VideoCard">
            <iframe
                className="VideoCard__player"
                title="vid"
                frameBorder="0"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
        </div>
    );
}

export default VideoCard;
