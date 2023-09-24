import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = ({ topRef }) => {
  const pathName = useLocation().pathname;

  useEffect(() => {
    if (topRef && topRef.current)
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [topRef, pathName]);

  return null;
};

export default ScrollTop;
