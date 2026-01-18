'use client'

// AI Valuation Camera Screen
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { theme, withOpacity } from '@/lib/theme';
import { Icon, Badge, ProgressBar, PageContainer } from '@/components/ui';

const CameraScreen: React.FC = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  // UPDATED: New Order and Split Interior
  const steps = [
    { 
      name: 'Front', 
      description: 'Front view of the vehicle', 
      image: '/capture-car/front-view.jpg' 
    },
    { 
      name: 'Rear', 
      description: 'Back view with license plate', 
      image: '/capture-car/rear-view.jpg' 
    },
    { 
      name: 'Left Side', 
      description: 'Left side profile', 
      image: '/capture-car/left-view.jpg' 
    },
    { 
      name: 'Right Side', 
      description: 'Right side profile', 
      image: '/capture-car/right-view.jpg' 
    },
    { 
      name: 'Engine', 
      description: 'Engine compartment view', 
      image: '/capture-car/engine-view.jpg'
    },
    { 
      name: 'Boot', 
      description: 'Open boot / trunk view', 
      image: '/capture-car/trunk-view.jpg' 
    },
    { 
      name: 'Int. Front', 
      description: 'Dashboard and front seats', 
      image: '/capture-car/interior-view-front.jpg' 
    },
    { 
      name: 'Int. Rear', 
      description: 'Rear seats and legroom', 
      image: '/capture-car/interior-view-rear.jpg' 
    },
  ];

  const handleCapture = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      router.push('/valuation');
    }
  };

  const currentProgress = Math.round(((currentStep + 1) / steps.length) * 100);

  return (
    <PageContainer style={{ backgroundColor: theme.colors.black, overflow: 'hidden' }}>
      
      {/* --- 1. Camera Background --- */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("${steps[currentStep].image}")`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        opacity: 0.9,
        transition: 'background-image 0.5s ease-in-out',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent, rgba(0,0,0,0.6))',
        }} />
      </div>

      {/* --- 2. Top Bar (Close Button) --- */}
      <div style={{
        position: 'relative',
        zIndex: 30,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: theme.spacing.md,
      }}>
        <button
          onClick={() => router.push('/home')}
          style={{
            width: 40,
            height: 40,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity('#000', 0.2),
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.colors.textLight,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Icon name="close" size={24} />
        </button>

        {/* Step Counter Badge */}
        <div style={{
          padding: '4px 12px',
          borderRadius: theme.borderRadius.full,
          backgroundColor: withOpacity('#000', 0.2),
          backdropFilter: 'blur(12px)',
          border: `1px solid ${withOpacity('#fff', 0.1)}`,
        }}>
          <span style={{
            color: theme.colors.textLight,
            fontSize: theme.fontSizes.xs,
            fontWeight: theme.fontWeights.semibold,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}>
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>

        {/* Flash Button */}
        <button
          style={{
            width: 40,
            height: 40,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity('#000', 0.2),
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.colors.textLight,
          }}
        >
          <Icon name="flash_on" size={24} />
        </button>
      </div>

      {/* --- 3. Top Info Wrapper (Instruction + AI Card) --- */}
      <div style={{
        position: 'absolute',
        top: '110px', 
        left: 0,
        right: 0,
        zIndex: 25,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing.sm,
        pointerEvents: 'none', 
      }}>
        
        {/* Instruction Card */}
        <div style={{
          padding: '12px 20px',
          borderRadius: theme.borderRadius['2xl'],
          backgroundColor: withOpacity('#000', 0.6),
          backdropFilter: 'blur(24px)',
          border: `1px solid ${withOpacity('#fff', 0.1)}`,
          pointerEvents: 'auto',
          textAlign: 'center',
        }}>
          <h2 style={{
            color: theme.colors.textLight,
            fontSize: theme.fontSizes.lg,
            fontWeight: theme.fontWeights.bold,
            marginBottom: 4,
          }}>
            {steps[currentStep].name}
          </h2>
          <p style={{
            color: theme.colors.textLight,
            fontSize: theme.fontSizes.sm,
          }}>
            {steps[currentStep].description}
          </p>
        </div>

        {/* AI Status Card */}
        <div style={{
          backgroundColor: withOpacity('#000', 0.6),
          backdropFilter: 'blur(24px)',
          borderRadius: theme.borderRadius.xl,
          padding: '12px',
          boxShadow: theme.shadows.xl,
          width: '90%',
          maxWidth: 320,
          pointerEvents: 'auto',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name="sync" size={16} color={theme.colors.textLight} className="animate-spin" />
              <span style={{ 
                fontSize: theme.fontSizes.xs, 
                fontWeight: theme.fontWeights.bold,
                color: theme.colors.textLight,
              }}>
                Analyzing...
              </span>
            </div>
            <Badge variant="primary" size="sm" style={{ fontSize: 10, color: theme.colors.textLight }}>AI Active</Badge>
          </div>
          
          <ProgressBar progress={currentProgress} height={6} />
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 4,
          }}>
            <span style={{ fontSize: 9, color: theme.colors.textLight }}>
              Detecting dents...
            </span>
            <span style={{ fontSize: 9, color: theme.colors.textLight }}>
              {currentProgress}%
            </span>
          </div>
        </div>
      </div>

      {/* --- 4. Center Camera Frame --- */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: 340,
          aspectRatio: '4/3',
        }}>
          {/* Border */}
          <div style={{
            position: 'absolute',
            inset: 0,
            border: `2px solid ${withOpacity('#fff', 0.3)}`,
            borderRadius: theme.borderRadius['2xl'],
          }} />
          
          {/* Corner Markers */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => {
            const markerOffset = 10;
            return (
              <div
                key={corner}
                style={{
                  position: 'absolute',
                  width: 32,
                  height: 32,
                  ...(corner.includes('top') ? { top: markerOffset } : { bottom: markerOffset }),
                  ...(corner.includes('left') ? { left: markerOffset } : { right: markerOffset }),
                  borderColor: theme.colors.primary,
                  borderStyle: 'solid',
                  borderWidth: 
                    corner === 'top-left'     ? '4px 0 0 4px' :
                    corner === 'top-right'    ? '4px 4px 0 0' : 
                    corner === 'bottom-left'  ? '0 0 4px 4px' :
                    '0 4px 4px 0', 
                  borderTopLeftRadius:     corner === 'top-left' ? theme.borderRadius.xl : 0,
                  borderTopRightRadius:    corner === 'top-right' ? theme.borderRadius.xl : 0,
                  borderBottomLeftRadius:  corner === 'bottom-left' ? theme.borderRadius.xl : 0,
                  borderBottomRightRadius: corner === 'bottom-right' ? theme.borderRadius.xl : 0,
                }}
              />
            );
          })}
          
          {/* Center Crosshair */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.5,
          }}>
            <Icon name="add" size={36} color={theme.colors.textLight} />
          </div>
        </div>
      </div>

      {/* --- 5. Bottom Controls Section --- */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        padding: theme.spacing.lg,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.lg,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      }}>
        
        {/* Step Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          flexWrap: 'wrap',
          maxWidth: 400,
          margin: '0 auto',
        }}>
          {steps.map((step, index) => (
            <div
              key={step.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                opacity: index <= currentStep ? 1 : 0.6,
                minWidth: 48,
              }}
            >
              <div style={{
                position: 'relative',
                width: index === currentStep ? 44 : 36,
                height: index === currentStep ? 44 : 36,
                borderRadius: theme.borderRadius.xl,
                backgroundColor: index === currentStep 
                  ? theme.colors.primary 
                  : withOpacity('#000', 0.5),
                backdropFilter: 'blur(8px)',
                border: index === currentStep 
                  ? `2px solid ${theme.colors.textLight}` 
                  : `1px solid ${withOpacity('#fff', 0.2)}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: index === currentStep ? theme.shadows.primary : 'none',
                transition: 'all 0.3s ease',
              }}>
                <Icon 
                  name={
                    index === 0 ? 'directions_car' : // Front
                    index === 1 ? 'directions_car' : // Rear
                    index === 2 ? 'turn_left' :      // Left
                    index === 3 ? 'turn_right' :     // Right
                    index === 4 ? 'settings' :     // Engine
                    index === 5 ? 'luggage' :        // Boot
                    index === 6 ? 'airline_seat_recline_normal' : // Int Front
                    'airline_seat_recline_extra'     // Int Rear
                  } 
                  size={index === currentStep ? 22 : 18} 
                  color={theme.colors.textLight} 
                />
                {index < currentStep && (
                  <div style={{
                    position: 'absolute',
                    top: -4,
                    right: -4,
                    width: 16,
                    height: 16,
                    borderRadius: theme.borderRadius.full,
                    backgroundColor: theme.colors.textLight,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon name="check" size={10} color={theme.colors.primary} />
                  </div>
                )}
              </div>
              <span style={{
                fontSize: 9,
                fontWeight: index === currentStep ? theme.fontWeights.bold : theme.fontWeights.medium,
                color: theme.colors.textLight,
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                textAlign: 'center',
                maxWidth: 48,
              }}>
                {step.name}
              </span>
            </div>
          ))}
        </div>

        {/* Camera Controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 340,
          margin: '0 auto',
          width: '100%',
          padding: `${theme.spacing.sm} 0`,
        }}>
          <button style={{
            width: 48,
            height: 48,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity('#fff', 0.1),
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.colors.textLight,
          }}>
            <Icon name="photo_library" size={24} />
          </button>

          {/* Capture Button */}
          <button
            onClick={handleCapture}
            style={{
              width: 80,
              height: 80,
              borderRadius: theme.borderRadius.full,
              border: `5px solid ${withOpacity('#fff', 0.3)}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 0 4px ${withOpacity('#fff', 0.3)}`,
            }}
          >
            <div style={{
              width: 64,
              height: 64,
              borderRadius: theme.borderRadius.full,
              backgroundColor: theme.colors.textLight,
              boxShadow: theme.shadows.lg,
            }} />
          </button>

          <button style={{
            width: 48,
            height: 48,
            borderRadius: theme.borderRadius.full,
            backgroundColor: withOpacity('#fff', 0.1),
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.colors.textLight,
          }}>
            <Icon name="cameraswitch" size={24} />
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default CameraScreen;