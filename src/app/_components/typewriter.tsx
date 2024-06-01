"use client";
import { useState, useEffect, useRef } from "react";

export default function Typewriter(props: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const placeholder = useRef("");
  const text = props.text;
  const idx = useRef(0);
  const interval = useRef(99);
  
  useEffect(() => {
    const tick = () => {
      placeholder.current += text.charAt(idx.current);
      setDisplayText(() => placeholder.current);
      idx.current++;
    }
    const removeDot = () => {
      placeholder.current = text.substring(0, text.length - 1);
      setDisplayText(() => placeholder.current);
      idx.current--;
    }
    if (idx.current < text.length) {
      const nextChar = setInterval(tick, interval.current);
      return () => clearInterval(nextChar);
    } else {
      interval.current = 550;
      const nextChar = setInterval(removeDot, 550);
      return () => clearInterval(nextChar);
    }
  }, [displayText]);
  return (
    <span className="inline-block text-secondary-content text-9xl font-semibold w-[660px]">
      {displayText}
    </span>
  );
}