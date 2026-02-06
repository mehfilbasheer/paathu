import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const TimelineEvent = ({ align, children, delay }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: align === 'left' ? 'row' : 'row-reverse',
            alignItems: 'center',
            width: '100%',
            marginBottom: '4rem',
            position: 'relative'
        }}>
            {/* Content Side */}
            <motion.div
                style={{
                    width: '45%',
                    padding: '20px',
                    textAlign: align === 'left' ? 'right' : 'left',
                }}
                initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay }}
            >
                {children}
            </motion.div>

            {/* Center Line Marker */}
            <div style={{
                width: '10%',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <motion.div
                    style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'var(--color-accent)',
                        boxShadow: '0 0 10px var(--color-accent)',
                        zIndex: 2
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.2, type: 'spring' }}
                />
            </div>

            {/* Balancing Empty Side */}
            <div style={{ width: '45%' }} />
        </div>
    );
};

const PhotoFrame = ({ label, rotate }) => (
    <div style={{
        background: 'white',
        padding: '10px 10px 40px 10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transform: `rotate(${rotate}deg)`,
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        display: 'inline-block',
        maxWidth: '100%'
    }}
        className="photo-frame-hover"
    >
        <div style={{
            width: '200px',
            height: '200px', // Square aspect ratio for Insta vibe
            background: '#eee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#aaa',
            overflow: 'hidden',
            marginBottom: '10px'
        }}>
            {/* Placeholder Text or Image */}
            {label || "Photo"}
        </div>
    </div>
);

const StorySlide = ({ onNext }) => {
    return (
        <motion.div
            className="slide-container"
            style={{
                width: '100%',
                maxWidth: '900px',
                height: '90vh',
                overflowY: 'auto',
                padding: '2rem 1rem',
                scrollbarWidth: 'none',
                position: 'relative',
                color: 'var(--color-text-main)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Shared Background Image */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1
            }}>
                <img
                    src="/images/opening-bg.jpeg"
                    alt="Background"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Overlay for readability */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(255,240,245,0.9) 100%)'
                }} />
            </div>

            <motion.h2
                style={{
                    textAlign: 'center',
                    fontSize: '3rem',
                    color: 'var(--color-accent)',
                    marginBottom: '4rem',
                    fontFamily: 'var(--font-heading)'
                }}
            >
                Our Journey <span style={{ fontSize: '0.6em' }}>✨</span>
            </motion.h2>

            {/* Vertical Line */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '150px',
                bottom: '100px',
                width: '2px',
                background: 'linear-gradient(to bottom, transparent, var(--color-primary), transparent)',
                transform: 'translateX(-50%)',
                zIndex: 0
            }} />

            {/* 1. Snapchat */}
            <TimelineEvent align="left" delay={0.1}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/1200px-Snapchat_logo.svg.png"
                        alt="Snapchat"
                        style={{ width: '50px', marginBottom: '1rem' }}
                    />
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>It Started with a 'Hi'</h3>
                    <p style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
                        I don't remember the date, but I remember the feeling. Just a simple notification that changed everything.
                    </p>
                </div>
            </TimelineEvent>

            {/* 2. You Replied (First Photo) */}
            <TimelineEvent align="right" delay={0.2}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    {/* User: "second one [Blue Dress] is first pic" */}
                    <div className="photo-frame-hover" style={{
                        background: 'white',
                        padding: '10px 10px 40px 10px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        transform: 'rotate(3deg)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer',
                        display: 'inline-block'
                    }}>
                        <img
                            src="/images/story-blue-dress.jpeg"
                            alt="Her First Pic"
                            style={{ width: '200px', height: '250px', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ marginTop: '1rem', color: 'var(--color-text-main)', fontSize: '1.1rem' }}>
                        "You replied. And my happy days began. <br />
                        <span style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-accent)' }}>
                            Not love at first sight, but something... really nice.
                        </span>"
                    </p>
                </div>
            </TimelineEvent>

            {/* 3. Another Question (Second Photo) */}
            <TimelineEvent align="left" delay={0.3}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    {/* User: "first [Collage] is second pic" */}
                    <div className="photo-frame-hover" style={{
                        background: 'white',
                        padding: '10px 10px 40px 10px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        transform: 'rotate(-2deg)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer',
                        display: 'inline-block'
                    }}>
                        <img
                            src="/images/her second image.jpeg"
                            alt="Her Second Pic"
                            style={{ width: '200px', height: '250px', objectFit: 'cover' }}
                        />
                    </div>
                    <p style={{ marginTop: '1rem', color: 'var(--color-text-main)' }}>
                        Then I asked another question.<br />
                        You sent this.<br />
                        And suddenly, we were endless.
                    </p>
                </div>
            </TimelineEvent>

            {/* 4. The Meeting (2 Pics) */}
            <TimelineEvent align="right" delay={0.4}>
                <div>
                    <h3 style={{ fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Then We Met...</h3>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                        Words fail me here. Just magic.
                    </p>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        {/* Meeting Pic 1 */}
                        <div className="photo-frame-hover" style={{
                            background: 'white',
                            padding: '10px 10px 35px 10px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            transform: 'rotate(-5deg)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            display: 'inline-block'
                        }}>
                            <img
                                src="/images/meet1.jpeg"
                                alt="Meeting 1"
                                style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                            />
                        </div>
                        {/* Meeting Pic 2 */}
                        <div className="photo-frame-hover" style={{
                            background: 'white',
                            padding: '10px 10px 35px 10px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            transform: 'rotate(5deg)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            display: 'inline-block'
                        }}>
                            <img
                                src="/images/meet2.jpeg"
                                alt="Meeting 2"
                                style={{ width: '180px', height: '180px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </TimelineEvent>

            {/* 5. Snaps & Memories (Scattered Wall) */}
            <div style={{ margin: '6rem 0', position: 'relative' }}>
                <h3 style={{
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '3rem'
                }}>
                    Little Moments, Big Love 📸
                </h3>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    maxWidth: '100%'
                }}>
                    {[
                        "IMG_2197.JPG", "IMG_2281.JPG.jpeg", "IMG_2282.JPG.jpeg",
                        "IMG_2283.JPG.jpeg", "IMG_2284.JPG.jpeg", "IMG_2285.PNG",
                        "IMG_9703.JPG", "new11.jpg", "new111.jpg", "new3323.jpg",
                        "sdkajd.jpeg"
                    ].map((img, index) => {
                        // Generate random rotation between -10 and 10
                        const rotate = Math.random() * 20 - 10;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="photo-frame-hover"
                                style={{
                                    background: 'white',
                                    padding: '8px 8px 30px 8px',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                    transform: `rotate(${rotate}deg)`,
                                    width: '140px', // Smaller size for collage
                                    zIndex: 1
                                }}
                            >
                                <img
                                    src={`/images/snaps/${img}`}
                                    alt="Memory"
                                    style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                                />
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* 6. The Journey Summary (Text Block) */}
            <motion.div
                style={{
                    textAlign: 'center',
                    marginTop: '5rem',
                    marginBottom: '4rem',
                    padding: '2rem',
                    background: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: '20px',
                    boxShadow: 'var(--shadow-soft)',
                    backdropFilter: 'blur(5px)',
                    maxWidth: '80%',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.8',
                    color: 'var(--color-text-main)',
                    fontStyle: 'italic'
                }}>
                    "From <b>endless talks</b> that lasted till sunrise, to the <b>little fights</b> that only brought us closer.<br />
                    From the millions of <b>snaps</b> we shared, to the moments of <b>anger</b> that melted into love.<br />
                    <br />
                    It hasn't always been perfect, but it has always been <b>us</b>.<br />
                    Every up, every down, just made this journey worth it."
                </p>
            </motion.div>

            <motion.div
                style={{ textAlign: 'center', marginTop: '2rem', paddingBottom: '2rem' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <button
                    onClick={onNext}
                    style={{
                        background: 'var(--color-accent)',
                        color: 'white',
                        border: 'none',
                        padding: '15px 40px',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        boxShadow: 'var(--shadow-hover)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: '0 auto'
                    }}
                >
                    Continue <Heart size={20} fill="currentColor" />
                </button>
            </motion.div>
        </motion.div >
    );
};

export default StorySlide;
