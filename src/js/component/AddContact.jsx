import React, { useState } from "react";
import PropTypes from "prop-types";

const AddContact = (props) => {
	const [contactInfo, setContactInfo] = useState({
		fullname: props.contactInfo ? props.contactInfo.fullname : "",
		email: props.contactInfo ? props.contactInfo.email : "",
		phone: props.contactInfo ? props.contactInfo.phone : "",
		address: props.contactInfo ? props.contactInfo.address : "",
	});
	return (
		<div className="container" id="addContact">
			<div className="modal-dialog">
				<div className="modal-content">
					<h1 className="text-center mt-5 modal-title">
						Add a new contact
					</h1>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									className="form-control"
									placeholder="Full Name"
									value={contactInfo.fullname}
									onChange={(e) =>
										setContactInfo({
											...contactInfo,
											fullname: e.target.value,
										})
									}
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter email"
									value={contactInfo.email}
									onChange={(e) =>
										setContactInfo({
											...contactInfo,
											email: e.target.value,
										})
									}
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									type="phone"
									className="form-control"
									placeholder="Enter phone"
									value={contactInfo.phone}
									onChange={(e) =>
										setContactInfo({
											...contactInfo,
											phone: e.target.value,
										})
									}
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									type="text"
									className="form-control"
									placeholder="Enter address"
									value={contactInfo.address}
									onChange={(e) =>
										setContactInfo({
											...contactInfo,
											address: e.target.value,
										})
									}
								/>
							</div>
							<button
								type="button"
								className="btn btn-primary form-control"
								onClick={() => {
									props.onSave(contactInfo);
									console.log("Saved contact", contactInfo);
								}}>
								save
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddContact;
