"use client";
import React, { useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) {
    return null;
  }

  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-box">
          <div className="letter">L</div>
          <div className="letter">O</div>
          <div className="letter">A</div>
          <div className="letter">D</div>
          <div className="letter">I</div>
          <div className="letter">N</div>
          <div className="letter">G</div>
        </div>
      </div>
    </div>
  );
}
