import React from "react";

const questions = [
  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Add Two Numbers", difficulty: "Medium" },
  { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
  { id: 4, title: "Palindrome Number", difficulty: "Easy" },
  { id: 5, title: "Merge Two Sorted Lists", difficulty: "Medium" },
  { id: 6, title: "Search in Rotated Sorted Array", difficulty: "Hard" },
  { id: 7, title: "Hatd", difficulty: "Hard" },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4">
        <button className="bg-gray-700 px-4 py-2 rounded mb-4 w-full">⚙ Filter</button>
        <h2 className="text-lg font-semibold mb-2">Questions</h2>
        <ul>
          {questions.map((q) => (
            <li key={q.id} className="py-2 flex justify-between items-center">
              {q.title}
              <span
                className={`text-xs px-2 py-1 rounded ${
                  q.difficulty === "Easy"
                    ? "bg-green-600"
                    : q.difficulty === "Medium"
                    ? "bg-yellow-600"
                    : "bg-red-600"
                }`}
              >
                {q.difficulty}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold">AI Code Evaluator</h1>
        <p className="text-gray-400 mt-2">
          Test your coding skills with our AI-powered code evaluation platform.
        </p>

        {/* Description Card */}
        <div className="bg-gray-800 p-6 mt-6 rounded-lg w-1/3">
          <h3 className="text-xl font-semibold">Kodrr</h3>
          <p className="text-gray-400 mt-2">
            An innovative platform for coding assessments, utilizing advanced AI to provide
            accurate and insightful evaluations.
          </p>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="absolute top-4 right-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-700"
        />
      </div>
    </div>
  );
};

export default LandingPage;
