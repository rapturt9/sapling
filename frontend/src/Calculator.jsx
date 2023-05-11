import { Box, Typography, Paper, TextField, Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Avatar, ConnectButton } from "web3uikit";
import { useMoralis, useWeb3Contract } from "react-moralis";

const day_year = 365.2425;
const week_year = 52.1775;
const km_to_mile = 0.621371;
const pound_kg = 0.453592;

const questions = {
  Utilities: [
    {
      name: "Monthly electricity KWh",
      default: 1000,
      scale: (1562.4 / 2204.6) * 0.001,
    },
    {
      name: "Monthly gas therms (amound used)",
      default: 80,
      scale: 0.0053,
    },
    {
      name: "People living in household",
      default: 2,
      scale: 1,
    },
  ],
  Computing: [
    {
      name: "Weekly hours on internet",
      default: 30,
      scale: (day_year * 0.000001 * 55) / 7,
    },
    {
      name: "Weekly hours on phone",
      default: 30,
      scale: 1250 / 1000 / 7,
    },
  ],
  Diet: [
    {
      name: "Weekly ounces of meat",
      default: 3,
      scale: (daily_kg_to_annual_tonnes(0.0268) * 28.3495) / 7,
    },
    {
      name: "Weekly ounces of cheese",
      default: 3,
      scale: (daily_kg_to_annual_tonnes(0.3) * 28.3495) / 7,
    },
    {
      name: "Weekly litres of milk",
      default: 7,
      scale: daily_kg_to_annual_tonnes(0.2677777) / 7,
    },
    {
      name: "Weekly eggs",
      default: 5,
      scale: daily_kg_to_annual_tonnes(0.012) / 7,
    },
  ],
  Transportation: [
    {
      name: "Weekly bus rides",
      default: 2,
      scale: annual_mile(0.00015),
    },
    {
      name: "Weekly train rides",
      default: 10,
      scale: annual_mile(0.00016),
    },
    {
      name: "Weekly uber/taxi rides",
      default: 1,
      scale: week_year * (1000000 / 810000000),
    },
    {
      name: "Weekly total km driven",
      default: 6,
      scale: (week_year * km_to_mile * 0.79 * pound_kg) / 1000,
    },
  ],
  Travel: [
    {
      name: "Annual flights > 4 hours",
      default: 2,
      scale: pound_to_tonnes(4400),
    },
    {
      name: "Annual flights < 4 hours",
      default: 2,
      scale: pound_to_tonnes(1100),
    },
    {
      name: "Annual train rides (> 4 hours)",
      default: 2,
      scale: 34.45 / 1000,
    },
    {
      name: "Annual coach bus rides (> 4 hours)",
      default: 4,
      scale: 33 / 1000,
    },
  ],
};

function daily_kg_to_annual_tonnes(kg) {
  let annual_kg = kg * day_year;
  let annual_tonnes = annual_kg / 1000;
  return annual_tonnes;
}

function annual_mile(trip) {
  return trip * 7.7 * week_year * km_to_mile;
}

function pound_to_tonnes(pounds) {
  return (pounds * pound_kg) / 1000;
}

export default function Calculator() {
  const [inputs, setInputs] = useState(questions);
  const [total, setTotal] = useState(0);
  const { account } = useMoralis();

  const handleInputChange = (section, question, value) => {
    // first convert the value to a number
    value = Number(value);
    if (!isNaN(value)) {
      let newInputs = { ...inputs };
      newInputs[section][question].default = value;
      setInputs(newInputs);
      console.log(inputs);
    }
  };

  useEffect(() => {
    let total = 2;
    for (const [section, questions] of Object.entries(inputs)) {
      let section = 0;
      for (const [question, data] of Object.entries(questions)) {
        if (data.name === "People living in household") {
          section /= data.default;
        } else {
          section += data.default * data.scale;
        }
      }
      total += section;
    }
    setTotal(Math.round(total * 10) / 10);
  }, [inputs]);

  return (
    <Box
      id="calculator"
      sx={{
        backgroundImage:
          "linear-gradient(45deg, rgba(0,200,83,0.5) 0%, rgba(0,128,128,0.5) 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: 3,
        position: "relative", // Add this line
      }}
    >
      <div
        style={{
          // Add this block
          position: "absolute",
          top: 0,
          right: 0,
          padding: 2,
          margin: 6,
          background: "white",
          color: "black",
          borderRadius: "8px",
        }}
      >
        <ConnectButton moralisAuth={false} />
      </div>
      <Paper
        elevation={3}
        sx={{
          marginTop: 4,
          width: "80%",
          padding: 3,
          backgroundColor: "#3A4C3D",
          color: "white",
        }}
      >
        {Object.entries(questions).map(([section, questions]) => (
          <Section
            key={section}
            title={section}
            questions={questions}
            onInputChange={handleInputChange}
          />
        ))}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: 3,
            gap: 2,
          }}
        >
          {/* show the total carbon footprint here */}
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Total Carbon Footprint: {total} tons CO2e / year
          </Typography>
          <Button
            disabled={account ? false : true}
            variant="contained"
            color="secondary"
            size="large"
          >
            {account ? "Offset Carbon and NFT 🌱" : "Connect Wallet firstgo"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

function Section({ title, questions, onInputChange }) {
  return (
    <Box
      sx={{
        marginBottom: 3,
        padding: 2,
        background: "rgba(255,255,255,0.1)",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {questions.map((question, i) => (
          <Grid item xs={12} sm={6} md={4} key={question.name}>
            <TextField
              fullWidth
              variant="outlined"
              label={question.name}
              defaultValue={question.default}
              onChange={(e) => onInputChange(title, i, e.target.value)}
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
