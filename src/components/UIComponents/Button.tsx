import React from "react";

import {
  Box,
  styled,
  Button as MUIButton,
  ButtonProps,
  useTheme,
} from "@mui/material/";
const CustomButton = styled(MUIButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "10px",
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Button = (
  props: React.PropsWithChildren<ButtonProps>,
  icons?: boolean
) => {
  const theme = useTheme();
  return <CustomButton {...props}>{props.children}</CustomButton>;
};

export default Button;
