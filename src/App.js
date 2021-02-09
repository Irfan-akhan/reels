import React, { useEffect, useState } from 'react';
import './App.scss';
import VideoCard from './container/VideoCard';
import db from './firebase';

function App() {
    const [reels, setReels] = useState([]);
    useEffect(() => {
        db.collection('reels').onSnapshot(snapshot => {
            setReels(
                snapshot.docs.map(doc => {
                    return doc.data();
                }),
            );
        });
    }, []);
    return (
        <div className="app">
            <header className="app__topbar">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                    alt="app logo"
                    className="app__logo"
                />
                <h1 className="app__tag">Reels</h1>
            </header>
            <section className="app__videos">
                {reels.map(({ channel, avatarSrc, likes, shares, videoUrl }) => {
                    return (
                        <VideoCard
                            channel={channel}
                            avatarSrc={avatarSrc}
                            likes={likes}
                            shares={shares}
                            videoUrl="v"
                        />
                    );
                })}
                <VideoCard
                    channel="Irfan"
                    avatarSrc="https://i.pinimg.com/originals/56/41/54/564154aacdbe7d3238df86fef9fae136.jpg"
                    likes={970}
                    shares={170}
                    videoUrl="v"
                />
                <VideoCard
                    channel="Irfan"
                    avatarSrc="https://i.pinimg.com/originals/56/41/54/564154aacdbe7d3238df86fef9fae136.jpg"
                    likes={970}
                    shares={170}
                    videoUrl="v"
                />
                <VideoCard
                    channel="Irfan"
                    avatarSrc="https://i.pinimg.com/originals/56/41/54/564154aacdbe7d3238df86fef9fae136.jpg"
                    likes={970}
                    shares={170}
                    videoUrl="v"
                />
            </section>
        </div>
    );
}

export default App;
