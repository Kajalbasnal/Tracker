import React, { useEffect, useState, useRef } from "react";

const POMODORO_DURATION = 25 * 60;
const BREAK_DURATION = 5 * 60;

const Timer = () => {
  const [mode, setMode] = useState("work");
  const [timeLeft, setTimeLeft] = useState(POMODORO_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return;
    let id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          const newMode = mode === "work" ? "break" : "work";
          setMode(newMode);

          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setTimeout(() => {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }, 2000);
          }

          return newMode === "work" ? POMODORO_DURATION : BREAK_DURATION;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [isRunning, mode]);

  useEffect(() => {
    setIsRunning(false);
    if (mode === "work") {
      setTimeLeft(POMODORO_DURATION);
      return;
    }
    setTimeLeft(BREAK_DURATION);
  }, [mode]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 p-6">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400 drop-shadow-lg mb-6">
        Pomodoro Timer
      </h1>

      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        Current Mode:
      </h3>
      <span
        className={`text-3xl font-bold px-4 py-2 rounded-lg shadow-md ${
          mode === "work"
            ? "bg-red-200 text-red-700"
            : "bg-green-200 text-green-700"
        }`}
      >
        {mode.toUpperCase()}
      </span>

      <div className="mt-8 w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <div className="text-7xl font-bold text-gray-800 mb-6">
          {formatTime(timeLeft)}
        </div>

        <button
          onClick={() => setIsRunning((prev) => !prev)}
          className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all shadow-md ${
            isRunning
              ? "bg-red-500 text-white hover:bg-red-600 active:scale-95"
              : "bg-green-500 text-white hover:bg-green-600 active:scale-95"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          onClick={() =>
            setMode((prev) => (prev === "work" ? "break" : "work"))
          }
          className="mt-4 px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all text-gray-700 font-medium shadow-sm active:scale-95"
        >
          Switch to {mode === "work" ? "Break" : "Work"}
        </button>
      </div>

      <audio
        ref={audioRef}
        src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
        preload="auto"
      />
    </div>
  );
};

export default Timer;
