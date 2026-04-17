import React, { useState } from 'react';
import { Video } from 'lucide-react'; // Import a relevant icon

const VideoSection = () => {
  const [playingVideos, setPlayingVideos] = useState<{ [key: string]: boolean }>({});

  const handlePlayPause = (videoId: string) => {
    const videoElement = document.getElementById(videoId) as HTMLVideoElement;
    if (videoElement) {
      if (playingVideos[videoId]) {
        // Pause the video
        videoElement.pause();
        setPlayingVideos((prev) => ({ ...prev, [videoId]: false }));
      } else {
        // Play the video
        videoElement.play();
        setPlayingVideos((prev) => ({ ...prev, [videoId]: true }));
      }
    }
  };

  return (
    <div className="bg-[#f9f9f9] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading with Icon */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
          <Video className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#1434cb]" /> {/* Icon */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1434cb]">
            Our Journey of Excellence
          </h3>
        </div>

        {/* Middle Video */}
        <div className="relative w-full max-w-4xl h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg mx-auto">
          <video
            id="main-video"
            className="w-full h-full object-cover"
            src="/assets/Videos/Fine-tutors.mp4" // Replace with the actual video path
            controls={false}
          ></video>
          <button
            onClick={() => handlePlayPause('main-video')}
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-white"
          >
            {playingVideos['main-video'] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;