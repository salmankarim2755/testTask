import { Box } from "@mui/material";
import theme from "./theme";
import Pages from "./Pages";
import { ThemeProvider } from "@mui/material";

function App(): any {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Pages />
      </Box>
    </ThemeProvider>
  );
}

export default App;
