import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import '../App.css';

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
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	let navigate = useNavigate();

	const handleFormData = (e) => {
		e.preventDefault();
		if (!username.trim()) {
			setError('A user is required');
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
		} else if (username.length <= 2) {
			setError('User name must be greater than 2 characters');
			return;
		} else {
			setError(null);
		}

		setError(null);
		setUsername('');
		setPassword('');
		navigate('/home');
	};

	const forgotPassword = () => {
		alert('Lo siento pero aún no tenemos esa función :c');
	};

	localStorage.setItem('user', username);

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
									className="form-control mt-4"
									placeholder="User"
									onChange={(e) => setUsername(e.target.value)}
									value={username}
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
									onClick={() => handleFormData()}>
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
