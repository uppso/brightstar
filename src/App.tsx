import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";
import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppBar } from "./library/AppBar";
import { Spinner } from "./library/Spinner";
import { TabBarNavigation } from "./library/TabBarNavigation";
import ErrorBoundary from "./utils/ErrorBoundary";
import theme from "./utils/theme";
/**
 * Lazy Loaded React Routes
 */
const Showcase = React.lazy(() => import("./pages/showcase"));
const Task = React.lazy(() => import("./pages/task"));
const Overview = React.lazy(() => import("./pages/overview"));
/**
 * Suspense Loader component
 */
function Loader({ children }: { children: JSX.Element }) {
  return <React.Suspense fallback={<Spinner />}>{children}</React.Suspense>;
}

function Router() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/task/*"
          element={
            <Loader>
              <Task />
            </Loader>
          }
        />
        <Route
          path="/*"
          element={
            <Loader>
              <Overview />
            </Loader>
          }
        />
        <Route
          path="/showcase/*"
          element={
            <Loader>
              <Showcase />
            </Loader>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

/**
 * BrightStar App is a simple React app to showcase
 * interviewee work
 * The app is created using the following libraries:
 * @url https://reactjs.org/docs/create-a-new-react-app.html
 * @url https://mui.com/
 * @url https://v5.reactrouter.com/web/guides/quick-start
 * @returns React component
 */
export function App() {
  return (
    <div data-testid="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <AppBar />
          <Router />
          <TabBarNavigation />
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
}
//
