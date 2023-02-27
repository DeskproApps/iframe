import { Stack, H1, H2 } from "@deskpro/app-sdk";
export const ErrorFallback = ({
  error,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  let message;
  if (error.message.startsWith("Blocked a frame with origin")) {
    message =
      "The URL the admin inserted is not allowed to be loaded in an iframe. Please change the URL.";
  } else {
    message = error.message;
  }
  return (
    <Stack vertical style={{ margin: "8px" }} gap={10} role="alert">
      <H1>Something went wrong:</H1>
      <H2>{message}</H2>
    </Stack>
  );
};
