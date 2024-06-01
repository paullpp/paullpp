"use client";
import { useState, useEffect, useRef } from "react";

export default function Typewriter(props: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const doneTyping = useRef(false);
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
      const nextChar = setTimeout(() => setShowCursor(false), 400);
      doneTyping.current = true;
      return () => clearInterval(nextChar);
    }
  }, [displayText]);

  useEffect(() => {
    if (doneTyping.current) {
      const blink = setInterval(() => setShowCursor(!showCursor), 550);
      return () => clearInterval(blink);
    }
  }, [showCursor]);
  return (
    <span className="inline-block text-secondary-content text-9xl font-semibold w-[660px]">
      {displayText}
      {showCursor && <>&#9646;</>}
    </span>
  );
}