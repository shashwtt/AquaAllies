import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header/Header";
import { useRouter } from "next/router";
import Lenis from "@studio-freight/lenis";
import Curtain from "@/components/curtain/Curtain";

export default function App({ Component, pageProps }: AppProps) {
  const lenisRef = React.useRef<Lenis | null>(null);

  React.useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: any) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
        requestAnimationFrame(raf);
      }
    }

    requestAnimationFrame(raf);
    const scroll = document.getElementById("scroll");
    const bg = document.querySelector(".fsBgVid") as HTMLVideoElement;
    window.addEventListener("scroll", () => {
      let scrollPerc =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      scroll!.style.setProperty("--scroll", `${scrollPerc}%`);
      bg!.style.top = `-${scrollPerc}%`;
    });
  }, []);

  return (
    <React.StrictMode>
      <Curtain />
      <div id="appWrapper">
        <Header />
        <div className="fsBg">
          <video
            loop
            muted
            autoPlay
            className="fsBgVid"
          >
            <source src="/assets/bg.webm" type="video/webm" />
          </video>
        </div>
        <div className="scrollBar" id="scroll"></div>
        <Component {...pageProps} />
      </div>
    </React.StrictMode>
  );
}
