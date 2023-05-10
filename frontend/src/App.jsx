import React from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { Link } from "react-scroll";
import Calculator from "./Calculator.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: green[900],
    },
  },
});

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          bgcolor: green[50],
          backgroundImage:
            "linear-gradient(45deg, rgba(0,200,83,0.5) 0%, rgba(0,128,128,0.5) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            margin: 3,
            marginBottom: 0,
          }}
        >
          Get rewarded for offsetting your footprint
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{
            margin: 3,
            marginBottom: 2,
          }}
        >
          Join our Discord community of people who are living carbon free.
          Unlock reward prizes by staying carbon free!
        </Typography>
        <Link to="calculator" smooth duration={500}>
          <Button variant="contained" color="secondary" size="large">
            Calculate Your Carbon Footprint
          </Button>
        </Link>
      </Box>

      <Calculator />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            marginTop: 3,
          }}
        >
          Our Methodology and Sources
        </Typography>
        {/* Add your sources here with bullet points*/}
        <Typography
          variant="body1"
          sx={{
            marginBottom: 3,
            marginLeft: 3,
            marginRight: 3,
          }}
        >
          <ul>
            <li>
              Utilities Calculations:{" "}
              <a href="https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references">
                EPA Greenhouse Gas Calculations
              </a>
            </li>
            <li>
              Computing:{" "}
              <a href="https://images.apple.com/environment/pdf/products/iphone/iPhone_X_PER_sept2017.pdf">
                Apple Environmental Report
              </a>{" "}
              and{" "}
              <a href="https://www.amazon.co.uk/gp/product/1846688914/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=1846688914&linkCode=as2&tag=flabble-21">
                How Bad are Bananas?: The Carbon Footprint of Everything Book
              </a>
            </li>
            <li>
              Diet:{" "}
              <a href="https://link.springer.com/article/10.1007/s10584-014-1169-1">
                Springer Journal
              </a>{" "}
              and{" "}
              <a href="https://www.amazon.co.uk/gp/product/1846688914/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=1846688914&linkCode=as2&tag=flabble-21">
                How Bad are Bananas?: The Carbon Footprint of Everything Book
              </a>
            </li>
            <li>
              Delivery:{" "}
              <a href="https://link.springer.com/article/10.1007/s10584-014-1169-1">
                Springer Journal
              </a>{" "}
              and{" "}
              <a href="https://www.amazon.co.uk/gp/product/1846688914/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=1846688914&linkCode=as2&tag=flabble-21">
                How Bad are Bananas?: The Carbon Footprint of Everything Book
              </a>
            </li>
            <li>
              Transportation/Travel Calculations:{" "}
              <a href="https://www.forbes.com/2008/04/15/green-carbon-living-forbeslife-cx_ls_0415carbon.html#1f3715d01852">
                The Environment Equation Book
              </a>{" "}
              and{" "}
              <a href="https://www.amazon.co.uk/gp/product/1846688914/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=1846688914&linkCode=as2&tag=flabble-21">
                How Bad are Bananas?: The Carbon Footprint of Everything Book
              </a>
            </li>
          </ul>
          <p>
            We also added 2 for unavoidable factors in diet, government support,
            and others. We will continue to update this calculator with more
            accurate data and keep all the code and calculations open source.
            Most of the default values are based on averages in the US.
          </p>
          <p>
            We calculate your yearly carbon footprint and let you offset it
            monthly. Note, the average carbon footprint for someone in the US is
            16 tons per year.
          </p>
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">{/* Add your header here */}</header>
      <main>
        <LandingPage />
        {/* Add more sections of your site here */}
      </main>
    </div>
  );
}

export default App;
