import {
  useDeskproAppClient,
  useInitialisedDeskproAppClient,
} from "@deskpro/app-sdk";
import { useEffect } from "react";
import { useDeskproData } from "../context/deskproDataContext";
import { useParsedUrlDeskproValues } from "../hooks/useParsedUrlDeskproValues";

export const Main = () => {
  const deskproData = useDeskproData();
  const url = useParsedUrlDeskproValues();

  useInitialisedDeskproAppClient(
    (client) => {
      client.setWidth(
        Number(deskproData?.settings?.iframe_width_pixels) || 512
      );
      client.setHeight(
        Number(deskproData?.settings?.iframe_height_pixels) || 512
      );
    },
    [deskproData]
  );

  if (!deskproData || !url) return null;

  return (
    <iframe
      data-testid="iframe"
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
