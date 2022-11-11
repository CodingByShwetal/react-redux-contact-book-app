import { DELETE_CONTACTS, FETCH_CONTACTS, ADD_CONTACTS, GET_CONTACT_BY_ID } from "../actions/actionType"

const initialState = {
    contactList : [],
    contactDetails:{},
    isLoading: true
}


const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CONTACTS: 
            return {
                ...state,
                contactList : action.payload,
                isLoading : false
            }
        case DELETE_CONTACTS:
            return {
                ...state
            }
        case ADD_CONTACTS:
            return {
                ...state
            }
        case GET_CONTACT_BY_ID:
            return {
                ...state,
                contactDetails: action.payload
        }
        default : 
            return {...state}
    }
}

export default contactReducer;