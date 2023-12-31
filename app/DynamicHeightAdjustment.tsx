"use client"

import { useEffect } from "react";

// Dynamically adjust the height of the body to accommodate mobile browser behavior
export default function useDynamicHeightAdjustment() {
    useEffect(() => {
      function adjustHeight() {
        const viewportHeight = window.innerHeight + 'px';
        document.body.style.height = viewportHeight;
      }
  
      window.addEventListener('load', adjustHeight);
      window.addEventListener('resize', adjustHeight);
  
      adjustHeight(); // Initial adjustment
  
      return () => {
        window.removeEventListener('load', adjustHeight);
        window.removeEventListener('resize', adjustHeight);
      };
    }, []);
  }