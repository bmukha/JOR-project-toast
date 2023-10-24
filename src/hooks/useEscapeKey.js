import React from 'react';

export const useEscapeKey = (callback) => {
  React.useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        callback(event);
      }
    };
    window.addEventListener('keydown', handleEscapeKey);

    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [callback]);
};
