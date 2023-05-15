import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCelo } from "@celo/react-celo";
import Typography from "@mui/material/Typography";

const TreeAnimationPage = () => {
  const { link } = useParams();
  const { connect, address } = useCelo();
  const [found, setFound] = useState(false);
  useEffect(() => {
    console.log(`Current address: ${address}`);
    console.log(`Current link: ${link}`);
    /*const toucan = new ToucanClient("celo");
    toucan.fetchUserRetirements(address).then((retirements) => {
      console.log(retirements);
    });*/

    // Check if the script is already loaded
    window.frac = 1;
    window.nTrees = 100;
    let script = document.getElementById("myScript");
    if (!script) {
      script = document.createElement("script");
      script.id = "myScript";
      script.src = "/script.js";
      script.async = true;

      document.body.appendChild(script);
    }
    setFound(true);
    return () => {
      // Remove script when unmounting
      const script = document.getElementById("myScript");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [address, link]);

  if (found) {
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
  }
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        background: "#cefaeb",
        overflow: "hidden",
        color: "black",
      }}
    >
      <Typography variant="h4" component="div" gutterBottom>
        Not Found
      </Typography>
    </div>
  );
};

export default TreeAnimationPage;
