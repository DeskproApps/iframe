import { DeskproAppProvider } from "@deskpro/app-sdk";
import { Main } from "./pages/Main";

import { DeskproDataContextProvider } from "./context/deskproDataContext";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback/ErrorFallback";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <DeskproAppProvider>
        <DeskproDataContextProvider>
          <Main />
        </DeskproDataContextProvider>
      </DeskproAppProvider>
    </ErrorBoundary>
  );
}