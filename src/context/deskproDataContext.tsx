import { createContext, useContext, useState } from "react";

import { useDeskproAppEvents, Context } from "@deskpro/app-sdk";
import { IDeskproSettings } from "../types/deskproSettings";

const DeskproDataContext = createContext<Context | null>(null);

export const useDeskproData = () => useContext(DeskproDataContext) as {settings: IDeskproSettings, data: Context};

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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      if (c) setDeskproData({ ...c, settings: c.settings });
    },
  });

  return (
    <DeskproDataContext.Provider value={deskproData}>
      {children}
    </DeskproDataContext.Provider>
  );
};
