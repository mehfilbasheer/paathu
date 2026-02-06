import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

const ProposalSlide = () => {
    const [accepted, setAccepted] = useState(false);
    const [noCount, setNoCount] = useState(0);

    const handleYes = () => {
        setAccepted(true);
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };

    const handleNoHover = (e) => {
        const btn = e.target;
        btn.style.position = "absolute";
        btn.style.left = Math.random() * 80 + "%";
        btn.style.top = Math.random() * 80 + "%";
        setNoCount(prev => prev + 1);
    };

    if (accepted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '2rem' }}
            >
                <h1 style={{ fontSize: '4rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>
                    YAY! 💍💖
                </h1>
                <p style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>
                    You just made me the happiest person alive 🥹💘<br />
                    Let's make this Valentine's Day unforgettable.
                </p>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="slide-container"
            style={{ textAlign: 'center', maxWidth: '700px', padding: '2rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h3
                style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text-light)' }}
            >
                Paathu…
            </motion.h3>
            <motion.p style={{ fontSize: '1.2rem', marginBottom: '3rem', lineHeight: 1.6 }}>
                Every story feels incomplete without an ending.<br />
                And every ending feels wrong without you. Ith van cringe aanenn inik aryaam but , oru rasam ...
                <br />
                nee thanne parayaarund, oru yes cannot change anything, but ... sometimes this yes is means a lot dear
            </motion.p>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{
                    background: 'rgba(255, 255, 255, 0.5)',
                    padding: '2rem',
                    borderRadius: '20px',
                    boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
                }}
            >
                <h2 style={{ fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '2rem', lineHeight: 1.4 }}>
                    Will you be mine…<br />
                    and let’s make this story complete<br />
                    before this Valentine’s Day? <span style={{ color: 'red' }}>❤️</span>
                </h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center', minHeight: '100px', position: 'relative' }}>
                    <motion.button
                        onClick={handleYes}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                            background: 'var(--color-accent)',
                            color: 'white',
                            border: 'none',
                            padding: '15px 40px',
                            fontSize: '1.5rem',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            boxShadow: '0 10px 25px rgba(255, 107, 129, 0.4)',
                            zIndex: 10
                        }}
                    >
                        YES 💖
                    </motion.button>

                    <motion.button
                        onMouseEnter={handleNoHover}
                        // Fallback for mobile tap
                        onClick={handleNoHover}
                        style={{
                            background: '#f0f0f0',
                            color: '#999',
                            border: '1px solid #ddd',
                            padding: '10px 20px',
                            fontSize: '1rem',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            position: 'relative' // needed for absolute movement within container or relative
                        }}
                    >
                        Still Thinking 🤔
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProposalSlide;
