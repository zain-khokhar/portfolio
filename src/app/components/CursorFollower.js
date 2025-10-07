'use client';

import { useEffect, useState, useRef } from 'react';

export default function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const followerRef = useRef(null);
  const trailRefs = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const trailPositions = useRef(Array(6).fill({ x: 0, y: 0 }));

  useEffect(() => {
    let animationFrame;

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      const isInteractive = e.target.matches('a, button, [role="button"], input, textarea, select, .cursor-hover');
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => setIsHovering(false);

    const animate = () => {
      // Smooth follow animation with easing
      const dx = mousePosition.current.x - currentPosition.current.x;
      const dy = mousePosition.current.y - currentPosition.current.y;
      
      currentPosition.current.x += dx * 0.15;
      currentPosition.current.y += dy * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${currentPosition.current.x - 20}px, ${currentPosition.current.y - 20}px)`;
      }
      
      // Update trail positions with delay
      trailPositions.current = trailPositions.current.map((pos, index) => {
        const targetX = currentPosition.current.x + Math.sin(Date.now() * 0.001 + index * 0.5) * 3;
        const targetY = currentPosition.current.y + Math.cos(Date.now() * 0.001 + index * 0.5) * 3;
        
        const trailDx = targetX - pos.x;
        const trailDy = targetY - pos.y;
        
        return {
          x: pos.x + trailDx * (0.1 - index * 0.01),
          y: pos.y + trailDy * (0.1 - index * 0.01)
        };
      });

      // Apply trail transforms
      trailRefs.current.forEach((trail, index) => {
        if (trail && trailPositions.current[index]) {
          const pos = trailPositions.current[index];
          trail.style.transform = `translate(${pos.x - 10}px, ${pos.y - 10}px)`;
          trail.style.opacity = Math.max(0, 0.8 - (index * 0.12));
        }
      });
      
      animationFrame = requestAnimationFrame(animate);
    };

    // Initialize positions
    const initializePosition = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      currentPosition.current = { x: e.clientX, y: e.clientY };
      trailPositions.current = Array(6).fill({ x: e.clientX, y: e.clientY });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    
    // Initialize on first mouse move
    const handleFirstMove = (e) => {
      initializePosition(e);
      document.removeEventListener('mousemove', handleFirstMove);
      animate();
    };
    document.addEventListener('mousemove', handleFirstMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleFirstMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  // Hide on mobile/touch devices
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor follower */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-300 ease-out ${
          isClicking ? 'scale-75' : isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          width: '40px',
          height: '40px',
        }}
      >
        {/* Animated gradient blob */}
        <div
          className={`w-full h-full rounded-full transition-all duration-500 ease-out ${
            isHovering 
              ? 'bg-gradient-to-r from-primary/30 to-purple-500/30 shadow-lg shadow-primary/20' 
              : 'bg-gradient-to-r from-primary/20 to-blue-500/20'
          }`}
          style={{
            background: isHovering 
              ? 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(168, 85, 247, 0.3) 50%, rgba(59, 130, 246, 0.2) 100%)'
              : 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
            filter: 'blur(8px)',
            animation: 'pulse-glow 2s ease-in-out infinite alternate',
          }}
        />
        
        {/* Inner core */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, transparent 70%)',
            transform: 'scale(0.3)',
            filter: 'blur(1px)',
          }}
        />
      </div>

      {/* Trail particles */}
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (trailRefs.current[index] = el)}
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(99, 102, 241, ${0.3 - index * 0.05}) 0%, transparent 70%)`,
            filter: 'blur(4px)',
            transition: 'opacity 0.3s ease-out',
          }}
        />
      ))}

      {/* Floating orbs for ambient effect */}
      <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${20 + index * 10}px`,
              height: `${20 + index * 10}px`,
              background: `radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)`,
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
              animation: `float-${index + 1} ${8 + index * 2}s ease-in-out infinite`,
              filter: 'blur(10px)',
            }}
          />
        ))}
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes float-1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
          }
          75% {
            transform: translateY(15px) translateX(5px) rotate(270deg);
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(15px) translateX(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(-25px) translateX(10px) rotate(240deg);
          }
        }

        @keyframes float-3 {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) translateX(25px) rotate(180deg);
          }
        }

        /* Hide default cursor on desktop */
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
          
          a, button, [role="button"], input, textarea, select, .cursor-hover {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
