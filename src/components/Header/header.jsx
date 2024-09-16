import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Typography from "@mui/material/Typography";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";

function Header() {
  return (
    <>
      <Box sx={{ padding: "10px", display: "flex" }}>
        <h1>EQ3</h1>
        <Box sx={{ display: "flex", marginLeft: "auto", marginTop: "8px"  }}>
          <LocationOnOutlinedIcon
            sx={{ fontSize: "25px", marginLeft: "auto" , marginRight: "20px" , cursor: "pointer" }}
          />
          <HelpOutlineIcon sx={{ fontSize: "25px", marginLeft: "15px" , marginRight: "20px" , cursor: "pointer" }} />
          <FavoriteBorderIcon sx={{ fontSize: "25px", marginLeft: "15px" , marginRight: "20px" , cursor: "pointer" }} />
          <Box sx={{ display: "flex" , marginRight: "20px" , cursor: "pointer" }}>
            <PersonOutlineOutlinedIcon
              sx={{ fontSize: "25px", marginLeft: "30px" }}
            />
            <Typography sx={{ marginLeft: "7px" }}>
              Join/Login to EQ3
            </Typography>
          </Box>
          <Box sx={{ display: "flex" , marginRight: "20px" , cursor: "pointer" }}>
            <LanguageOutlinedIcon
              sx={{ fontSize: "25px", marginLeft: "30px" }}
            />
            <Typography sx={{ marginLeft: "7px" }}>EN / CAD</Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          sx={{ marginLeft: "20px", color: "black", borderColor: "black" , marginRight: "20px"}}
          startIcon={<ShoppingCartOutlinedIcon />}
        >
          Cart(0)
        </Button>
      </Box>
      <Divider />
    </>
  );
}

export default Header;
