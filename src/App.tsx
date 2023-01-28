import { useState } from "react";
import { MainContent, Navbar, Sidebar } from "./components";

function App() {

  return (
    <div className="main bg-gray-200 min-h-screen w-screen">
      <Navbar />
      <div className="flex w-full ">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
