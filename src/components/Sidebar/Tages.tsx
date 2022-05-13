import { Box, styled, useTheme } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";

const List = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "poiter",
  justifyContent: "space-between",
  padding: ".5em",
  "& .deletIcon": {
    opacity: "0",
  },

  "&:hover": {
    backgroundColor: theme.palette.green[1],
    "& .deletIcon": {
      opacity: "1",
    },
  },
}));
const Tages = (props: { title: string; index: number; lastIndex: string }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor:
          props.index % 2 == 0 ? theme.palette.info.main : "#fff",
        borderTopRightRadius: props.index === 0 ? "10px" : "0px",
        borderTopLeftRadius: props.index === 0 ? "10px" : "0px",
        borderBottomRightRadius: !props.lastIndex ? "10px" : "0px",
        borderBottomLeftRadius: !props.lastIndex ? "10px" : "0px",
      }}
    >
      <List>
        <Box>
          <Typography variant="body1">{props.title}</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <DeleteIcon
            sx={{ color: theme.palette.error.main, marginRight: "0.5em" }}
            className="deletIcon"
          />
          <CheckCircleIcon sx={{ color: theme.palette.green[0] }} />
        </Box>
      </List>
    </Box>
  );
};

export default Tages;
