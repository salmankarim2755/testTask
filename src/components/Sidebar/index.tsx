import SortIcon from "@mui/icons-material/Sort";
import { Box, useTheme } from "@mui/system";
import { Typography } from "@mui/material";
import Tages from "./Tages";
import Message from "./Message";
import Button from "../UIComponents/Button";

const TagesData = [
  {
    title: "Greetings",
  },
  {
    title: "Greetings",
  },
  {
    title: "has",
  },
];

const Sidebar = ({}) => {
  const theme = useTheme();
  return (
    <Box
      m={2}
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      height="95vh"
      minWidth="15rem"
    >
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <SortIcon style={{ marginRight: "16px" }} />
            <Typography sx={{ fontWeight: 600 }} variant="h5">
              Audience
            </Typography>
          </Box>

          <Typography
            variant="body1"
            color={theme.palette.info.dark}
            sx={{ marginTop: "6px" }}
          >
            {" "}
            100 Contacts
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1" sx={{ fontWeight: "600" }}>
            Include Tags:
          </Typography>
        </Box>
        <Box mt={1}>
          {TagesData.map((data, index) => (
            <Tages
              title={data.title}
              index={index}
              lastIndex={TagesData![index + 1]?.title}
            />
          ))}
        </Box>
        <Box mt={2}>
          <Typography variant="body1" sx={{ fontWeight: "600" }}>
            Exclude Tags:
          </Typography>
        </Box>
        <Box mt={1}>
          {TagesData.map((data, index) => (
            <Tages
              title={data.title}
              index={index}
              lastIndex={TagesData![index + 1]?.title}
            />
          ))}
        </Box>
        <Box mt={2}>
          <Typography variant="body1" sx={{ fontWeight: "600" }}>
            Message Sent:
          </Typography>
        </Box>
        <Box mt={1}>
          <Message />
        </Box>
        <Box mt={2}>
          <Typography variant="body1" sx={{ fontWeight: "600" }}>
            Message Received:
          </Typography>
        </Box>
        <Box mt={1}>
          <Message />
        </Box>
      </Box>
      <Box>
        <Button
          sx={{
            textTransform: "none",
            backgroundColor: "primary",
            padding: "8px 0px",
          }}
          fullWidth
        >
          <Typography variant="caption"> Save Filters </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;
