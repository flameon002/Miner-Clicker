"use client";

import Contador from "./components/Contador";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <Contador />
      {/* <button className="bg-cyan-800 p-4 rounded-xl text-gray-100">
        Click me
      </button> */}
    </main>
  );
}
