import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useNavigate, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleContact, updateContact } from '../redux/actions/action';

const useStyles = makeStyles((theme) => ({
    root: {
       marginTop:10, 
      '& > *': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
}));

const EditContact = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {contactDetails} = useSelector(state => state.contactList);
    const [state, setState] = useState({
        name : "",
        email : "",
        contact : ""
    });

    const [error, setError] = useState("");

    const handleInputChange = (e) =>{
        let {name, value} = e.target;
        setState({...state, [name] : value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!name || !contact || !email) {
            setError("Please enter all fields");
        }
        else{
            dispatch(updateContact(id,state));
            navigate("/");
            setError("");
        }
    }

    useEffect(() => {
        dispatch(fetchSingleContact(id));
    }, []);

    useEffect(() => {
        if(contactDetails){
            setState({...contactDetails});
        }
    }, [contactDetails]);

    const {name, contact, email} = state;
    const {id} = useParams();
    return (
        <div>
            <Button 
                style={{width:"200px", marginTop:"10px", marginLeft: "10px", display:"flex", flexDirection: "row-reverse", marginRight: "130px"}} 
                variant="contained" 
                onClick={() => navigate("/")}
            >
                Go Back To Home
            </Button>
            <h2>Update Existing Contact</h2>
            {error && <h3 style={{color: "red"}}>{error}</h3>}
            <form className={classes.root} onSubmit={ handleSubmit} noValidate autoComplete="off">
                <TextField id="standard-basic"
                    label="Full Name" 
                    value={name} 
                    name="name" 
                    type="text"
                    onChange={handleInputChange}
                /><br/>
                <TextField 
                    id="standard-basic" 
                    label="Email Id" 
                    value={email} 
                    name="email" 
                    type="email"
                    onChange={handleInputChange}
                /><br/>
                <TextField 
                    id="standard-basic" 
                    label="Contact No" 
                    value={contact} 
                    name="contact"
                    type="number"
                    onChange={handleInputChange}
                /><br/>
                <Button 
                    style={{width:"100px"}} 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                >
                    Update
                </Button>
            </form>
        </div>
    )
}

export default EditContact
