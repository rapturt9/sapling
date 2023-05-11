import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const TreeAnimationPage = () => {
  const { address } = useParams();
  useEffect(() => {
    console.log(`Current address: ${address}`);
    window.frac = 1;
    window.nTrees = 20;

    const script = document.createElement("script");
    script.src = "./script.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [address]);
  return (
    <div
      id="world"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "#cefaeb",
        overflow: "hidden",
      }}
    />
  );
};

export default TreeAnimationPage;
