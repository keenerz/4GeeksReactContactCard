import React, { useState } from "react";

import ContactCard from "./ContactCard.jsx";
import AddContact from "./AddContact.jsx";

const Home = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [contactToUpdate, setContactToUpdate] = useState(null);
	const [contacts, setContacts] = useState([]);
	//Inputs
	const saveContact = (contactInfo) => {
		setModalIsOpen(false);
		setContacts(contacts.concat(contactInfo));
		console.log("After", contactInfo);
	};

	const deleteContact = (indexToDelete) => {
		setContacts(contacts.filter((item, index) => indexToDelete !== index));
		setModalIsOpen(false);
	};

	const updateContact = (updatedContact) => {
		setContacts(
			contacts.map((oldContact, index) => {
				if (contactToUpdate.index === index) {
					return updatedContact;
				} else return oldContact;
			})
		);
		setModalIsOpen(false);
		setContactToUpdate(null);
	};

	return (
		<div className="container">
			<div>
				<div className="text-align-center my-3">
					{modalIsOpen === true || contactToUpdate !== null ? (
						<AddContact
							onSave={
								contactToUpdate ? updateContact : saveContact
							}
							contactInfo={contactToUpdate}
						/>
					) : (
						<button
							type="button"
							className="btn btn-success"
							onClick={() => {
								setModalIsOpen(true);
								saveContact(contactInfo);
							}}>
							Add new contact
						</button>
					)}
				</div>
				<div
					id="contacts"
					className="panel-collapse collapse show"
					aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{contacts.map((c, i) => (
							<ContactCard
								contactInfo={c}
								onDelete={() => deleteContact(i)}
								onUpdate={() =>
									setContactToUpdate({ ...c, index: i })
								}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;
