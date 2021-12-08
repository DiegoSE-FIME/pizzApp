import React from 'react';
import styled from 'styled-components';
import '../App.css';

import Background from '../assets/imagebkg.png';
import Pizza from '../assets/Pizza.png';

const BackgroundImage = styled.img`
	width: 100%;
	height: 100%;
`;

const MainScreen = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm wrapper">
					<BackgroundImage src={Background}></BackgroundImage>
					<img src={Pizza} alt="pizza" className="pizza" />
				</div>
				<div className="col-sm">Form</div>
			</div>
		</div>
	);
};

export default MainScreen;
