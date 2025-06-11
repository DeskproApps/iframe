import { DeskproProvider } from "@deskpro/app-sdk-react-test";
import Main from "./pages/Main.tsx";
import type { Settings } from "./types/deskpro.ts";

export default function App() {
  return (
    <DeskproProvider<Settings> context={null}>
      <Main />
    </DeskproProvider>
  );
}
