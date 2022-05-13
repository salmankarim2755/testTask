import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme, Box, SxProps } from "@mui/material/";

interface inputProps {
  icon?: boolean;
  placeholder: string;
  sx?: SxProps;
  onChange?: (e: any) => void;
}

export default function SearchInput({
  icon,
  placeholder,
  sx,
  onChange,
}: inputProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: "10px",
        backgroundColor: theme.palette.info.main,
        ...sx,
      }}
    >
      {icon && (
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      )}

      <InputBase
        onChange={onChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
      />
    </Box>
  );
}
