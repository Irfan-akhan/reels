import './App.scss';
import VideoCard from './container/VideoCard';

function App() {
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
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </section>
        </div>
    );
}

export default App;
