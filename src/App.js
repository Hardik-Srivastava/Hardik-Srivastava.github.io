import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li>
              <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Google</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Your portfolio content goes here */}
      </main>
      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}

export default App;
