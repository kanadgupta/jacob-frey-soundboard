import * as React from "react";

import clips from "../clips";

export default function Home() {
  return (
    <>
      <h1 className="title">
        hello! here's some of the stupid shit that the mayor of minneapolis has
        actually said:
      </h1>
      <div className="item-container">
        {clips.map((clip, i) => {
          const audioRef = React.useRef();
          return (
            <div
              className="item"
              key={i}
              onClick={() => audioRef.current && audioRef.current.play()}
            >
              <audio ref={audioRef} src={clip.audio} />

              {`"${clip.text}"`}
            </div>
          );
        })}
      </div>
    </>
  );
}
