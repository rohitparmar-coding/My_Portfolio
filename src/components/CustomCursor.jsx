

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef([]);
  const requestRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  // Number of trailing lights
  const trailCount = 8;

  useEffect(() => {
    // Create trail elements
    const trails = [];
    for (let i = 0; i < trailCount; i++) {
      const div = document.createElement("div");
      div.className =
        "fixed w-4 h-4 bg-blue-400 rounded-full opacity-50 pointer-events-none blur-lg transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out";
      document.body.appendChild(div);
      trails.push(div);
    }
    trailRef.current = trails;

    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      // Animate trail
      trails.forEach((trail, index) => {
        const delay = (index + 1) * 0.1;
        const x = cursorPos.current.x - delay * (cursorPos.current.x - mousePos.current.x);
        const y = cursorPos.current.y - delay * (cursorPos.current.y - mousePos.current.y);
        trail.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
      // Remove trail elements
      trails.forEach((t) => t.remove());
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 bg-blue-500 rounded-full opacity-90 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out shadow-lg"
    />
  );
};

export default CustomCursor;
