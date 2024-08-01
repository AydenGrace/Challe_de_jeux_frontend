import { useEffect } from "react";

/**
 * React hook that sets the document title
 * @param {String} title - new title
 */
export default function useDocumentTitle(title = String) {
  useEffect(() => {
    document.title = title + " | La Challe de jeux";
  }, [title]);
}
