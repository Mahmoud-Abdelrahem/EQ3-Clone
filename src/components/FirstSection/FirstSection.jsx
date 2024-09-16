import { Box } from "@mui/system";
import { Typography } from "@mui/material";
function FirstSection() {
    return (
        <Box
            sx={{
                padding: "30px", 
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                color: "white"
            }}
        >
            <img
                src={"src/assets/section.jpeg"}
                style={{
                    width: "100%", 
                    height: "auto", 
                }}
                alt="new"
                loading="lazy"
            />
            <Typography sx={{ position: "absolute" , fontSize: "30px" , fontWeight: "bold" , paddingBottom: "5%" }} >Labour Day : Enjoy 20% Off EQ3</Typography>
            <Typography sx={{ position: "absolute" , fontSize: "17px" , paddingBottom: "2%" }} >Save on designs made with longevity in mind. Now until September 3rd.</Typography> 
        </Box>
    );
}

export default FirstSection;
