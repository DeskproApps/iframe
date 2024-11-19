import { useDeskproData } from "../context/deskproDataContext";
import { findDeskproValues } from "../utils/utils";

const REGEX = /\{\{([^}]+)}}/g;

export const useParsedUrlDeskproValues = () => {
  const deskproData = useDeskproData();

  let url = deskproData?.settings?.iframe_url;

  if (!deskproData || !url) return;

  let match;

  const arr: {
    originalText: string;
    newText: string;
  }[] = [];

  while ((match = REGEX.exec(url)) !== null) {
    let newText = '';
    try {
      newText = findDeskproValues(match[1], deskproData.data)
    } catch (e) {
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
};
