import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function TwoSumPage() {
  const [code, setCode] = useState("");

  const handleSubmit = () => {
    console.log("Submitted Code:\n", code);
    // In a real app, you'd probably send this to a backend or run it via a sandbox
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Section: Problem Description */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4">Two Sum</h1>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="mb-4">
          Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to target.
        </p>
        <h2 className="text-xl font-semibold mb-2">Example</h2>
        <div className="bg-gray-700 p-4 rounded-xl text-sm">
          <p><strong>Input:</strong></p>
          <p><code>nums = [2, 7, 11, 15], target = 9</code></p>
          <p className="mt-2"><strong>Output:</strong></p>
          <p><code>[0, 1]</code></p>
          <p className="mt-2"><strong>Explanation:</strong> Because <code>nums[0] + nums[1] = 9</code>, we return <code>[0, 1]</code>.</p>
        </div>
      </div>

      {/* Right Section: Code Editor */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Write Your Code</h2>
        <Textarea
          className="flex-1 font-mono text-sm bg-gray-900 text-white border border-gray-700 rounded-xl p-4 mb-4"
          rows={20}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your solution here..."
        />
        <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
} 
