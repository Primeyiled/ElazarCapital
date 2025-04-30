"use client";
import { useEffect } from "react";

const CryptoMarquee = () => {
  useEffect(() => {
    const loadScript = () => {
      if (!document.getElementById("cryptorank-widget-script")) {
        const script = document.createElement("script");
        script.id = "cryptorank-widget-script";
        script.src = "https://cryptorank.io/widget/marquee.js";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Use MutationObserver to ensure the DOM is ready
    const observer = new MutationObserver((mutations, obs) => {
      const widgetElement = document.getElementById("cr-widget-marquee");
      if (widgetElement) {
        loadScript();
        obs.disconnect(); // Stop observing once the element is found
      }
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="crypto-marquee-container">
      <div
        id="cr-widget-marquee"
        data-coins="bitcoin,ethereum,tether,ripple,cardano"
        data-theme="light"
        data-show-symbol="true"
        data-show-icon="true"
        data-show-period-change="true"
        data-period-change="24H"
        data-api-url="https://api.cryptorank.io/v0"
      >
        {/* <a href="https://cryptorank.io">Coins by Cryptorank</a> */}
      </div>
    </div>
  );
};

export default CryptoMarquee;