import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = ({ isPlaying, onToggle }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 50,
            }}
        >
            <audio ref={audioRef} loop src="/mayanadhi_bgm.mp3" /> {/* Specific song request */}

            <button
                onClick={onToggle}
                style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid var(--color-primary)',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-soft)',
                    color: 'var(--color-accent)'
                }}
            >
                {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
        </motion.div>
    );
};

export default MusicPlayer;
