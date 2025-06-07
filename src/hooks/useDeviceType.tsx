import { useEffect, useRef, useState } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const getDeviceType = (width: number): DeviceType => {
  if (width < 768) return 'mobile';
  if (width >= 768 && width < 1024) return 'tablet';
  return 'desktop';
};

export const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(() => getDeviceType(window.innerWidth));
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (frame.current !== null) return;

      frame.current = requestAnimationFrame(() => {
        const newType = getDeviceType(window.innerWidth);
        if (newType !== deviceType) {
          setDeviceType(newType);
        }
        frame.current = null;
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [deviceType]);

  return deviceType;
};
