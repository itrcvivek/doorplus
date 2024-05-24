import React, { useEffect, useState } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getCategory, updateCategory } from "../../../action/catgoryAction";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchBar from "../../sidebar/searchbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CategoryDetails = () => {
    const dispatch = useDispatch();
    const { getAllCategory } = useSelector((state) => state.getAllCategory);
    const [categoryData, setCategoryData] = useState([]);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [filteredCategoryData, setFilteredCategoryData] = useState([]);
    const [catDelete, setCatDelete] = useState(0);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [editCategory, setEditCategory] = useState({});


    // get api function

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);
    useEffect(() => {
        if (getAllCategory) {
            setCategoryData(getAllCategory);
            setFilteredCategoryData(getAllCategory.categories);
        }
    }, [getAllCategory]);

    // delete data by id function

    const handleDelete = (_id) => {
        setOpenDeleteDialog(true);
        setCatDelete(_id);
    };

    const handleConfirmDelete = async () => {
        setOpenDeleteDialog(false);
        await dispatch(deleteCategory(catDelete));
        dispatch(getCategory());
        toast.error("Category deleted successfully");
    };

    const handleCancelDelete = () => {
        setOpenDeleteDialog(false);
    };

    // search function for data find

    const handleSearch = (query) => {
        const filteredData = categoryData.categories.filter(category => {
            const lowerCaseQuery = query.toLowerCase();
            return (
                category.title.toLowerCase().includes(lowerCaseQuery) ||
                category.description.toLowerCase().includes(lowerCaseQuery) ||
                formatDate(category.createdAt).toLowerCase().includes(lowerCaseQuery)
            );
        });
        setFilteredCategoryData(filteredData);
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

    //  update function for data update 

    const handleChangedescription = (e) => {
        setEditCategory({ ...editCategory, description: e.target.value });
    };
    const handleChangetitle = (e) => {
        setEditCategory({ ...editCategory, title: e.target.value });
    };
    const handleEdit = (category) => {
        console.log(category, "check")
        setEditCategory(category);
        setOpenEditModal(true);
    };
    const handleCloseEditModal = () => {
        setOpenEditModal(false);
    };
    const handleSaveEdit = () => {
        dispatch(updateCategory(editCategory))
        setOpenEditModal(false);
        // dispatch(getCategory());
        toast.success("Category updated successfully");
    };


    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <Paper style={{
                boxShadow: "none",
                padding: "29px",
                marginTop: "15px",
                borderRadius: "10px",
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
            }}>
                <Table>
                    <TableHead style={{ color: 'white', }}>
                        <TableRow>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize", }}>Serial Number</TableCell>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize" }}>Category Name</TableCell>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize" }}>Description</TableCell>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize" }}>Image</TableCell>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize" }}>created Date</TableCell>
                            <TableCell style={{ backgroundColor: 'rgb(132, 108, 249)', color: 'white', textTransform: "capitalize" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredCategoryData?.map((row, index) => (
                            <TableRow key={row._id} style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #dbdbdb' }}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell style={{ textTransform: "capitalize" }}>{row.title}</TableCell>
                                <TableCell style={{ textTransform: "capitalize" }}>{row.description}</TableCell>
                                <TableCell><img src={row.image} alt={row.categoryName} style={{ width: '50px', height: '50px' }} /></TableCell>
                                <TableCell style={{ textTransform: "capitalize" }}>{formatDate(row.createdAt)}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="edit" style={{ color: 'green' }} onClick={() => handleEdit(row)}>
                                        <EditIcon style={{ fontSize: "19px" }} />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => handleDelete(row._id)} style={{ color: 'red' }}>
                                        <DeleteIcon style={{ fontSize: "19px" }} />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
            <Dialog
                open={openDeleteDialog}
                onClose={handleCancelDelete}
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle style={{ background: "linear-gradient(250.38deg, rgb(213 210 255) 2.39%, rgb(79 64 215) 34.42%, rgb(114, 101, 230) 60.95%, rgb(89 75 219) 84.83%, rgb(13 0 159) 104.37%)", color: 'white' }}>Delete Confirmation</DialogTitle>
                <DialogContent style={{ marginTop: "20px" }}>
                    Are you sure you want to delete this item?
                </DialogContent>
                <DialogActions>
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
                <DialogTitle>Edit Category</DialogTitle>
                <DialogContent>

                    <TextField
                        label="Category Name"
                        value={editCategory.title}
                        onChange={handleChangetitle}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        value={editCategory.description}
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

export default CategoryDetails;
