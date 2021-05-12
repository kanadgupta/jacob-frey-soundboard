import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

export default function Clip({ clip }) {
  const audioRef = useRef();
  const [parentClass, setParentClass] = useState("");
  return (
    <div
      className={`item ${parentClass}`}
      onClick={() => audioRef.current && audioRef.current.play()}
    >
      <audio
        ref={audioRef}
        onPlay={() => setParentClass('playing')}
        onPause={() => setParentClass('')}
        src={`mp3/${clip.audio}`}
      />
      {`"${clip.text}"`}
    </div>
  );
}

Clip.propTypes = {
  clip: PropTypes.shape({
    audio: PropTypes.string,
    text: PropTypes.string,
  }),
};
