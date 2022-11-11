import { ADD_CONTACTS, DELETE_CONTACTS, EDIT_CONTACTS, FETCH_CONTACTS, GET_CONTACT_BY_ID } from "./actionType"

const getContacts = (contacts) => {
    return {
        type: FETCH_CONTACTS,
        payload: contacts
    }
}

const removeContact = () => {
    return {
        type: DELETE_CONTACTS
    }
}

const addNewContact = () =>({
    type: ADD_CONTACTS
});

const editContact = () => ({
    type: EDIT_CONTACTS
});

const getContactById = (contact) => ({
    type: GET_CONTACT_BY_ID,
    payload: contact
});

export const fetchContacts = () => {
    return function(dispatch){
        fetch("http://localhost:5000/contactsList", {method : 'GET' })
        .then((res) => res.json())
        .then((data) => {
            dispatch(getContacts(data));
        },(error) => {
            console.log(error);
        })
    }
}

export const deleteContact = (id) => {
    return function(dispatch){
        fetch("http://localhost:5000/contactsList/"+id, {method : 'DELETE' })
        .then((res) => res.json())
        .then((data) => {
            dispatch(removeContact());
            dispatch(fetchContacts());
        },(error) => {
            console.log(error);
        })
    }
}

export const addContact = (contact) => {
    return function (dispatch) {
        fetch("http://localhost:5000/contactsList", { 
            method: 'post', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(contact)
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
            dispatch(addNewContact());
        },(error) => {
            console.log(error);
        });
    }
}

export const updateContact = (id, contact) => {
    return function (dispatch) {
        fetch("http://localhost:5000/contactsList/"+id, { 
            method: 'put', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(contact)
        }).then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
            dispatch(editContact());
        },(error) => {
            console.log(error);
        });
    }
}

export const fetchSingleContact = (id) => {
    return function(dispatch){
        console.log(id);
        fetch("http://localhost:5000/contactsList/"+id, {method : 'GET' })
        .then((res) => res.json())
        .then((data) => {
            dispatch(getContactById(data));
        },(error) => {
            console.log(error);
        })
    }
}