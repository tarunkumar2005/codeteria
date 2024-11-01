import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Upcoming from "./pages/upcoming";
import ErrorPage from "./pages/ErrorPage";
import InterviewPrep from "./pages/interview/InterviewPrep";
import Cheatsheet from "./pages/cheatsheet/Cheatsheet";
import MachineCoding from "./pages/interview/machineCoding";
import ChallengeDetail from "./pages/interview/ChallengeDetail";
import { useAPI } from "./context/apiContext";
import Chat from "./components/chatbot/Chat";
import Product from "./pages/products/product";
import Playground from "./pages/playground/Playground";
import MainNavbar from "./components/MainNavbar";
import DSProblem from "./pages/dsproblem/DSProblem";
import AnimatedCursor from "react-animated-cursor";
import Terms from "./pages/terms/Terms";
import Faqs from './pages/FAQS/Faqs';
import Quiz from "./pages/quizzes/Quiz"; 
import Intro from "./components/Intro"; // Import the Intro component

const App = () => {
  const { dark } = useAPI();
  const [display, setDisplay] = useState(true); // Set initial state to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false); // Hide intro after a delay
    }, 3000); // Change duration if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        trailingSpeed={1}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
      <div
        className={`${
          dark ? "bg-[#0F111D] text-white" : ""
        } relative min-h-screen scroll-smooth`}
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollbarWidth: "thin", // For Firefox
          scrollbarColor: "rgba(178, 121, 216, 0.959) #2d1950",
        }}
      >
        {display ? (
          <Intro /> // Show intro component
        ) : (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cheats" element={<Cheatsheet />} />
            <Route path="/interview" element={<InterviewPrep />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/machinecoding" element={<MachineCoding />} />
            <Route path="/dsproblem" element={<DSProblem />} />
            <Route path="/quizzes" element={<Quiz />} />
            <Route path="/challenge/:id" element={<ChallengeDetail />} />
            <Route path="/product" element={<Product />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/terms" element={<Terms />} />
            {/* Page not found */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </div>

      {!display && <Chat />} {/* Show Chat only after intro is hidden */}
    </>
  );
};

export default App;
