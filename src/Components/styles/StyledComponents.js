import styled from 'styled-components';

export const BackgroundImage = styled.img`
	width: 100%;
	height: 100%;
`;

export const InputForm = styled.input`
	margin: 10px 0 10px 110px;
	width: 500px;
	height: 50px;
`;

export const StyledButton = styled.button`
	background: #ffd966;
	border-radius: 5px;
	padding: 1rem 1.5rem;
	width: 500px;
	display: inline-block;
	text-align: center;
	border: none;
	margin-left: 110px;
	font-size: ${(size) => size.theme.sizes.normalSize};
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;
