import { DeskproAppProvider } from "@deskpro/app-sdk";
import { Main } from "./pages/Main";

import { DeskproDataContextProvider } from "./context/deskproDataContext";
import { ErrorFallback } from "./components/ErrorFallback/ErrorFallback";
import { ErrorBoundary } from "@sentry/react";

export default function App() {
  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <DeskproAppProvider>
        <DeskproDataContextProvider>
          <Main />
        </DeskproDataContextProvider>
      </DeskproAppProvider>
    </ErrorBoundary>
  );
}