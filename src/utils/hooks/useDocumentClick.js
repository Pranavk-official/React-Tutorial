import { useEffect } from "react";

export function useDocumentClick() {
  useEffect(() => {
    console.log("useDocumentClick()......");

    const handleDocumentClick = (e) => {
      console.log(e);
      console.log("Document Clicked");
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  });
}
