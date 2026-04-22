import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 22, mass: 0.5 });

  const visible = useRef(false);
  const [clicking, setClicking] = useState(false);
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([]);
  const sparkId = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!visible.current) visible.current = true;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onLeave = () => {
      mouseX.set(-100);
      mouseY.set(-100);
    };

    const onDown = (e: MouseEvent) => {
      setClicking(true);
      const id = sparkId.current++;
      setSparks(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSparks(prev => prev.filter(s => s.id !== id)), 600);
    };

    const onUp = () => setClicking(false);

    const onTouch = (e: TouchEvent) => {
      Array.from(e.changedTouches).forEach(touch => {
        const id = sparkId.current++;
        setSparks(prev => [...prev, { id, x: touch.clientX, y: touch.clientY }]);
        setTimeout(() => setSparks(prev => prev.filter(s => s.id !== id)), 600);
      });
    };

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchstart', onTouch, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchstart', onTouch);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        animate={clicking
          ? { rotate: -35, scale: 0.82 }
          : { rotate: 0, scale: 1 }
        }
        transition={{ type: 'spring', stiffness: 600, damping: 18 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 99999,
          fontSize: '52px',
          lineHeight: 1,
          userSelect: 'none',
          transformOrigin: 'center',
        }}
        aria-hidden="true"
      >
        🪚
      </motion.div>

      <AnimatePresence>
        {sparks.map(spark => (
          <motion.div
            key={spark.id}
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 0, scale: 1.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: spark.y,
              left: spark.x,
              translateX: '-50%',
              translateY: '-50%',
              pointerEvents: 'none',
              zIndex: 99998,
              fontSize: '30px',
              lineHeight: 1,
              userSelect: 'none',
            }}
            aria-hidden="true"
          >
            ✨
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
