// Home.js
import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import AboutSection from './AboutSection';
import '../styles/Home.css';
import Image2 from '../assests/2.png';

const Home = () => {
  const [videoId, setVideoId] = useState(null);

  function playVideo(e, videoId) {
    e.preventDefault();
    setVideoId(videoId);
  }

  return (
    <div>
      <div className='title'>
        <h1>Video Player React App</h1>
        <p>Created by Rahul L</p>
      </div>

      <AboutSection />

      <div className="intro-section">
        <div className="video-intro">

          <h2>Let's Play It!</h2>
          <p>
          Dive into an unparalleled video playback adventure, where convenience meets innovation through our cutting-edge gesture controls. As you explore the captivating realm of video content, our instinctive gestures revolutionize your interaction with beloved media. Envision a seamless traverse through your video collection, all effortlessly controlled by the touch of your fingers. With the graceful simplicity of a double-tap, effortlessly leap forward or backward, amplifying your command over the playback timeline. Experience the finesse in a press and hold, allowing precise adjustment of playback speed to harmonize with your preferred tempo. Our goal is to enrich your viewing experience with adaptive technology. Envision a realm where your gestures shape the narrative, forging a harmonious connection between viewer and content. It transcends mere video playback; it's an immersive exploration of storytelling driven by your interactions. The sophistication of our gesture controls goes beyond mere convenience; it's a blend of user-centric design and cutting-edge technology. As you unravel the intricacies of our features, uncover the art of personalized engagement with your videos. Each gesture transforms into a brushstroke, creating a canvas of dynamic, responsive multimedia interaction. Join us on this expedition where innovation converges with entertainment, and each gesture adds a new dimension to your video-watching escapade. Whether you're a casual observer or a devoted cinephile, our gesture controls redefine the possibilities, bringing a fresh perspective to how you savor video content. Embrace the future of video playback – where the control is in your hands, quite literally.
</p>

        </div>

        <div className="play-video">
          {videoId && <VideoPlayer videoId={videoId} />} <br />
          <button onClick={(e) => { playVideo(e, 'cdn') }}>Play Video 1</button>
          <button onClick={(e) => { playVideo(e, 'generate-pass') }}>Play Video 2</button>
          <button onClick={(e) => { playVideo(e, 'get-post') }}>Play Video 3</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
