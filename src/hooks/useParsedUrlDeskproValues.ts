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
    arr.push({
      originalText: match[0],
      newText: findDeskproValues(match[1], deskproData.data),
    });
  }

  while (arr.length) {
    const item = arr.pop() as typeof arr[0];
    url = url.replace(item.originalText, item.newText);
  }

  return url;
};
