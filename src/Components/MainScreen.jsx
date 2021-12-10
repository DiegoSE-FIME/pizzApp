import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router';

import Aos from 'aos';
import 'aos/dist/aos.css';

import Background from '../assets/imagebkg.png';
import Pizza from '../assets/Pizza.png';

import {
	BackgroundImage,
	InputForm,
	StyledButton,
} from './styles/StyledComponents';

function MainScreen() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	const [error, setError] = useState(null);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);

	let navigate = useNavigate();

	const handleFormData = (e) => {
		e.preventDefault();

		if (!email.trim()) {
			setError('Email is required');
			return;
		} else if (!password.trim()) {
			setError('Password is required');
			return;
		} else {
			setError(null);
		}

		if (password.length < 6) {
			setError('Password length must be greater than 6 characters');
			return;
		}

		setError(null);
		setEmail('');
		setPassword('');
		setUser(email, password);
	};

	const forgotPassword = () => {
		alert('Lo siento pero aún no tenemos esa función :c');
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
					<div className="row form-view">
						<div className="row d-flex">
							<h1 className="text-center mt-3 main-title">Bienvenido</h1>
							<h4 className="text-center mt-2 main-subtitle">
								A las mejores pizzas del país
							</h4>
						</div>
						<div className="row form">
							<form onSubmit={handleFormData}>
								{error ? (
									<div className="alert alert-danger">{error}</div>
								) : null}
								<InputForm
									type="email"
									className="form-control mt-4"
									placeholder="Email"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
								<InputForm
									type="password"
									className="form-control mt-4"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
									value={password}
								/>
								<button
									className="btn btn-link mt-4 forgot-password-link"
									onClick={forgotPassword}
									type="button">
									¿Olvidaste tu contraseña?
								</button>
								<StyledButton
									className="mt-3"
									type="submit"
									onClick={() =>
										user === null
											? navigate('/')
											: navigate('/home') && setUser(null)
									}>
									Iniciar sesión
								</StyledButton>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainScreen;
