// In your main JS file
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHtmlFadeEffect = () => {
    const location = useLocation();
    useEffect(() => {
        const body = document.body;
    
        // Add the class to set navy background during the animation
        body.classList.add('fade-background');
    
        // Remove the class after the animation completes (duration matches the CSS)
        const timer = setTimeout(() => {
          body.classList.remove('fade-background');
        }, 800); // Match with CSS animation duration
    
        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
      }, [location]);
};

export default useHtmlFadeEffect;
