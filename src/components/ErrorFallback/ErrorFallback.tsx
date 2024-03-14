import { Stack, H1, H2 } from "@deskpro/deskpro-ui";
export const ErrorFallback = ({
  error,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  return (
    <Stack vertical style={{ margin: "8px" }} gap={10} role="alert">
      <H1>Something went wrong:</H1>
      <H2>{error.message}</H2>
    </Stack>
  );
};
