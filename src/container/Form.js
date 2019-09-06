import React from 'react';
import { Button,Form, Input } from '../component/form';
import './Form.css';

class FormContainer extends React.Component{
	render(){
		return(
			<div className="form">
			<label className="title">Form</label>
			<Form onSubmit={this.props.onSubmit}>
				<label className="input_title">Username</label>
				<Input
					type="username"
					name="username"
					onChange={this.props.onChange}
					value={this.props.username}
				/>
				<label className="input_title">Email</label>
				<Input
					type="email"
					name="email"
					onChange={this.props.onChange}
					value={this.props.email}	
				/>
				<label className="input_title"></label>

				<Button textButton="Add" />
			</Form>
			</div>
		)
	}
}

export default FormContainer;