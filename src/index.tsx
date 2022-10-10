import { createRoot } from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * Main entry point for the app
 * @see https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
 */
const root = createRoot(document.getElementById("brightstar") as HTMLElement);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
