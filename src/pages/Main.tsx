import { useParsedUrlDeskproValues } from "../hooks/useParsedUrlDeskproValues";

export const Main = () => {
  const url = useParsedUrlDeskproValues();
  if (!url) {
    return null;
  }

  return (
    <iframe
      data-testid="iframe"
      src={url}
      style={{
        width: "100%",
        height: "100%",
        border: "none",
      }}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};
