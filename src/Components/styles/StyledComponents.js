import styled from 'styled-components';

export const BackgroundImage = styled.img`
	width: 620px;
	height: 711px;
	position: absolute;
`;

export const InputForm = styled.input`
	margin: 10px 0 10px 110px;
	width: 500px;
	height: 50px;

	@media (max-width: 480px) {
		margin: 10px 0 10px 10px;
		width: 100%;
	}
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

	@media screen and (max-width: 480px) {
		width: 100%;
		position: relative;
		margin-left: 10px;
	}
`;

export const SmallText = styled.h5`
	color: ${(c) => c.theme.colors.gray};
	display: flex;
	justify-content: start;
	margin-top: 60px;
	margin-left: 40px;
	border-bottom: 3px solid ${(c) => c.theme.colors.yellow};
	width: 90px;
	@media screen and (max-width: 480px) {
		margin-left: 40px;
	}
`;

export const StyledTitle = styled.h1`
	width: 200px;
	font-size: 24px;
	position: relative;
	top: 40px;
	left: 40px;
	margin-bottom: 30px;
	font-family: 'Marcellas', sans-serif;
`;

export const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 150px;
	height: 150px;
	background-color: #f5f5f5;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	margin: 0 0 25px 35px;
	@media screen and (max-width: 480px) {
		margin: 0 0 25px 10px;
	}
`;

export const StyledTitleSingleStore = styled(StyledTitle)`
	font-size: 3rem;
	width: 300px;
	display: inline-block;
	border-bottom: 3px solid ${(c) => c.theme.colors.yellow};
	@media screen and (max-width: 480px) {
		width: 300px;
		position: relative;
		top: 100px;
		left: 10px;
	}
`;

export const StoreDesc = styled.p`
	font-size: 1.3rem;
	color: ${(c) => c.theme.colors.black};
	margin: 50px 0 0 40px;
	@media screen and (max-width: 480px) {
		margin: 100px 0 0 10px;
	}
`;
