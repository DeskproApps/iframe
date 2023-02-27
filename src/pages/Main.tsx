import { useDeskproAppClient } from "@deskpro/app-sdk";
import { useEffect, useRef } from "react";
import { useDeskproData } from "../context/deskproDataContext";
import { useParsedUrlDeskproValues } from "../hooks/useParsedUrlDeskproValues";

export const Main = () => {
  const { client } = useDeskproAppClient();
  const deskproData = useDeskproData();
  const iframeRef = useRef(null);
  const url = useParsedUrlDeskproValues();

  useEffect(() => {
    if (!client) return;

    client.setWidth(Number(deskproData?.settings?.iframe_width_pixels) || 512);
    client.setHeight(
      Number(deskproData?.settings?.iframe_height_pixels) || 512
    );
    const iframe = iframeRef.current;

    if (!iframe) return;

    //we do this just to check if the iframe is accessable
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    iframe?.contentWindow.document;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iframeRef.current, client, deskproData]);

  if (!deskproData || !url) return null;

  return (
    <iframe
      data-testid="iframe"
      ref={iframeRef}
      src={url}
      frameBorder={0}
      style={{
        width: Number(deskproData.settings?.iframe_width_pixels) || 512,
        height: Number(deskproData.settings?.iframe_height_pixels) || 512,
      }}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};
