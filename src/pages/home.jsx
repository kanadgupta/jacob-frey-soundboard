import React, { useEffect } from "react";

import clips from "../clips";

export default function Home() {
  useEffect(() => {
    // Stolen from: https://stackoverflow.com/a/7717572
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  return (
    <>
      <a href="#content">skip to stupid content ⬇️</a>
      <h1 className="title">
        hello! here's some of the stupid shit that the mayor of minneapolis has
        actually said:
      </h1>
      <div id="content" className="content-warning">
        ⚠️ content warning: audio clips containing cop-loving mayor running his stupid mouth. proceed
        with caution! ⚠️
      </div>
      <div className="item-container">
        {clips.map((clip, i) => {
          const audioRef = React.useRef();
          return (
            <div
              className="item"
              key={i}
              onClick={() => audioRef.current && audioRef.current.play()}
            >
              <audio ref={audioRef} src={`mp3/${clip.audio}`} />

              {`"${clip.text}"`}
            </div>
          );
        })}
      </div>
    </>
  );
}
