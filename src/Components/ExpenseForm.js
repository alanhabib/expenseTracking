import React, {Component} from "react";
import moment from "moment";
import 'react-dates/initialize';
import {SingleDatePicker} from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			description: props.expense ? props.expense.description : "",
			notes: props.expense ? props.expense.notes : "",
			amount: props.expense ? (props.expense.amount / 100).toString() : "",
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calenderFocused: false,
			errorMessage: ""
		};
	}

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({description}))
	};

	onNotesChange = (e) => {
		const notes = e.target.value;
		this.setState(() => ({notes}))
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if(!amount || amount.match(/^\d+(.\d+){0,2}$/)) {
			this.setState(() => ({amount}))
		}
	};

	onDateChange = (createdAt) => {
		if(createdAt) {
			this.setState(() => ({
				createdAt
			}))
		}
	};

	onFocusChange = ({focused}) => {
		this.setState(() => ({calenderFocused: focused}))
	};

	onSubmit = (e) => {
		e.preventDefault();
		if(!this.state.description || !this.state.amount) {
			this.setState({
				errorMessage: "Please provide description and amount."
			})
		} else {
			console.log("SUBMITTED");
			this.setState({errorMessage: ""});
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				notes: this.state.notes
			});
		}
	};

	render() {
		return (
			<div>
				{this.state.errorMessage && <p>{this.state.errorMessage}</p>}
				<form onSubmit={this.onSubmit}>
					<input type={"text"} placeholder={"Description"} autoFocus value={this.state.description}
						   onChange={this.onDescriptionChange}/>
					<input type={"number"} placeholder={"Amount"} value={this.state.amount}
						   onChange={this.onAmountChange}/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calenderFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea placeholder={"Add a note for your expense(optional)"} onChange={this.onNotesChange}
							  value={this.state.notes}/>
					<button>Add expense</button>
				</form>
			</div>
		)
	}
}