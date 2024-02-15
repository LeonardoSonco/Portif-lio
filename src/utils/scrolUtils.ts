// scrollUtils.js

import { useEffect, useState } from "react";


export const useScrollVisibility = (
  elementId: string,
  offset = 0,
  
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        
      const targetElement = document.getElementById(elementId);
     
      const elementTop = targetElement?.getBoundingClientRect().top;
      
      if (elementTop && elementTop - offset <= window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementId, offset]);

//   useEffect(() => {
//     if (isVisible) {
//       scroller.scrollTo(elementId, {
//         duration,
//         delay: 0,
//         smooth,
//       });
//     }
//   }, [elementId, isVisible, duration, smooth]);

  return isVisible;
};
