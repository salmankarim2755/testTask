import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import TextFeald from "../UIComponents/textFeald";

const Message = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextFeald placeholder={"Min"} sx={{ height: "40px" }} />
        </Grid>
        <Grid item xs={6}>
          <TextFeald placeholder={"Max"} sx={{ height: "40px" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Message;
