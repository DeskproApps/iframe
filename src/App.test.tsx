import { render, waitFor } from "@testing-library/react";
import { Main } from "./pages/Main";

jest.mock("./hooks/useParsedUrlDeskproValues", () => ({
  useParsedUrlDeskproValues: () => "https://www.google.com",
}));

jest.mock("./context/deskproDataContext", () => ({
  useDeskproData: () => ({
    settings: {},
  }),
}));

test("renders App component", async () => {
  const { getByTestId } = render(<Main />);

  await waitFor(() => {
    const buttonElement = getByTestId("iframe");
    expect(buttonElement).toBeInTheDocument();
  });
});
