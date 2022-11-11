import React, { useEffect, useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/actions/action';
import { useNavigate} from "react-router-dom";
import { Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
return { name, calories, fat, carbs, protein };
}

const rows = [
createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
createData('Eclair', 262, 16.0, 24, 6.0),
createData('Cupcake', 305, 3.7, 67, 4.3),
createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 900,
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row-reverse"
    }
}));

const ViewContacts = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {contactList} = useSelector(state => state.contactList);

    useEffect(()=> {
        dispatch(fetchContacts());
    },[]);

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <div>
            <div style={{display:"flex", flexDirection: "row-reverse", marginRight: "130px"}}>
                <h3>Click Here to Add New Contact : 
                <Button
                    style={{marginTop:"10px", marginLeft:"10px"}} 
                    variant="contained" 
                    color="primary" 
                    onClick={() => navigate("/addcontact")}
                >Add Contact</Button>
                </h3>
            </div>
            <TableContainer style={{margin:"auto", marginTop:"10px", width: "1300px"}} component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>Sr. No.</StyledTableCell>
                        <StyledTableCell align="center">Full Name</StyledTableCell>
                        <StyledTableCell align="center">Email ID</StyledTableCell>
                        <StyledTableCell align="center">Contact No.</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {contactList.map((contact) => (
                        <StyledTableRow key={contact.id}>
                        <StyledTableCell component="th" scope="row">
                            {contact.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">{contact.name}</StyledTableCell>
                        <StyledTableCell align="center">{contact.email}</StyledTableCell>
                        <StyledTableCell align="center">{contact.contact}</StyledTableCell>
                        <StyledTableCell align="center">                        
                            <IconButton variant="contained" color="primary" aria-label="view" onClick={() => navigate("/editcontact/"+contact.id)}>
                                <CreateIcon variant="contained" />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(contact.id)} color="secondary" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ViewContacts
