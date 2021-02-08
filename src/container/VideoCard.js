import React, { useRef, useState } from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import './VideoCard.scss';
import myvideo from './WASM.mp4';
import VideoFooter from './VideoFooter';

function VideoCard(props) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);
    const videoClickHandler = () => {
        console.log(videoRef.current);
        if (!isVideoPlaying) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        } else {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
    };
    return (
        <div className="VideoCard">
            <div className="VideoCard__topbar">
                <ArrowBackIosIcon />
                <CameraAltIcon />
            </div>
            <video
                onClick={videoClickHandler}
                className="VideoCard__player"
                loop
                alt="IG reeel"
                ref={videoRef}
                src={myvideo}
            ></video>
            <div className="VideoCard__footer">
                <VideoFooter />
            </div>
        </div>
    );
}

export default VideoCard;
