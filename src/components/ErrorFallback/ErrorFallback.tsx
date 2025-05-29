import { Stack, H1, H2 } from "@deskpro/deskpro-ui";
import { FallbackRender } from "@sentry/react";

export const ErrorFallback: FallbackRender = ({
  error,
}) => {
  return (
    <Stack vertical style={{ margin: "8px" }} gap={10} role="alert">
      <H1>Something went wrong:</H1>
      <H2>{(error as Error).message}</H2>
    </Stack>
  );
};
