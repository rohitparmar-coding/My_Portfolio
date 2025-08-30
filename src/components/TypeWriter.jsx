import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  const [index, setIndex] = useState(0);
  const phrases = ["Hello, World!", "Welcome to React!", "Enjoy Coding!"];

  // Change content every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div style={{ fontSize: "24px", fontFamily: "monospace" }}>
      <Typewriter
        words={[phrases[index]]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypewriterEffect;
