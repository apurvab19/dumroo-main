import { useCallback } from 'react';

export function useScrollTo() {
  return useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64; // height of nav bar
      const sectionTop = section.offsetTop - navHeight;
      
      // Add a small delay to ensure smooth scrolling after any layout changes
      setTimeout(() => {
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, []);
}