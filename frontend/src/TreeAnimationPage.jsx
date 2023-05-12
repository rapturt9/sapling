import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const TreeAnimationPage = () => {
  const { address } = useParams();
  useEffect(() => {
    console.log(`Current address: ${address}`);
    window.frac = 1;
    window.nTrees = 100;

    // Check if the script is already loaded
    let script = document.getElementById("myScript");
    if (!script) {
      script = document.createElement("script");
      script.id = "myScript";
      script.src = "/script.js";
      script.async = true;

      document.body.appendChild(script);
    }

    return () => {
      // Remove script when unmounting
      const script = document.getElementById("myScript");
      if (script) {
        document.body.removeChild(script);
      }
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
