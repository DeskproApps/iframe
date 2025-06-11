import { Context } from "jsr:@deskpro/app-sdk-test@^0.0.8";
import { Settings } from "../types/deskpro.ts";

function findDeskproValues<Settings>(
  string: string,
  context: Context<Settings>,
): string {
  try {
    let objValue: object = { ...(context.data) };

    for (const s of string.split(".")) {
      objValue = objValue[s as keyof typeof objValue];
    }

    if (!objValue || typeof objValue === "object") {
      throw new Error(`No value found for ${string}`);
    }

    return objValue as string;
  } catch {
    throw new Error(`No value found for ${string}`);
  }
}

const REGEX = /\{\{([^}]+)}}/g;

export default function getUrlFromContext(
  context: Context<Settings>,
): string | undefined {
  let url = context.settings.iframe_url;

  if (!url) return undefined;

  const arr: {
    originalText: string;
    newText: string;
  }[] = [];

  let match;
  while ((match = REGEX.exec(url)) !== null) {
    let newText = "";
    try {
      newText = findDeskproValues(match[1], context);
    } catch {
      console.warn(`No value found for ${match[1]}`);
    }
    arr.push({
      originalText: match[0],
      newText,
    });
  }

  while (arr.length > 0) {
    const item = arr.pop() as typeof arr[0];
    url = url.replace(item.originalText, item.newText);
  }

  return url;
}
