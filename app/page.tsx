"use client";
import { useEffect, useState } from "react";

const results = [
  { name: "The github repo", URL: "https://github.com/Leonhoch5/google-terminal" },
  { name: "Download? - EXE", URL: "https://google-terminal.qoig.dev/google-terminal.exe" },
  { name: "Leon - the one who made this <3 /me", URL: "https://qoig.dev" },
  { name: "Stardance - for what this was made", URL: "https://stardance.hackclub.com" },
  { name: "Hackclub - the origin of stardance", URL: "https://hackclub.com" }
];

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        setSelectedIndex((prev) =>
          e.key === "ArrowDown"
            ? (prev + 1) % results.length
            : (prev - 1 + results.length) % results.length
        );
      }

      if (e.ctrlKey && e.key === "c") {
        window.location.href = "https://google.com";
      }

      if (e.key === "Enter") {
        window.open(results[selectedIndex].URL, "_blank");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <main className="min-h-screen bg-black p-4">
      <div className="min-h-[calc(100vh-2rem)] rounded-md border-2 border-violet-600 p-8">
        <div className="inline-block bg-violet-600 px-6 py-2">
          <h1 className="font-mono text-3xl font-bold text-white">
            Google? No, duckduckgo.
          </h1>
        </div>

        <div className="mt-10 flex w-200 items-center rounded-md border-2 border-violet-600 px-8 py-10">
          <span className="mr-5 font-mono text-2xl text-gray-300">&gt;</span>
          <span className="font-mono text-2xl text-gray-300">
            A Stardance Project
          </span>
        </div>

        <div className="mt-10 font-mono text-2xl">
          {results.map((result, index) => (
            <div key={result.name} className="flex items-center gap-4">
              <span
                className={`w-6 text-violet-500 ${selectedIndex === index ? "opacity-100 ml-10" : "opacity-0"
                  }`}
              >
                &gt;
              </span>

              <span
                className={
                  selectedIndex === index
                    ? "text-violet-500 font-bold"
                    : "text-gray-300"
                }
              >
                {result.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-98 font-mono text-2xl">
          <span className="font-mono text-2xl text-gray-500">
            arrow keys move • ctrl + c quit • enter open page
          </span>
        </div>
      </div>
    </main>
  );
}