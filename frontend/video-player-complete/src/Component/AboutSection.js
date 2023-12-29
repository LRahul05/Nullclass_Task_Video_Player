// AboutSection.js
import React from 'react';
import '../styles/AboutSection.css';
import Image1 from '../assests/1.png'; // Corrected import path
import '../styles/AboutSection.css'; // Updated import path

const AboutSection = () => {
  return (
    <div className="about-section">
      <img src={Image1} alt="Image 1" className='intro-image' />
      <div className="text-content">
        <h2>About the Video Player</h2>
        <p>
        <strong>Immersive Gesture Controls:</strong> Elevate your video streaming experience with our React web video player's innovative gesture-based controls. Effortlessly navigate through your favorite content with a quick double-tap to skip forward or dynamically adjust playback speed on the fly.
        </p>
        <p>
        <strong>Unprecedented User Control: </strong>Take charge of your viewing experience like never before. Our video player provides unparalleled control, offering intuitive shortcuts and dynamic adjustments at your fingertips. Seamlessly blend ease of use with cutting-edge features through our user-friendly interface.
        </p>
        <p>
        <strong>Personalized Enjoyment: </strong>Immerse yourself in a world of possibilities where every interaction is designed to enhance your enjoyment. From intuitive shortcuts to dynamic adjustments, our video player is your gateway to a personalized and enjoyable viewing experience. Redefine the way you engage with your favorite videos.






        </p>
      </div>
    </div>
  );
}

export default AboutSection;
