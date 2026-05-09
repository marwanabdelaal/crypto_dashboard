import React from "react";

const AboutPage = () => {
  return (
    <section class="max-w-3xl mx-auto p-6">
      <h1 class="text-3xl font-bold mb-4">📊 Crypto Dashboard</h1>

      <p class="mb-6">
        This project is a real-time crypto tracking dashboard built using React
        and the CoinGecko API.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">🚀 Overview</h2>
      <p class="mb-4">
        The goal of this project is to practice building a modern, data-driven
        frontend application that interacts with an external API and handles
        real-world UI states like loading, errors, filtering, and sorting.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">🔍 Features</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Search coins by name, symbol, or ID</li>
        <li>Sort by price, market cap, and other metrics</li>
        <li>Dynamic data fetching with adjustable result limits</li>
        <li>Responsive UI with loading and error states</li>
        <li>Clean state management using React hooks</li>
      </ul>

      <h2 class="text-xl font-semibold mt-6 mb-2">🧠 What I Focused On</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Writing clean and maintainable React code</li>
        <li>Avoiding unnecessary state (derived state vs source of truth)</li>
        <li>Building reusable components</li>
        <li>Handling async operations and edge cases properly</li>
      </ul>

      <h2 class="text-xl font-semibold mt-6 mb-2">🛠️ Tech Stack</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>React (Hooks)</li>
        <li>JavaScript (ES6+)</li>
        <li>Tailwind CSS</li>
        <li>CoinGecko API</li>
      </ul>

      <h2 class="text-xl font-semibold mt-6 mb-2">🎯 Purpose</h2>
      <p class="mb-4">
        This project is part of my journey transitioning from IT and networking
        into frontend development by building practical, real-world
        applications.
      </p>

      <h2 class="text-xl font-semibold mt-6 mb-2">📌 Future Improvements</h2>
      <ul class="list-disc pl-6">
        <li>Debounced search for better performance</li>
        <li>Pagination or infinite scrolling</li>
        <li>Charts for price trends</li>
        <li>Dark mode UI</li>
      </ul>
    </section>
  );
};

export default AboutPage;
