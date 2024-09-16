import React from "react";
import { Box, Grid } from "@mui/material";
import CustomCard from "../Card/Card";
import { Typography } from "@mui/material";

function SecondSection() {
  const itemData = [
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F63ead2f2-2ee2-4f9c-b3f9-c734c479a305.png&w=2160&q=75",
      title: "Ready to Ship Upholstery",
      alt: "Beige Sofa. Link to ready ship category",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2Fb53cceff-1cfe-4bc8-ae38-6db8041bc35a.png&w=2160&q=75",
      title: "Dining",
      alt: "solid wood table and bench shown. Link to dining",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2Ffd37b43b-990a-433b-874e-c1998333a4da.png&w=2160&q=75",
      title: "Storage Beds",
      alt: "walnut drawer bed is shown. Link to storage beds",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F6e6cf6d2-5d45-45f9-9f45-a5c8c450721e.png&w=2160&q=75",
      title: "Lighting",
      alt: "black table lamp is shown. Link to lighting",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2Fb8eeea1e-5646-4a50-8254-09e1f0015e72.png&w=2160&q=75",
      title: "Accent Tables",
      alt: "Oak coffee table. Link to accent table category",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F5cbbca9e-a093-41ed-b0be-89184ee49ed5.png&w=2160&q=75",
      title: "Rugs",
      alt: "brown rug is shown. Link to rug category",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F0e127cf1-e932-4138-bf17-2949793f63c8.png&w=2160&q=75",
      title: "Bar & Counter Stools",
      alt: "two stools. Link to counter stools",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F38e9c17f-d789-4196-89d6-d7403c92a148.png&w=2160&q=75",
      title: "Accent Stools",
      alt: "Terracotta stools. Link to stools",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F82dd721b-79ff-465d-8772-1bc8b9ab90a9.png&w=2160&q=75",
      title: "Accessories",
      alt: "vases are shown. Link to accessories category",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F1fef41ce-1919-498e-9956-06ead3c01c74.png&w=2160&q=75",
      title: "Accent Chairs",
      alt: "light-brown-leather-chair",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F57123820-604a-4dab-ad65-ec693e378c85.png&w=2160&q=75",
      title: "Outdoor",
      alt: "black outdoor chair and table. Link to outdoor",
    },
    {
      img: "https://www.eq3.com/_next/image?url=https%3A%2F%2Fimages.eq3.com%2Fhomepage%2FCA_EN%2Ffeatured-category%2F6a9e69cb-58ba-4c96-9585-0f7998a241c1.png&w=2160&q=75",
      title: "Media & Storage",
      alt: "media unit is shown. Link to media storage",
    },
  ];

  return (
    <Box sx={{ width: "95%", margin: "auto" }}>
      <Typography
        variant="h4"
        sx={{ textTransform: "uppercase", margin: "20px 0px" }}
      >
        Shop by Category
      </Typography>
      <Grid container spacing={1}>
        {itemData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <CustomCard img={item.img} title={item.title} alt={item.alt} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SecondSection;
