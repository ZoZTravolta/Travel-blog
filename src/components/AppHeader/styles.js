import styled from 'styled-components';

export const AppHeaderContainer = styled.section`
	.container {
		padding: 20px;
		background-color: ${(props) => props.theme.primary};
		color: ${(props) => props.theme.white};
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo-container {
		cursor: pointer;
	}
	.logo {
		width: 30px;
	}
	.profile-container {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 10px;
	}
`;
