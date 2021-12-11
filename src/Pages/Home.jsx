import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
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
} from '../Components/styles/StyledComponents';

function Home() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	let navigate = useNavigate();

	const logOut = () => {
		navigate('/');
		localStorage.clear();
		console.log('salio');
	};
	const user = localStorage.getItem('user');

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
				</div>
			</div>
		</div>
	);
}

export default Home;
