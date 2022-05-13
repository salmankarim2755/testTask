import { useState, useEffect, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import { Box, useTheme, Typography, Grid } from "@mui/material/";
import SearchInput from "../components/UIComponents/textFeald";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "../components/UIComponents/Button";
import User from "../components/User";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import UseGetContacts from "../hooks/useGetContacts";
import { userProps } from "../components/User";
import useDebounce from "../utils/useDebounce";

function GetSortOrder(prop: string): any {
  return function (
    a: { [x: string]: number },
    b: { [x: string]: number }
  ): any {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}

const Index = () => {
  const theme = useTheme();

  const { getContacts, data, error } = UseGetContacts();
  const getContactsQuery: (e: string) => void = useCallback(
    useDebounce((search: string) => getContacts(search), 500),
    []
  );
  const [search, setSearch] = useState("");
  data?.contacts.sort(GetSortOrder("name"));

  useEffect(() => {
    getContactsQuery(search);
  }, [search]);
  return (
    <Box>
      <Grid container rowSpacing={0}>
        <Grid item xs={2.5}>
          <Box>
            <Sidebar />
          </Box>
        </Grid>
        <Grid item xs={9.5}>
          <Box m={2}>
            <Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="h5"
                  sx={{ display: "flex", fontWeight: 600 }}
                >
                  All Contacts{" "}
                  <span style={{ marginLeft: "0.2em" }}>
                    {" "}
                    <Typography sx={{ fontWeight: 600 }} variant="h5">
                      {" "}
                      (100)
                    </Typography>
                  </span>
                </Typography>
                <AddCircleIcon sx={{ color: theme.palette.primary.main }} />
              </Box>
              <Box mt={3}>
                <SearchInput
                  icon={true}
                  placeholder={"Search Contact"}
                  sx={{ borderRadius: "20px" }}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Box>
              <Box
                my={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex">
                  <CheckCircleIcon
                    sx={{
                      color: theme.palette.info.dark,
                      height: "25px",
                      marginRight: "0.5em",
                    }}
                  />
                  <Typography variant="body1" sx={{ fontWeight: "600" }}>
                    Select All
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      textTransform: "none",
                      backgroundColor: "primary",
                      padding: "8px 17px",
                    }}
                    fullWidth
                  >
                    <Typography variant="caption"> Export All </Typography>
                  </Button>
                </Box>
              </Box>
              <Box sx={{ height: "70vh", overflowY: "scroll" }}>
                {data?.contacts?.map((item: userProps, index: number) => {
                  return (
                    <User
                      name={item?.name}
                      phoneNumber={item?.phoneNumber}
                      index={index}
                      img={""}
                      tags={item.tags}
                      number={""}
                      letter={data?.contacts![index - 1]?.name![0] || ""}
                    />
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
