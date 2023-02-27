import { Context } from "@deskpro/app-sdk";

export const findDeskproValues = (string: string, context: Context) => {
  try {
    let objValue = { ...context };

    for (const s of string.split(".")) {
      objValue = objValue[s as keyof typeof objValue];
    }

    if (!objValue || typeof objValue === "object")
      throw new Error(`No value found for ${string}`);

    return objValue as string;
  } catch (error) {
    throw new Error(`No value found for ${string}`);
  }
};
