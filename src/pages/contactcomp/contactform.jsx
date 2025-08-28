// ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);

  // Chatbot state
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I’m your AI assistant. Ask me anything about our company." },
  ]);
  const [input, setInput] = useState("");

  const projectTypes = [
    "Web Development",
    "Marketing",
    "Embedded Systems",
    "Branding",
  ];

  const budgetOptions = ["$1k - $5k", "$5k - $10k", "$10k - $50k", "$50k+"];

  const durationOptions = [
    "1-3 Months",
    "3-6 Months",
    "6-12 Months",
    "12+ Months",
  ];

  // Simple chatbot response (company overview only)
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Company overview response
    const botMessage = {
      sender: "bot",
      text:
        "We are a leading technology solutions company specializing in Web Development, Marketing, Embedded Systems, and Branding. Our mission is to help businesses grow with innovative and scalable solutions.",
    };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <section className="w-full flex items-center justify-center py-16 px-6 md:px-12 bg-gray-50">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side (Chatbot) */}
        <div className="flex flex-col bg-white p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            💬 AI Assistant
          </h2>
          <div className="flex-1 overflow-y-auto mb-4 space-y-3 p-4 border rounded-xl bg-gray-50 h-80">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl max-w-xs ${
                  msg.sender === "bot"
                    ? "bg-indigo-100 text-indigo-900 self-start"
                    : "bg-gray-200 text-gray-800 self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our company..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </div>
        </div>

        {/* Right Side (Form) — unchanged */}
        <div className="p-10 md:p-12 bg-white rounded-3xl shadow-xl">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I’m interested in
              </label>
              <div className="grid grid-cols-2 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedProject(type)}
                    className={`px-4 py-3 rounded-xl border ${
                      selectedProject === type
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget
              </label>
              <select
                value={selectedBudget || ""}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="">Select your budget</option>
                {budgetOptions.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Duration
              </label>
              <div className="grid grid-cols-2 gap-3">
                {durationOptions.map((duration) => (
                  <button
                    key={duration}
                    type="button"
                    onClick={() => setSelectedDuration(duration)}
                    className={`px-4 py-3 rounded-xl border ${
                      selectedDuration === duration
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
