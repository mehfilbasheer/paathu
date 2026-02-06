import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Flower } from 'lucide-react';

const OpeningSlide = ({ onNext }) => {
    return (
        <motion.div
            className="slide-container"
            style={{
                textAlign: 'center',
                maxWidth: '600px',
                padding: '2rem',
                zIndex: 1,
                position: 'relative',
                color: 'var(--color-text-main)' // Default color, might need adjustment based on bg
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1 }}
        >
            {/* Background Image Container */}
            <div style={{
                position: 'fixed', // Fixed to cover the whole screen for this slide
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}>
                <img
                    src="/images/opening-bg.jpeg" // User needs to add this file
                    alt="Background"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Overlay for readability - Warm/Romantic overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,240,245,0.85) 100%)'
                }} />
            </div>

            {/* Decorative Elements */}
            <motion.div
                style={{ position: 'absolute', top: '-20px', left: '-20px', color: 'var(--color-primary)', opacity: 0.8 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Flower size={60} />
            </motion.div>
            <motion.div
                style={{ position: 'absolute', bottom: '20px', right: '-20px', color: 'var(--color-primary)', opacity: 0.8 }}
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Flower size={50} />
            </motion.div>

            {/* Photo Placeholders for Opening */}



            <motion.h1
                style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    color: 'var(--color-accent)',
                    marginBottom: '1rem',
                    textShadow: '0 4px 10px rgba(255, 255, 255, 0.8)' // Increased shadow for contrast
                }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Hey Paathu <span style={{ fontSize: '0.8em' }}>💖</span>
            </motion.h1>

            <motion.p
                style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    color: '#5d4037', // Ensuring dark text for contrast
                    marginBottom: '3rem',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                It’s been 3 beautiful years since you walked into my life.<br />
                Through every smile, every silence, every small moment —<br />
                you were there.<br />
                This is just a small way to say… <strong>thank you for being you.</strong>
            </motion.p>

            <motion.button
                onClick={onNext}
                style={{
                    background: 'var(--color-accent)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: 'var(--shadow-hover)'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 3, duration: 0.5 }}
            >
                Next <Heart size={16} fill="currentColor" />
            </motion.button>
        </motion.div>
    );
};

export default OpeningSlide;
