import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';

function Nav() {

    

    const arr = ["Living" , "Dining" , "Bedroom" , "Hall" , "Kitchen" , "Outdoor", "Office" , "Lighting" , "Rugs" , "Brands" , "Sale" , "Gifts"];
    return ( 
        <>
        <Box sx={{ display: "flex" }} >
            {arr.map((el) => (
                <Typography sx={{ marginLeft: "35px" , cursor: "pointer" , marginTop: "10px" , "&:hover": { backgroundColor: "orange", color: "white", borderRadius: "5px" , padding: "5px"},  }} >{el}</Typography>
            ))}

            <Box sx={{ display: "flex" , marginLeft: "auto" , marginTop: "2px" , marginRight: "20px" , cursor: "pointer" , borderLeft: "1px solid gray" , padding: "5px" , width: "300px" }} >
            <Typography sx={{ color: "gray" , marginLeft: "10px" }} >Search</Typography>
            <SearchIcon  sx={{ marginLeft: "auto" }} />
            </Box>
        </Box>
        <Box sx={{ display: "flex" , padding: "8px" , marginTop: "5px" , width: "100%" , backgroundColor: "orange" }} >
            <Typography sx={{ margin:"auto" }} >Labour Day : Enjoy 20% Off EQ3 </Typography>
        </Box>
        </>
     );
}

export default Nav;