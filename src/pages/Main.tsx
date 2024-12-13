import { useInitialisedDeskproAppClient } from "@deskpro/app-sdk";
import { useParsedUrlDeskproValues } from "../hooks/useParsedUrlDeskproValues";

export const Main = () => {
  const url = useParsedUrlDeskproValues();
  useInitialisedDeskproAppClient((client) => {
    if (!url) {
      return;
    }
    client.registerElement("iframeOpenInNewtab", {
      type: "cta_external_link",
      url,
      hasIcon: true,
    });
  }, [url]);
  if (!url) {
    return null;
  }

  return (
    <iframe
      data-testid="iframe"
      src={url}
      style={{
        width: "512px",
        height: "512px",
        border: "none",
      }}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};
