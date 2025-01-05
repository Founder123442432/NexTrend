import { useEffect } from "react";

export default function useTop() {
  return useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
