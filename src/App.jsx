import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';
import MusicPlayer from './components/MusicPlayer';
import OpeningSlide from './slides/OpeningSlide';
import StorySlide from './slides/StorySlide';
import ProposalSlide from './slides/ProposalSlide';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const nextSlide = () => {
    if (currentSlide === 0) {
      setIsMusicPlaying(true); // Auto-play music after opening slide
    }
    setCurrentSlide((prev) => prev + 1);
  };

  const slides = [
    <OpeningSlide onNext={nextSlide} />,
    <StorySlide onNext={nextSlide} />,
    <ProposalSlide />
  ];

  return (
    <div className="app-container" style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Background />
      <MusicPlayer isPlaying={isMusicPlaying} onToggle={() => setIsMusicPlaying(!isMusicPlaying)} />

      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
