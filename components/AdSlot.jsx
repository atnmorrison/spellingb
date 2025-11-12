"use client";

import { useEffect, useRef } from "react";

function loadAdSense(adsbygoogle) {
  try {
    adsbygoogle.push({});
  } catch (error) {
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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const ads = window.adsbygoogle || [];
    window.adsbygoogle = ads;

    if (adRef.current && adRef.current.dataset.adStatus !== "filled") {
      loadAdSense(ads);
    }
  }, [adSlot, layoutKey, format]);

  return (
    <div className={`flex justify-center ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style ?? { display: "block" }}
        data-ad-client="ca-pub-4608494003373704"
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive="true"
      />
    </div>
  );
}

