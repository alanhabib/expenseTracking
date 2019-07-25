import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import AppRouter from "./Routers/AppRouter";
import configureStore from "./store/configure";
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter/>
	</Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));

