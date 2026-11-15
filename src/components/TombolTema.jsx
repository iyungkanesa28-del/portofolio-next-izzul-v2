"use client";
import { useState, useEffect } from "react";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("tema") === "gelap") {
      document.documentElement.classList.add("dark");
      setGelap(true);
    }
  }, []);
  function gantiTema() {
    const isDark = document.documentElement.classList.toggle("dark");
    setGelap(isDark);
    localStorage.setItem("tema", isDark ? "gelap" : "terang");
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      className="theme-toggle"
      aria-pressed={gelap}
      aria-label={gelap ? "Ubah ke mode terang" : "Ubah ke mode gelap"}
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}