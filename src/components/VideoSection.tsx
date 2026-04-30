import React, { useState } from 'react';
import { Video, Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [playingVideos, setPlayingVideos] = useState<{ [key: string]: boolean }>({});

  const handlePlayPause = (videoId: string) => {
    const videoElement = document.getElementById(videoId) as HTMLVideoElement;
    if (videoElement) {
      if (playingVideos[videoId]) {
        videoElement.pause();
        setPlayingVideos((prev) => ({ ...prev, [videoId]: false }));
      } else {
        videoElement.play();
        setPlayingVideos((prev) => ({ ...prev, [videoId]: true }));
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with Icon */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-4 flex-wrap">
            <div className="p-2 sm:p-3 bg-[#1434cb] rounded-xl shadow-lg">
              <Video className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1434cb]">
              Our Journey of Excellence
            </h3>
          </div>
          <div className="w-24 h-1 bg-[#019fe3] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Watch our success stories and see how we transform students' learning experiences
          </p>
        </div>

        {/* Video Player */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <video
              id="main-video"
              className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-cover bg-gray-900"
              src="/assets/Videos/Fine-tutors.mp4"
              poster="/assets/images/hero-banner.jpg"
              controls={false}
              preload="metadata"
            ></video>
            
            {/* Thumbnail Overlay (shows when not playing) */}
            {!playingVideos['main-video'] && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30">
                {/* Thumbnail Image */}
                <img 
                  src="/assets/images/11.jpg" 
                  alt="Fine Learning Video Thumbnail" 
                  className="w-full h-full object-cover"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                
                {/* Play Button */}
                <button
                  onClick={() => handlePlayPause('main-video')}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                  aria-label="Play video"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#1434cb] rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                    <div className="relative bg-white rounded-full p-4 sm:p-6 md:p-8 shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                      <Play className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 text-[#1434cb] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </button>

                {/* Thumbnail Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="px-4 py-1.5 bg-red-600 rounded-md text-white text-sm font-bold">
                      VIDEO
                    </div>
                    <div className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-md text-white text-sm font-semibold">
                      Success Stories
                    </div>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Fine Learning Success Stories
                  </h4>
                  <p className="text-sm sm:text-base text-white/90">
                    Discover how our students achieve excellence
                  </p>
                </div>
              </div>
            )}

            {/* Pause Button (when playing) */}
            {playingVideos['main-video'] && (
              <>
                <button
                  onClick={() => handlePlayPause('main-video')}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-lg transform hover:scale-110 transition-all duration-300"
                  aria-label="Pause video"
                >
                  <Pause className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" />
                </button>

                {/* Video Info Overlay (bottom) - when playing */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-8 text-white">
                  <h4 className="text-lg sm:text-xl font-bold mb-2">Fine Learning Success Stories</h4>
                  <p className="text-sm sm:text-base text-white/90">Discover how our students achieve excellence</p>
                </div>
              </>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#1434cb]/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#019fe3]/20 rounded-full blur-2xl"></div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Join thousands of successful students who have transformed their academic journey with Fine Learning
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-[#1434cb] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#0f2ca1] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Learn More About Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;