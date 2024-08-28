import { createContext, useContext, useState } from "react";

import { useDeskproAppEvents, Context } from "@deskpro/app-sdk";
import { IDeskproSettings } from "../types/deskproSettings";

const DeskproDataContext = createContext<Context | null>(null);

export const useDeskproData = () => useContext(DeskproDataContext) as {settings: {iframe_url?: string}, data: Context};

export const DeskproDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [deskproData, setDeskproData] = useState<Context<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    IDeskproSettings
  > | null>(null);
  useDeskproAppEvents({
    onShow: (c: Context) => {
      if (c) setDeskproData({ ...c, settings: c.settings as object });
    },
  });

  return (
    <DeskproDataContext.Provider value={deskproData}>
      {children}
    </DeskproDataContext.Provider>
  );
};
