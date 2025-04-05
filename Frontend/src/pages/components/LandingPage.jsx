import React from 'react';

const questions = [
  { id: 1, title: "Two Sum", difficulty: "Easy" },
  { id: 2, title: "Add Two Numbers", difficulty: "" },
  { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "" },
  { id: 4, title: "Palindrome Number", difficulty: "" },
  { id: 5, title: "Merge Two Sorted Lists", difficulty: "" },
  { id: 6, title: "Search in Rotated Sorted Array", difficulty: "" },
  { id: 7, title: "Hatd", difficulty: "Hard" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex relative font-sans">
      {/* Sidebar */}
      <div className="w-[280px] bg-[#121212] p-4 border-r border-[#1f1f1f]">
        <button className="bg-[#1f1f1f] px-4 py-2 rounded flex items-center gap-2 text-sm w-full mb-6">
          <span>☰</span> Filter
        </button>
        <h2 className="text-lg font-semibold text-gray-200 mb-4">Questions</h2>
        <ul className="space-y-3">
          {questions.map((q) => (
            <li key={q.id} className="flex items-center justify-between text-sm text-white">
              <span className="w-[200px] truncate">{q.id}. {q.title}</span>
              {q.difficulty && (
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    q.difficulty === "Easy"
                      ? "bg-green-600 text-white"
                      : q.difficulty === "Medium"
                      ? "bg-yellow-600 text-black"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {q.difficulty}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 pl-14">
        <h1 className="text-4xl font-bold mb-4">AI Code Evaluator</h1>
        <p className="text-gray-400 text-lg max-w-xl mb-6">
          Test your coding skills with our <br />
          AI-powered code evaluation platform
        </p>

        {/* Kodrr Box */}
        <div className="bg-[#121212] p-6 rounded-lg w-[320px] mt-6 border border-[#1f1f1f]">
          <h3 className="text-xl font-bold mb-2">Kodrr</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            An innovative platform for coding assessments, utilizing advanced AI to provide
            accurate and insightful evaluations.
          </p>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="absolute top-6 right-6">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-600"
        />
      </div>
    </div>
  );
};

export default Home;
