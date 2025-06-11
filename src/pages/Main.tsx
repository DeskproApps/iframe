import {
  useDeskproClientInitialised,
  useDeskproContext,
} from "@deskpro/app-sdk-react-test";
import { Settings } from "../types/deskpro.ts";
import getUrlFromContext from "../utils/getUrlFromContext.ts";

export default function Main() {
  const context = useDeskproContext<Settings>();
  const url = context ? getUrlFromContext(context) : undefined;

  useDeskproClientInitialised((client) => {
    if (!url) {
      return;
    }
    client.ui().registerElement("iframeOpenInNewtab", {
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
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    >
    </iframe>
  );
}
