import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar';
import SearchBar from './components/SearchBar';
import AppRoutes from './components/Routes';
import Footer from './components/Footer';
import './styles/App.css';
import Slider from './components/Slider';
const App = () => {
	const [cartItems, setCartItems] = useState([]);

	const updateCartItems = (items) => {
		setCartItems(items);
	};

	return (
		<Router>
			<div className="app">
				<Navbar cartItems={cartItems} />
				<SearchBar />
				<AppRoutes updateCartItems={updateCartItems} cartItems={cartItems} />
				<Footer />
			</div>
		</Router>
	);
};
export default App;
