import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import "../css/dt.css";
import { Requester } from "../utils/request";

const Users = () => {
	let emptyUser = {
		_id: null,
		name: null,
		lastName: null,
		birthDate: null,
		addresses: null,
		rating: null,
		createdAt: null,
		updatedAt: null,
		__v: null,
	};

	const [users, setUsers] = useState(null);
	const [userDialog, setUserDialog] = useState(false);
	const [user, setUser] = useState(emptyUser);
	const [globalFilter, setGlobalFilter] = useState(null);
	const toast = useRef(null);
	const dt = useRef(null);

	useEffect(() => {
		Requester.getUsers().then((data) => setUsers(data));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const hideDialog = () => {
		setUserDialog(false);
	};

	const editProduct = (user) => {
		setUser({ ...user });
		setUserDialog(true);
	};

	const ratingBodyTemplate = (rowData) => {
		return <Rating value={rowData.rating} readOnly cancel={false} />;
	};

	const actionBodyTemplate = (rowData) => {
		return (
			<React.Fragment>
				<Button
					icon="pi pi-eye"
					className="p-button-rounded p-button-success mr-2"
					onClick={() => editProduct(rowData)}
				/>
			</React.Fragment>
		);
	};

	const header = (
		<div className="table-header">
			<h5 className="mx-0 my-1">Manage Users</h5>
			<span className="p-input-icon-left">
				<i className="pi pi-search" />
				<InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
			</span>
		</div>
	);
	const productDialogFooter = (
		<React.Fragment>
			<Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
		</React.Fragment>
	);

	return (
		<div className="datatable-crud-demo">
			<Toast ref={toast} />

			<div className="card">
				<DataTable
					ref={dt}
					value={users}
					dataKey="id"
					paginator
					rows={10}
					rowsPerPageOptions={[5, 10, 25]}
					paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
					currentPageReportTemplate="Showing {first} to {last} of {totalRecords} users"
					globalFilter={globalFilter}
					header={header}
					responsiveLayout="scroll"
				>
					<Column headerStyle={{ width: "3rem" }} exportable={false}></Column>
					<Column field="name" header="Name" sortable style={{ minWidth: "12rem" }}></Column>
					<Column field="lastName" header="Last Name" sortable style={{ minWidth: "16rem" }}></Column>
					<Column field="type" header="Type" sortable style={{ minWidth: "10rem" }}></Column>
					<Column
						field="rating"
						header="Rating"
						body={ratingBodyTemplate}
						sortable
						style={{ minWidth: "12rem" }}
					></Column>
					<Column body={actionBodyTemplate} exportable={false} style={{ minWidth: "8rem" }}></Column>
				</DataTable>
			</div>

			<Dialog
				visible={userDialog}
				style={{ width: "450px" }}
				header="User details"
				modal
				className="p-fluid"
				footer={productDialogFooter}
				onHide={hideDialog}
			>
				<div className="field">
					<label htmlFor="name">Name</label>
					<InputText id="name" value={user.name} readOnly autoFocus />
				</div>
				<div className="field">
					<label htmlFor="lastName">Last Name</label>
					<InputText id="lastName" value={user.lastName} readOnly autoFocus />
				</div>
				<div className="field">
					<label htmlFor="birthDate">Birth Date</label>
					<InputText id="birthDate" value={user.birthDate} readOnly autoFocus />
				</div>
			</Dialog>
		</div>
	);
};

export default Users;
