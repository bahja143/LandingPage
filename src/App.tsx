import Header from "./Components/Header/Header";
import UpperBody from "./Components/Body/UpperBody";
import MiddleBody from "./Components/Body/MiddleBody";
import LowerBody from "./Components/Body/LowerBody";
import Footer from "./Components/Footer/Footer";
import { makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles(() => (
  {
    container: {
      background:"#e1ddd3"
    }
  }));

function App() {
  const classes = useStyles();

  return <> 
  <Container className={classes.container} maxWidth="xl">
    <Header/>
    <UpperBody />
    <MiddleBody />
    <LowerBody />
    <Footer />
  </Container>
  </>
}

export default App;
