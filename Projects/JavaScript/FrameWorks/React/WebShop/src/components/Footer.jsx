import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-content">
				<p>&copy; 2023 Your Website. All rights reserved.</p>
				<div className="social-menu">
					<input type="checkbox" className="menu-toggle" id="menu-toggle" />
					<label htmlFor="menu-toggle">&#9776;</label>
					<ul className="menu-items">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/products">Products</a>
						</li>
						<li>
							<a href="/cart">Cart</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
