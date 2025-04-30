"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );

      // Hide "Powered by Google" and clean up the widget
      setTimeout(() => {
        // Remove "Powered by Google"
        const poweredBy = document.querySelector(".goog-logo-link");
        if (poweredBy) poweredBy.style.display = "none";

        // Remove extra spans
        document.querySelectorAll(".goog-te-gadget span").forEach((el) => el.remove());

        // Fix dropdown styling
        const select = document.querySelector(".goog-te-gadget select");
        if (select) {
          select.style.width = "100%";
          select.style.textAlign = "left"; // Fix text alignment
          select.style.border = "1px solid #ccc";
          select.style.borderRadius = "5px";
          select.style.padding = "5px";
          select.style.backgroundColor = "#fff"; // Ensure background is white
          select.style.color = "#333"; // Ensure text color is dark
        }
      }, 1000);
    };
  }, []);

  return (
    <div className="my-4 2xl:my-6 w-[190px] h-[35px] flex items-center justify-center shadow-md rounded-lg overflow-hidden">
      <div id="google_translate_element"></div>
    </div>
  );
}