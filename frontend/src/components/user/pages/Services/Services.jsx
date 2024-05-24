import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import Navigation from '../../inc/navigationBar/navigation';
import mensSaloon from "../../../../assets/mensSaloon.jpg";
import womenSaloon from "../../../../assets/womensSaloon.jpg";
import FurnitureRepair from "../../../../assets/FurnitureRepair.jpg";
import houseClean from "../../../../assets/house clean.jpg";
import "../Services/Services.css"
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubCetegory } from '../../../../action/subCategory';
import BookingCheckOut from '../BookingsCheckOut/booking';


const images = [
    { src: mensSaloon, title: "Men's Salon" },
    { src: womenSaloon, title: "Women's Salon" },
    { src: FurnitureRepair, title: "Furniture Repair" },
    { src: houseClean, title: "House Cleaning" },
];
const Services = () => {
    const dispatch = useDispatch();
    const [subcategory, setSubcategory] = useState('');
    const { fetchAllSubCategory } = useSelector((state) => state.fetchAllSubCategory);
    console.log(fetchAllSubCategory, "kkk")
    const { id } = useParams();
    const location = useLocation();
    console.log(location, "location")
    const { obj } = location.state || {};
    console.log(obj, "categoryObject")

    useEffect(() => {
        dispatch(fetchSubCetegory(id));
    }, [dispatch, id]);
    useEffect(() => {
        if (fetchAllSubCategory) {
            setSubcategory(fetchAllSubCategory);
        }
    }, [fetchAllSubCategory]);

    return (
        <>
            <Navigation />
            <div className="Service-mob-pd" style={{ padding: "25px" }}>
                <Grid container spacing={1}>
                    {subcategory?.getsubcategory?.map((subcategory, index) => (
                        <Grid key={index} item xs={4} md={3} sm={3}>
                            <Card
                                className="services-mob-style"
                                elevation={0}
                                style={{
                                    borderRadius: "5px",
                                    height: "180px",
                                    background: "lightpink",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={subcategory.image}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Card>
                            <Typography
                                style={{ color: "grey", fontSize: "15px", padding: "5px" }}
                                className="cus-bottom-title"
                            >
                                {subcategory.SubcategoryTitle}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <BookingCheckOut/>
        </>


    )
}

export default Services