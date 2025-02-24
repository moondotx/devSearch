import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main "`,
        lg: `"nav nav" " main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="main">
        <SearchBar />
      </GridItem>
    </Grid>
  );
}

export default App;
