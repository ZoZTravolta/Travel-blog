import styled from 'styled-components';
import { BasePageContainer } from '../../styles/global';

export const HomeContainer = styled(BasePageContainer)``;

export const HomeHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.logo {
		width: 50px;
	}

	@media (max-width: 400px) {
		a {
			padding: 20px 40px;
		}

		img {
			width: 80px;
		}
	}
`;

export const HomeContentContainer = styled.section`
	display: flex;
	justify-content: space-between;
	margin-top: 100px;
	align-items: center;

	.title-container {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	h1 {
		font-size: 60px;
		font-family: 'Handlee', cursive;
		letter-spacing: 3px;
		line-height: 50px;
		margin-bottom: 30px;
		color: ${(props) => props.theme.primary};
	}

	p {
		font-size: 23px;
		line-height: 40px;
	}

	img {
		width: 480px;
	}

	@media (max-width: 1000px) {
		img {
			width: 400px;
		}

		h1 {
			font-size: 50px;
		}

		p {
			font-size: 18px;
			line-height: 40px;
		}
	}

	@media (max-width: 730px) {
		flex-direction: column;
		text-align: center;

		div {
			max-width: 100%;
			margin-bottom: 20px;
			padding: 0px 20px;
		}
		.title-container {
			align-items: center;
		}
	}

	@media (max-width: 400px) {
		margin-top: 70px;

		img {
			width: 300px;
		}
	}
`;
