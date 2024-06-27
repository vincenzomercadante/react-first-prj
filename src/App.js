import { useState } from "react";

// import style for the app
import "./styles.css";

// menu content array
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

export default function App() {
  // active index with get and setter
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      {/* header of the page */}
      <header>
        {/* app logo */}
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          {/* title */}
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      {/* tabs */}
      <div id="tabs">
        <menu>
          {/* why react button */}
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          {/* core features button */}
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          {/* related resources button */}
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
          {/* react vs js button */}
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            React vs JS
          </button>
        </menu>
        {/* here i display the content item based on the clicked tab */}
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
