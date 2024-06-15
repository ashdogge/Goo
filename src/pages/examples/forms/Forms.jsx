import React, {useState} from "react";
import {Link} from "react-router-dom"
import ContactValidationInput from "../../../components/ContactValidationInput";
//import ContactInput from "../../../components/ContactInput";
import ContactOutput from "../../../components/ContactOutput";

export const Forms = () => {
/**
 * Hooks
 */
    const [contactToDisplay, updateContact] = useState(null);

/** 
* JavaScript
*/
    const addContact = (contact) => {
        updateContact(contact);
    }

/**
 * JSX
*/
    return (
        <div className="container">
            <h1>Forms Example</h1>
            <ContactValidationInput addContact={addContact}/>
            <ContactOutput contact={contactToDisplay}/>
            <Link to="/">Home</Link>
        </div>
    )
};