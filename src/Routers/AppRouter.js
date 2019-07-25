import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "../Components/Header";
import ExpenseDashboardPage from "../Components/ExpenseDashboardPage";
import AddExpensePage from "../Components/AddExpensePage";
import EditExpensePage from "../Components/EditExpensePage";
import HelpPage from "../Components/HelpPage";
import NotFoundPage from "../Components/NotFoundPage";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Header/>
				<Switch>
					<Route exact path={"/"} component={ExpenseDashboardPage}/>
					<Route path={"/create"} component={AddExpensePage}/>
					<Route path={"/edit/:id"} component={EditExpensePage}/>
					<Route path={"/help"} component={HelpPage}/>
					<Route component={NotFoundPage}/>
				</Switch>
			</div>
		</BrowserRouter>

	)
};

export default AppRouter;