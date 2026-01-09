import React, { useState, useEffect } from 'react';
import { getSkinById, getRarityColor, SKINS, selectRandomStarter } from '../../data/hagotchiSkins';
import { hapticSuccess, hapticHeavy, hapticMedium } from '../../services/haptics';

const Onboarding = ({
  isOpen,
  onComplete,
  createSpirit,
  isMobile
}) => {
  const [step, setStep] = useState(0);
  const [starterSkin, setStarterSkin] = useState(null);
  const [customName, setCustomName] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);
  const [spinIndex, setSpinIndex] = useState(0);
  const [spinSpeed, setSpinSpeed] = useState(50);

  // Select starter on mount
  useEffect(() => {
    if (isOpen && !starterSkin) {
      setStarterSkin(selectRandomStarter());
    }
  }, [isOpen, starterSkin]);

  // Spin animation for blind box
  useEffect(() => {
    if (step !== 1 || !isRevealing) return;

    const spinTimer = setTimeout(() => {
      setSpinIndex(prev => (prev + 1) % SKINS.length);

      setSpinSpeed(prev => {
        const newSpeed = prev * 1.1;
        if (newSpeed > 400) {
          // Stop and show the actual starter
          setIsRevealing(false);
          hapticSuccess();
          setTimeout(() => setStep(2), 500);
          return prev;
        }
        return newSpeed;
      });
    }, spinSpeed);

    return () => clearTimeout(spinTimer);
  }, [step, isRevealing, spinIndex, spinSpeed]);

  const handleDiscover = () => {
    setIsRevealing(true);
    setSpinIndex(0);
    setSpinSpeed(50);
    hapticHeavy();
    setStep(1);
  };

  const handleContinueFromReveal = () => {
    hapticMedium();
    setStep(3);
  };

  const handleContinueFromExplanation = () => {
    hapticMedium();
    setStep(4);
  };

  const handleContinueFromCollection = () => {
    hapticMedium();
    setStep(5);
  };

  const handleSkipNaming = async () => {
    await finishOnboarding(starterSkin.name);
  };

  const handleSaveName = async () => {
    const finalName = customName.trim() || starterSkin.name;
    await finishOnboarding(finalName);
  };

  const finishOnboarding = async () => {
    if (!starterSkin) return;

    // Create spirit in database
    await createSpirit(starterSkin.id);

    hapticSuccess();
    onComplete();
  };

  if (!isOpen || !starterSkin) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#0a0a0a',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflow: 'auto',
      }}
    >
      {/* Step 0: Welcome */}
      {step === 0 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-out',
        }}>
          <h1 style={{
            fontSize: isMobile ? '24px' : '20px',
            color: '#00ff41',
            marginBottom: '16px',
            fontWeight: 'normal',
            letterSpacing: '2px',
          }}>
            Welcome to Hagotchi
          </h1>
          <p style={{
            fontSize: isMobile ? '14px' : '12px',
            color: '#888',
            marginBottom: '40px',
            lineHeight: 1.6,
            maxWidth: '280px',
          }}>
            A companion for your habit journey is waiting to be discovered...
          </p>

          {/* Mystery Box */}
          <div style={{
            width: '120px',
            height: '120px',
            backgroundColor: '#1a1a1a',
            border: '2px solid #00ff41',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            boxShadow: '0 0 30px rgba(0, 255, 65, 0.2)',
            animation: 'pulse 2s ease-in-out infinite',
          }}>
            <span style={{
              fontSize: '48px',
              color: '#00ff41',
            }}>
              ?
            </span>
          </div>

          <button
            onClick={handleDiscover}
            style={{
              padding: '16px 32px',
              backgroundColor: '#00ff41',
              border: 'none',
              color: '#000',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: isMobile ? '14px' : '12px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Discover Your Hagotchi
          </button>
        </div>
      )}

      {/* Step 1: Blind Box Spin */}
      {step === 1 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <div style={{
            fontSize: isMobile ? '14px' : '12px',
            color: '#00ff41',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            Discovering...
          </div>

          <div style={{
            width: '120px',
            height: '120px',
            backgroundColor: '#1a1a1a',
            border: '2px solid #333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'shake 0.1s linear infinite',
          }}>
            <span style={{
              fontSize: '48px',
              color: '#444',
            }}>
              ?
            </span>
          </div>
        </div>
      )}

      {/* Step 2: Reveal */}
      {step === 2 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-out',
        }}>
          <div style={{
            fontSize: isMobile ? '14px' : '12px',
            color: '#00ff41',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '24px',
            animation: 'pulse 1s ease-in-out infinite',
          }}>
            You found {starterSkin.name}!
          </div>

          <div style={{
            padding: '24px',
            backgroundColor: 'rgba(0, 255, 65, 0.02)',
            border: `2px solid ${getRarityColor(starterSkin.rarity)}`,
            boxShadow: `0 0 30px ${getRarityColor(starterSkin.rarity)}40`,
            marginBottom: '24px',
          }}>
            <img
              src={starterSkin.image}
              alt={starterSkin.name}
              style={{
                width: isMobile ? '96px' : '80px',
                height: isMobile ? '96px' : '80px',
                imageRendering: 'pixelated',
                filter: 'drop-shadow(0 0 12px rgba(0, 255, 65, 0.6))',
                animation: 'bounceIn 0.5s ease-out',
              }}
            />
          </div>

          <div style={{
            fontSize: '10px',
            color: getRarityColor(starterSkin.rarity),
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}>
            [{starterSkin.rarity}]
          </div>

          <div style={{
            maxWidth: '280px',
            padding: '16px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid #333',
            marginBottom: '32px',
          }}>
            <p style={{
              fontSize: isMobile ? '12px' : '11px',
              color: '#888',
              lineHeight: 1.6,
              margin: 0,
              fontStyle: 'italic',
            }}>
              "{starterSkin.loreText}"
            </p>
          </div>

          <button
            onClick={handleContinueFromReveal}
            style={{
              padding: '14px 28px',
              backgroundColor: '#00ff41',
              border: 'none',
              color: '#000',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: isMobile ? '12px' : '11px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Hello, Friend
          </button>
        </div>
      )}

      {/* Step 3: Hearts Explanation */}
      {step === 3 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-out',
        }}>
          <h2 style={{
            fontSize: isMobile ? '18px' : '16px',
            color: '#00ff41',
            marginBottom: '16px',
            fontWeight: 'normal',
            letterSpacing: '1px',
          }}>
            You'll Grow Together
          </h2>

          <p style={{
            fontSize: isMobile ? '13px' : '12px',
            color: '#888',
            marginBottom: '32px',
            lineHeight: 1.6,
            maxWidth: '280px',
          }}>
            Complete your habits to fill hearts. Fill all 3 hearts to discover your next Hagotchi.
          </p>

          {/* Hearts illustration */}
          <div style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '32px',
          }}>
            {[0, 1, 2].map(i => (
              <svg
                key={i}
                viewBox="0 0 24 22"
                style={{
                  width: '32px',
                  height: '30px',
                }}
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill={i === 0 ? '#00ff41' : 'none'}
                  stroke="#00ff41"
                  strokeWidth="1.5"
                  style={{
                    filter: i === 0 ? 'drop-shadow(0 0 4px rgba(0, 255, 65, 0.6))' : 'none',
                  }}
                />
              </svg>
            ))}
          </div>

          <div style={{
            fontSize: '10px',
            color: '#666',
            marginBottom: '32px',
          }}>
            100% daily habits = 1 heart
          </div>

          <button
            onClick={handleContinueFromExplanation}
            style={{
              padding: '14px 28px',
              backgroundColor: '#00ff41',
              border: 'none',
              color: '#000',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: isMobile ? '12px' : '11px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Continue
          </button>
        </div>
      )}

      {/* Step 4: Collection Tease */}
      {step === 4 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-out',
        }}>
          <h2 style={{
            fontSize: isMobile ? '18px' : '16px',
            color: '#00ff41',
            marginBottom: '16px',
            fontWeight: 'normal',
            letterSpacing: '1px',
          }}>
            {SKINS.length} to Discover
          </h2>

          <p style={{
            fontSize: isMobile ? '13px' : '12px',
            color: '#888',
            marginBottom: '24px',
            lineHeight: 1.6,
            maxWidth: '280px',
          }}>
            Each one is a mystery until you find them.
          </p>

          {/* Collection grid preview */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '8px',
            marginBottom: '32px',
          }}>
            {SKINS.slice(0, 15).map((skin, i) => (
              <div
                key={skin.id}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: skin.id === starterSkin.id ? 'rgba(0, 255, 65, 0.1)' : '#1a1a1a',
                  border: `1px solid ${skin.id === starterSkin.id ? '#00ff41' : '#333'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {skin.id === starterSkin.id ? (
                  <img
                    src={starterSkin.image}
                    alt={starterSkin.name}
                    style={{
                      width: '32px',
                      height: '32px',
                      imageRendering: 'pixelated',
                    }}
                  />
                ) : (
                  <span style={{ color: '#333', fontSize: '16px' }}>?</span>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleContinueFromCollection}
            style={{
              padding: '14px 28px',
              backgroundColor: '#00ff41',
              border: 'none',
              color: '#000',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: isMobile ? '12px' : '11px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Can't Wait
          </button>
        </div>
      )}

      {/* Step 5: Optional Naming */}
      {step === 5 && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease-out',
        }}>
          <img
            src={starterSkin.image}
            alt={starterSkin.name}
            style={{
              width: isMobile ? '80px' : '64px',
              height: isMobile ? '80px' : '64px',
              imageRendering: 'pixelated',
              marginBottom: '24px',
              animation: 'bounce 1s ease-in-out infinite',
            }}
          />

          <h2 style={{
            fontSize: isMobile ? '18px' : '16px',
            color: '#00ff41',
            marginBottom: '8px',
            fontWeight: 'normal',
            letterSpacing: '1px',
          }}>
            Give them a name?
          </h2>

          <p style={{
            fontSize: isMobile ? '12px' : '11px',
            color: '#666',
            marginBottom: '24px',
          }}>
            Or keep their original name—it's up to you.
          </p>

          <input
            type="text"
            value={customName}
            onChange={(e) => setCustomName(e.target.value.slice(0, 20))}
            placeholder={starterSkin.name}
            maxLength={20}
            autoFocus={!isMobile}
            style={{
              width: '200px',
              padding: '12px 16px',
              backgroundColor: '#0a0a0a',
              border: '1px solid #333',
              color: '#fff',
              fontSize: isMobile ? '14px' : '12px',
              fontFamily: 'inherit',
              textAlign: 'center',
              outline: 'none',
              marginBottom: '24px',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#00ff41';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#333';
            }}
          />

          <div style={{
            display: 'flex',
            gap: '12px',
          }}>
            <button
              onClick={handleSaveName}
              style={{
                padding: '14px 24px',
                backgroundColor: '#00ff41',
                border: 'none',
                color: '#000',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: isMobile ? '12px' : '11px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {customName.trim() ? 'Save Name' : 'Keep Original'}
            </button>
          </div>
        </div>
      )}

      {/* CSS Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 30px rgba(0, 255, 65, 0.2); }
            50% { opacity: 0.8; box-shadow: 0 0 50px rgba(0, 255, 65, 0.4); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-3px); }
            75% { transform: translateX(3px); }
          }
          @keyframes bounceIn {
            0% { transform: scale(0.5); opacity: 0; }
            60% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}
      </style>
    </div>
  );
};

export default Onboarding;
