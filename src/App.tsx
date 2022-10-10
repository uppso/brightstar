import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";
import * as React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AppBar } from "./library/AppBar";
import { Spinner } from "./library/Spinner";
import { TabBarNavigation } from "./library/TabBarNavigation";
import ErrorBoundary from "./utils/ErrorBoundary";
import theme from "./utils/theme";
/**
 * Lazy Loaded React Routes
 * These components are downloaded and imported when they
 * are first used. This can help split a large app into
 * chunks.
 * @see https://reactjs.org/docs/code-splitting.html
 */
const ShowcasePage = React.lazy(() => import("./pages/showcase"));
const TaskPage = React.lazy(() => import("./pages/task"));
const OverviewPage = React.lazy(() => import("./pages/overview"));

/**
 * Suspense Loader component
 * This displays a loading wheel spinner while the route loads
 */
function Loader({ children }: { children: JSX.Element }) {
  return <React.Suspense fallback={<Spinner />}>{children}</React.Suspense>;
}

/**
 * App Router
 * Contains the main routes for the app
 * @see https://reactrouter.com/en/main
 * @returns JSX.Element
 */
function Router() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/task/*"
        element={
          <Loader>
            <TaskPage />
          </Loader>
        }
      />
      <Route
        path="/*"
        element={
          <Loader>
            <OverviewPage />
          </Loader>
        }
      />
      <Route
        path="/showcase/*"
        element={
          <Loader>
            <ShowcasePage />
          </Loader>
        }
      />
    </Routes>
  );
}

/**
 * BrightStar App is a simple React app to showcase development work
 * The app is created using the following libraries:
 * @url https://reactjs.org/docs/create-a-new-react-app.html
 * @url https://mui.com/
 * @url https://v5.reactrouter.com/web/guides/quick-start
 * @returns JSX.Element React component
 */
export function App() {
  return (
    <div data-testid="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ErrorBoundary>
            <AppBar />
            <AnimatePresence mode="wait">
              <Router />
            </AnimatePresence>
            <TabBarNavigation />
          </ErrorBoundary>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
//
