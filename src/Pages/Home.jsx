import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import '../App.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

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
	useEffect(() => {
		Aos.init({ duration: 2000 });
		axios.get('api.json').then((res) => {
			setRestaurants(res.data[0].response.stores);
		});
	}, []);

	const restaurantsArray = Object.values(restaurants);
	const user = localStorage.getItem('user');
	let navigate = useNavigate();

	const logOut = () => {
		navigate('/');
		localStorage.clear();
	};

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
					<div className="row mt-4">
						{restaurantsArray.map((restaurant) => (
							<div
								className="col-sm mb-4"
								key={restaurant.id}
								data-aos="fade-left"
								data-aos-delay="200">
								<StyledCard>
									<div>
										<img
											src={restaurant.logo}
											alt=""
											className="card-img-top"
										/>
									</div>
								</StyledCard>
								<h5 className="card-title">{restaurant.name}</h5>
								<p className="card-text">{restaurant.address}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
