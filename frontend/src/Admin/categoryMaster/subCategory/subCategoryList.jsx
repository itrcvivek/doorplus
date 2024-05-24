import React, { useEffect, useState } from "react";
import { Table, InputLabel, MenuItem, Select, Stack, Grid, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchBar from "../../sidebar/searchbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCategory } from "../../../action/catgoryAction";
import { useDispatch, useSelector } from "react-redux";
import { deleteSubCategory, fetchSubCetegory, updateSubCategory } from "../../../action/subCategory";



const SubcategoryList = () => {
    const { getAllCategory } = useSelector((state) => state.getAllCategory);
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const { fetchAllSubCategory } = useSelector((state) => state.fetchAllSubCategory);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [subCategoryDelete, setsubCategoryDelete] = useState(0);
    const [editSubCategory , setEditSubCategory] = useState({});
    const [openEditModal, setOpenEditModal] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);

    const handleCategoryChange = (event) => {
        setSelectedCategoryId(event.target.value);
    };

    useEffect(() => {
        if (selectedCategoryId) {
            dispatch(fetchSubCetegory(selectedCategoryId));
        }
    }, [dispatch, selectedCategoryId]);
    // debugger
    const handleDelete = (_id) => {
        setOpenDeleteDialog(true);
        setsubCategoryDelete(_id)
    };

    const handleConfirmDelete = async () => {
        setOpenDeleteDialog(false);
        await dispatch(deleteSubCategory(subCategoryDelete));
        // dispatch(fetchSubCetegory());
        // toast.error("Category deleted successfully")
    };
    const handleCancelDelete = () => {
        setOpenDeleteDialog(false);
    };

    const formatDate = (date) => {
        const formattedDate = new Date(date).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour12: true
        });
        return formattedDate;
    };

    const handleChangedescription = (e) => {
        setEditSubCategory({ ...editSubCategory, description: e.target.value });
    };
    const handleChangetitle = (e) => {
        setEditSubCategory({ ...editSubCategory, SubcategoryTitle: e.target.value });
    };
    const handleEdit = (subcategory) => {
        setEditSubCategory(subcategory);
        setOpenEditModal(true);
    };
    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    };
    const handleSaveEdit = () => {
        dispatch(updateSubCategory(editSubCategory))
        setOpenEditModal(false);
        toast.success("Sub Category updated successfully");
    };

    return (
        <>
            <Box height={15} />
            <Grid container spacing={2}>
                <Grid item md={12} lg={4} sm={12}>
                    <Stack spacing={1}>
                        <InputLabel
                            htmlFor="subcategory"
                            style={{ marginBottom: "5px", fontSize: "12px", color: "rgb(119 96 236)" }}
                        >
                            select Category<span style={{ color: "#f44336" }}>*</span>
                        </InputLabel>
                        <Select
                            style={{
                                background: "white",
                                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                            }}
                            value={selectedCategoryId}
                            onChange={handleCategoryChange}
                            fullWidth
                            variant="outlined"
                            displayEmpty
                            inputProps={{
                                style: { borderColor: "#c4c4c4" },
                            }}
                        >
                            <MenuItem value="">
                                Select Subcategory
                            </MenuItem>
                            {
                                getAllCategory?.categories?.map((item) => (
                                    <MenuItem value={item._id}
                                        key={item._id}>{item.title}</MenuItem>
                                ))
                            }
                        </Select>
                    </Stack>
                </Grid>
            </Grid>

            <Paper style={{
                boxShadow: "none",
                padding: "29px",
                marginTop: "15px",
                borderRadius: "10px",
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
            }}>
                <Table>
                    <TableHead style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', color: 'white', borderBottom: '1px solid #dbdbdb', }}>
                        <TableRow>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize", }}>Serial Number</TableCell>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize" }}>SubCategory Name</TableCell>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize" }}>Description</TableCell>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize" }}>Image</TableCell>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize" }}>created Date</TableCell>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fetchAllSubCategory?.getsubcategory?.map((subcategory, index) => (
                            <TableRow key={subcategory._id} style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #dbdbdb' }}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell style={{ textTransform: "capitalize" ,}}>{subcategory.SubcategoryTitle}</TableCell>
                                <TableCell style={{ textTransform: "capitalize" ,}}>{subcategory.description}</TableCell>
                                <TableCell><img src={subcategory.image} style={{ width: '50px', height: '50px' }} /></TableCell>
                                <TableCell style={{ textTransform: "capitalize" ,}}>{formatDate(subcategory.createdAt)}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="edit" style={{ color: 'green' }}  onClick={() => handleEdit(subcategory)}>
                                        <EditIcon style={{ fontSize: "19px" }} />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => handleDelete(subcategory._id)} style={{ color: 'red' }}>
                                        <DeleteIcon style={{ fontSize: "19px" }} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <Dialog
                style={{ marginLeft: "36px" }}
                open={openDeleteDialog}
                onClose={handleCancelDelete}
                fullWidth
            maxWidth="xs" 
            >
                <DialogTitle style={{   background: "linear-gradient(250.38deg, rgb(213 210 255) 2.39%, rgb(79 64 215) 34.42%, rgb(114, 101, 230) 60.95%, rgb(89 75 219) 84.83%, rgb(13 0 159) 104.37%)", color: 'white' }}>Delete Confirmation</DialogTitle>
                <DialogContent style={{ marginTop: "20px" }}>
                    Are you sure you want to delete this item?
                </DialogContent>
                <DialogActions style={{ padding: "20px" }}>
                    <Button startIcon={<ClearOutlinedIcon />} onClick={handleCancelDelete} style={{ backgroundColor: '#846cf9', color: 'white', fontSize: "12px", textTransform: "capitalize" }}>
                        Cancel
                    </Button>
                    <Button startIcon={<DeleteIcon />} onClick={handleConfirmDelete} style={{ backgroundColor: 'red', color: 'white', fontSize: "12px", textTransform: "capitalize" }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openEditModal}
                onClose={handleCloseEditModal}
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle>Edit Sub Category</DialogTitle>
                <DialogContent>

                    <TextField
                        label="Category Name"
                        value={editSubCategory.SubcategoryTitle}
                        onChange={handleChangetitle}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        value={editSubCategory.description}
                        onChange={handleChangedescription}
                        fullWidth
                        margin="normal"
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCloseEditModal} style={{ backgroundColor: '#846cf9', color: 'white', fontSize: "12px", textTransform: "capitalize" }}>
                        Cancel
                    </Button>
                    <Button onClick={handleSaveEdit} style={{ backgroundColor: 'green', color: 'white', fontSize: "12px", textTransform: "capitalize" }}>
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
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
}

export default SubcategoryList;
