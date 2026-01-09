import React, { useState, useEffect } from 'react';
import { getRarityColor } from '../../data/hagotchiSkins';

// Heart component with fill animation
const Heart = ({ fillPercent, index, isExcited }) => {
  const fill = Math.max(0, Math.min(1, fillPercent));
  const isFull = fill >= 1;
  const isEmpty = fill <= 0;

  return (
    <div
      style={{
        position: 'relative',
        width: '24px',
        height: '22px',
        marginRight: index < 2 ? '6px' : '0',
      }}
    >
      {/* Heart outline (empty) */}
      <svg
        viewBox="0 0 24 22"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="none"
          stroke={isEmpty ? '#333' : '#00ff41'}
          strokeWidth="1.5"
          style={{
            transition: 'stroke 0.3s ease',
          }}
        />
      </svg>

      {/* Heart fill (clipped) */}
      <svg
        viewBox="0 0 24 22"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          clipPath: `inset(${(1 - fill) * 100}% 0 0 0)`,
          transition: 'clip-path 0.5s ease',
        }}
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#00ff41"
          style={{
            filter: isFull ? 'drop-shadow(0 0 4px rgba(0, 255, 65, 0.6))' : 'none',
            transition: 'filter 0.3s ease',
          }}
        />
      </svg>

      {/* Pulse animation for full hearts when excited */}
      {isFull && isExcited && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            animation: 'heartPulse 1s ease-in-out infinite',
          }}
        />
      )}
    </div>
  );
};

// Coin display component
const CoinCounter = ({ coins, isMobile }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 8px',
        backgroundColor: 'rgba(255, 170, 0, 0.1)',
        border: '1px solid #333',
        borderRadius: '4px',
      }}
    >
      <span style={{ fontSize: '12px' }}>&#9679;</span>
      <span
        style={{
          fontSize: isMobile ? '12px' : '11px',
          color: '#ffaa00',
          fontWeight: 'bold',
          fontFamily: 'monospace',
        }}
      >
        {coins || 0}
      </span>
    </div>
  );
};

const HagotchiCompanion = ({
  skin,
  hearts = 0,
  coins = 0,
  isMobile,
  onTap,
  encouragementMessage,
  onDismissMessage,
}) => {
  const [animationFrame, setAnimationFrame] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  // Animation loop for idle bouncing
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Show encouragement message
  useEffect(() => {
    if (encouragementMessage) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        if (onDismissMessage) onDismissMessage();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [encouragementMessage, onDismissMessage]);

  if (!skin) return null;

  // Always bounce (no tired/dormant states)
  const bounceOffset = Math.sin(animationFrame * Math.PI / 2) * 3;

  // Excited state when close to unlock (2.5+ hearts)
  const isExcited = hearts >= 2.5;

  return (
    <div
      onClick={onTap}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobile ? '16px 12px' : '20px 16px',
        backgroundColor: 'rgba(0, 255, 65, 0.02)',
        border: '1px solid #222',
        cursor: onTap ? 'pointer' : 'default',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        transition: 'background-color 0.2s ease',
      }}
    >
      {/* Coin Counter - Top Right */}
      <div
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
        }}
      >
        <CoinCounter coins={coins} isMobile={isMobile} />
      </div>

      {/* Skin Name and Rarity */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '12px',
      }}>
        <span style={{
          fontSize: isMobile ? '12px' : '11px',
          color: '#888',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}>
          {skin.name}
        </span>
        <span style={{
          fontSize: '9px',
          color: getRarityColor(skin.rarity),
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          [{skin.rarity}]
        </span>
      </div>

      {/* Character Image */}
      <div
        style={{
          position: 'relative',
          transform: `translateY(${-bounceOffset}px)`,
          transition: 'transform 0.3s ease',
        }}
      >
        <img
          src={skin.image}
          alt={skin.name}
          style={{
            width: isMobile ? '80px' : '64px',
            height: isMobile ? '80px' : '64px',
            imageRendering: 'pixelated',
            filter: isExcited
              ? 'drop-shadow(0 0 12px rgba(0, 255, 65, 0.7))'
              : 'drop-shadow(0 0 6px rgba(0, 255, 65, 0.3))',
            transition: 'filter 0.3s ease',
          }}
        />
      </div>

      {/* Encouragement Message Bubble */}
      {showMessage && encouragementMessage && (
        <div
          style={{
            position: 'absolute',
            top: isMobile ? '100px' : '90px',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '90%',
            padding: '8px 12px',
            backgroundColor: '#0a0a0a',
            border: '1px solid #00ff41',
            borderRadius: '8px',
            animation: 'fadeInUp 0.3s ease-out',
            zIndex: 10,
          }}
        >
          <p
            style={{
              fontSize: isMobile ? '11px' : '10px',
              color: '#00ff41',
              margin: 0,
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            {encouragementMessage}
          </p>
          {/* Speech bubble pointer */}
          <div
            style={{
              position: 'absolute',
              top: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: '6px solid #00ff41',
            }}
          />
        </div>
      )}

      {/* Hearts Display */}
      <div style={{
        marginTop: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {[0, 1, 2].map(i => (
          <Heart
            key={i}
            index={i}
            fillPercent={hearts - i}
            isExcited={isExcited}
          />
        ))}
      </div>

      {/* Hearts Progress Text */}
      <div style={{
        marginTop: '8px',
        fontSize: '9px',
        color: '#666',
        letterSpacing: '0.5px',
      }}>
        {hearts.toFixed(1)} / 3.0 hearts
      </div>

      {/* Unlock Progress Hint */}
      {hearts >= 2.5 && (
        <div style={{
          marginTop: '4px',
          fontSize: '8px',
          color: '#00ff41',
          letterSpacing: '0.5px',
          animation: 'pulse 1.5s ease-in-out infinite',
        }}>
          New friend soon...
        </div>
      )}

      {/* CSS Keyframes for animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          @keyframes heartPulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.1); }
          }
        `}
      </style>
    </div>
  );
};

export default HagotchiCompanion;
