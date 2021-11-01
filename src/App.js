import { Box, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Feedbar from "./components/Feedbar";
import Rightbar from "./components/Rightbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Grid container>
        <Grid item sm={11}>
          <Feedbar />
        </Grid>
        <Grid item sm={1}>
          <Rightbar />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default App;
