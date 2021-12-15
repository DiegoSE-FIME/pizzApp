import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router';
import axios from 'axios';
import Aos from 'aos';

import 'aos/dist/aos.css';
import '../App.css';

import Background from '../assets/imagebkg.png';
import Pizza from '../assets/Pizza.png';
import LoginIcon from '../assets/ic_password.png';

import {
	BackgroundImage,
	SmallText,
	StyledTitle,
	StyledCard,
} from '../Components/styles/StyledComponents';

function Home() {
	const [restaurants, setRestaurants] = useState([]);
	useEffect(async () => {
		Aos.init({ duration: 2000 });
		await axios
			.get('api.json')
			.then((res) => {
				setRestaurants(res.data[0].response.stores);
			})
			.catch((error) => console.log(error));
	}, []);

	const restaurantsArray = Object.values(restaurants);
	const user = localStorage.getItem('user');
	let navigate = useNavigate();

	const logOut = () => {
		navigate('/');
		localStorage.clear();
	};

	const RenderSingleRestaurant = (restaurant) => {
		navigate(`/home/:${restaurant}`);
		const savedRestaurant = localStorage.setItem('restaurant', restaurant);
		return savedRestaurant;
	};

	localStorage.setItem('pizzaImage', Pizza);
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
					<div className="row">
						<StyledTitle>Hola, {user}</StyledTitle>
					</div>
					<SmallText>Pizzerías</SmallText>
					<div className="log-out-box">
						<img src={LoginIcon} alt="log out" className="log-out-icon" />
						<button
							className="btn btn-link log-out-text"
							type="button"
							onClick={() => logOut()}>
							Salir
						</button>
					</div>
					<div className="row mt-4 restaurant-container">
						{restaurantsArray.map((restaurant) => (
							<div
								className="col-sm"
								key={restaurant.id}
								data-aos="fade-left"
								data-aos-delay="200">
								<StyledCard>
									<img src={restaurant.logo} className="card-img-top" />
								</StyledCard>
								<button
									className="card-title btn btn-link"
									onClick={() => RenderSingleRestaurant(restaurant.name)}>
									{restaurant.name}
								</button>
								<p className="card-text mb-3">{restaurant.address}</p>
							</div>
						))}
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default Home;
