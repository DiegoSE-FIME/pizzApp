import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Background from '../assets/imagebkg.png';
import Pizza from '../assets/Pizza.png';
import { BackgroundImage } from '../Components/styles/StyledComponents';

const SingleStore = () => {
	const [restaurant, setRestaurant] = useState([]);

	useEffect(async () => {
		await axios
			.get('../../api.json')
			.then((res) => {
				let response = res.data[0].response.stores[0].name;
				// filter through the data and find the store name
				// set the state to the store name
				const localStorageRestaurant = localStorage.getItem('restaurant');
				response = localStorageRestaurant;
				setRestaurant(response);
				console.log(response);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm wrapper">
					<BackgroundImage src={Background}></BackgroundImage>
					<img
						src={Pizza}
						alt="pizza"
						className="pizza"
						data-aos="fade-right"
					/>
				</div>
				<div className="col-sm">
					<h1>{restaurant}</h1>
				</div>
			</div>
		</div>
	);
};

export default SingleStore;
