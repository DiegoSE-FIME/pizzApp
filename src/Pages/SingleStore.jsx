import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Background from '../assets/imagebkg.png';
import Pizza from '../assets/Pizza.png';
import {
	BackgroundImage,
	StyledTitleSingleStore,
	StoreDesc,
} from '../Components/styles/StyledComponents';

const SingleStore = () => {
	const [restaurant, setRestaurant] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(async () => {
		await axios
			.get('../../api.json')
			.then((res) => {
				// getting the restaurant properties if is saved in the local storage
				for (let i = 0; i < res.data[0].response.stores.length; i++) {
					if (
						res.data[0].response.stores[i].name ===
						localStorage.getItem('restaurant')
					) {
						setRestaurant(res.data[0].response.stores[i]);
					}
				}
				// products
				for (let j = 0; j < res.data[0].response.stores.length; j++) {
					if (
						res.data[0].response.stores[j].name ===
						localStorage.getItem('restaurant')
					) {
						setProducts(res.data[0].response.stores[j].products);
					}
				}
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm wrapper">
					<BackgroundImage src={Background}></BackgroundImage>
					<img src={restaurant.logo} alt="" />
				</div>
				<div className="col-sm">
					<StyledTitleSingleStore>{restaurant.name}</StyledTitleSingleStore>
					<StoreDesc>{restaurant.description}</StoreDesc>
					<span className="address-single-store">
						Dirección: {restaurant.address}
					</span>
					<h2 className="single-store-menu">Menú</h2>
					<ul className="list-group">
						{products.map((product) => (
							<li className="list-group-item" key={product.id}>
								<span className="product-name">{product.name}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SingleStore;
