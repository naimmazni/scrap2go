// iPhone 15 Pro Mockup Component
import React, { ReactNode, useEffect, useState } from 'react';

// Import the status bar icons from react library (Ionicons - iOS style)
import { IoCellular, IoWifiSharp, IoBatteryFull } from "react-icons/io5";
interface IPhoneMockupProps {
  children: ReactNode;
}

const IPhoneMockup: React.FC<IPhoneMockupProps> = ({ children }) => {

  // --- Added Status Bar Logic ---
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).replace(/ AM| PM/, '');
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      // Device frame outer container
      position: 'relative',
      width: 375,
      height: 812,
      borderRadius: 55,
      backgroundColor: '#1a1a1a', // Device frame color (space black)
      padding: 12,
      boxShadow: `
        0 50px 100px rgba(0, 0, 0, 0.25),
        0 30px 60px rgba(0, 0, 0, 0.2),
        inset 0 0 0 2px #2a2a2a,
        inset 0 0 0 4px #1a1a1a,
        inset 0 0 0 6px #333
      `,
    }}>
      {/* Side buttons - Volume Up */}
      <div style={{
        position: 'absolute',
        left: -3,
        top: 180,
        width: 3,
        height: 32,
        backgroundColor: '#2a2a2a',
        borderRadius: '3px 0 0 3px',
      }} />
      
      {/* Side buttons - Volume Down */}
      <div style={{
        position: 'absolute',
        left: -3,
        top: 220,
        width: 3,
        height: 32,
        backgroundColor: '#2a2a2a',
        borderRadius: '3px 0 0 3px',
      }} />
      
      {/* Side buttons - Silent Switch */}
      <div style={{
        position: 'absolute',
        left: -3,
        top: 130,
        width: 3,
        height: 24,
        backgroundColor: '#2a2a2a',
        borderRadius: '3px 0 0 3px',
      }} />
      
      {/* Side buttons - Power Button */}
      <div style={{
        position: 'absolute',
        right: -3,
        top: 200,
        width: 3,
        height: 80,
        backgroundColor: '#2a2a2a',
        borderRadius: '0 3px 3px 0',
      }} />

      {/* Inner bezel / frame */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: 45,
        backgroundColor: '#000',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Screen container */}
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: 43,
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#fff', // Ensure background is white for status bar visibility
        }}>

          {/* --- NEW: iOS Status Bar --- */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 54,
              padding: '0 26px',
              display: 'flex',
              alignItems: 'center', 
              justifyContent: 'space-between',
              color: '#000', 
              zIndex: 900,
              pointerEvents: 'none',
              paddingTop: 12,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            }}
          >
            {/* Time */}
            <div style={{ width: 60, textAlign: 'center', fontWeight: 600, fontSize: 17, letterSpacing: '-0.5px', marginLeft: 4 }}>
              {time ?? '9:41'}
            </div>

            {/* ICONS - Using React Icons Library */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
               {/* Cellular */}
               <IoCellular size={18} />
               
               {/* Wifi */}
               <IoWifiSharp size={18} />
               
               {/* Battery - Rotated to match iOS horizontal style often needed */}
               <IoBatteryFull size={22} style={{ opacity: 0.8 }} />
            </div>
          </div>
          

          {/* Screen content - full height, behind Dynamic Island */}
          <div style={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
          }}>
            {children}
          </div>

          {/* Dynamic Island - floats above screen content */}
          <div style={{
            position: 'absolute',
            top: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 126,
            height: 37,
            backgroundColor: '#000',
            borderRadius: 30,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: 12,
            pointerEvents: 'none',
          }}>
            {/* Camera lens */}
            <div style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#1a1a2e',
              border: '2px solid #0f0f1a',
              boxShadow: 'inset 0 0 2px rgba(255,255,255,0.1)',
            }} />
          </div>

          {/* Home indicator bar - floats above screen content */}
          <div style={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 134,
            height: 5,
            backgroundColor: '#000',
            borderRadius: 3,
            zIndex: 1000,
            pointerEvents: 'none',
          }} />
        </div>
      </div>
    </div>
  );
};

export default IPhoneMockup;