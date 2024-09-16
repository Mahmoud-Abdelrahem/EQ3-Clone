import { Card, CardMedia, CardContent, Typography } from '@mui/material';

function CustomCard({ img, title, alt }) {
    return (
        <Card sx={{ padding: "20px" , backgroundColor: " #f3f3f3 " , height: "100%" , width: "100%" }} >
            <CardMedia sx={{ padding: "50px" }}
                component="img"
                image={img}
                alt={alt}
            />
            <CardContent>
                <Typography sx={{ textAlign: "center" , fontSize: "15px" , marginTop: "20px" }}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CustomCard;
