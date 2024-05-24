import React, { useRef, useState } from "react";
import {
    Button,
    Card,
    Grid,
    IconButton,
    InputLabel,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { createCategory } from "../../../action/catgoryAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uploadimg from "../../icon/image.png"

const CategoryForm = () => {
    const [category, setCategory] = useState({
        title: "",
        description: "",
        image: null
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!category.title || !category.description) {
            toast.error("Please fill all required fields");
            return;
        }
        dispatch(createCategory(category));
        setCategory({
            title: "",
            description: "",
            image: null,
        });
        toast.success("Category added successfully");
    };

    const fileInputRef = useRef(null);

    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const maxSize = 300 * 1024;
        if (file) {
            if (file.size > maxSize) {
                toast.error("Image size exceeds 300KB");
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setCategory((prevState) => ({
                    ...prevState,
                    image: reader.result,
                }));
            };
        }
    };
    const handleRemoveImage = () => {
        setCategory((prevState) => ({
            ...prevState,
            image: null,
        }));
    };

    return (
        <>
            <Grid container style={{ marginTop: "20px" }} component="form" onSubmit={handleSubmit}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card
                        variant="outlined"
                        style={{ padding: "30px", margin: "15px", borderRadius: "20px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} style={{ marginBottom: "5px" }}>
                                <Stack spacing={1}>
                                    <InputLabel
                                        htmlFor="categoryTitle"
                                        style={{ marginBottom: "5px", fontSize: "12px", color: "rgb(119 96 236)" }}
                                    >
                                        Category Title<span style={{ color: "#f44336" }}>*</span>
                                    </InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        label="Category Title"
                                        id="categoryTitle"
                                        name="title"
                                        variant="outlined"
                                        value={category.title}
                                        onChange={handleChange}
                                        InputProps={{
                                            style: { borderColor: "#c4c4c4" },
                                        }}
                                        InputLabelProps={{
                                            style: { fontSize: "16px" },
                                        }}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel
                                        htmlFor="description"
                                        style={{ marginBottom: "5px", fontSize: "12px", color: "rgb(119 96 236)" }}
                                    >
                                        Description<span style={{ color: "#f44336" }}>*</span>
                                    </InputLabel>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        size="small"
                                        label="Description"
                                        id="description"
                                        name="description"
                                        variant="outlined"
                                        value={category.description}
                                        onChange={handleChange}
                                        InputProps={{
                                            style: { borderColor: "#c4c4c4" },
                                        }}
                                        InputLabelProps={{
                                            style: { fontSize: "16px" },
                                        }}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Card
                        variant="outlined"
                        style={{
                            borderRadius: "20px",
                            padding: "4px",
                            margin: "14px",
                            height: "284px",
                            width: "98%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px"

                        }}
                    >
                        {category.image ? (
                            <>
                                <img src={category.image} alt="Uploaded" style={{ height: "160px", marginBottom: "10px" }} />
                                <Button onClick={handleRemoveImage} variant="outlined" color="secondary">
                                    Remove Image
                                </Button>
                            </>
                        ) : (
                            <>
                                <Typography variant="h6" style={{ marginBottom: "2px", color: "rgb(119 96 236)", fontSize: "12px" }}>
                                    Upload Image
                                </Typography>
                                <Card
                                    variant="outlined"
                                    style={{
                                        padding: "20px",
                                        margin: "10px",
                                        height: "160px",
                                        border: "2px rgb(119 96 236) dashed",
                                        width: "200px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleFileChange}
                                    />
                                    <IconButton onClick={handleUploadButtonClick} color="primary">
                                        <img
                                            style={{
                                                height: "100px"
                                            }}
                                            src={uploadimg} alt="upload img" />
                                    </IconButton>
                                </Card>
                            </>
                        )}
                    </Card>
                    <Grid item lg={12} sm={12} xs={12} md={12} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                        <Button type="submit" variant="contained" color="primary" style={{
                            background: "rgb(132, 108, 249)", padding: "12px 34px", borderRadius: "10px"
                        }} disabled={!category.title || !category.description || !category.image}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default CategoryForm;
