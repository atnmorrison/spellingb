"use client";

import { useEffect, useRef, useState } from "react";

function loadAdSense(adsbygoogle, adRef) {
  try {
    // Check if the container has dimensions before loading
    if (adRef.current) {
      const rect = adRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        // Container doesn't have dimensions yet, skip loading
        return;
      }
    }
    
    if (adRef.current && adRef.current.dataset.adStatus !== "filled") {
      adsbygoogle.push({});
    }
  } catch (error) {
    // Silently handle errors in production, log in development
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.warn("AdSense: unable to serve ad slot", error);
    }
  }
}

export default function AdSlot({
  adSlot,
  format = "auto",
  layoutKey,
  style,
  className = "",
}) {
  const adRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Initialize adsbygoogle array if it doesn't exist
    if (!window.adsbygoogle) {
      window.adsbygoogle = [];
    }

    // Wait for the AdSense script to load and DOM to be ready
    const checkAdSense = () => {
      // Check if adsbygoogle is available (script loaded)
      if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
        // Give the page a moment to render and calculate dimensions
        setTimeout(() => {
          setIsReady(true);
        }, 200);
      } else {
        // Check again after a short delay
        setTimeout(checkAdSense, 100);
      }
    };

    // Start checking after initial render
    const timer = setTimeout(checkAdSense, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady || typeof window === "undefined" || !adRef.current) {
      return;
    }

    // Use Intersection Observer to only load ads when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.dataset.adStatus !== "filled") {
            const ads = window.adsbygoogle || [];
            loadAdSense(ads, adRef);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isReady, adSlot, layoutKey, format]);

  return (
    <div className={`flex justify-center w-full min-w-[320px] ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          minWidth: "320px",
          minHeight: "100px",
          ...style,
        }}
        data-ad-client="ca-pub-4608494003373704"
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive="true"
      />
    </div>
  );
}

