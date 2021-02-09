import React, { useRef, useState } from 'react';

import myvideo from './WASM.mp4';
import './VideoItem.scss';

function VideoItem({ videoUrl }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);
    const videoClickHandler = () => {
        if (!isVideoPlaying) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        } else {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
    };
    return (
        <video
            onClick={videoClickHandler}
            className="video__player"
            loop
            alt="reel"
            ref={videoRef}
            src={myvideo}
        ></video>
    );
}

export default VideoItem;
