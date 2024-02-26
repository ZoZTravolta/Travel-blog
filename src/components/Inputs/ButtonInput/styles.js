import styled from 'styled-components';

export const Button = styled.button`
	background: ${(props) => props.theme.green};
	padding: 10px 20px;
	border-radius: 999px;
	transition: 0.4s;
	border: 2px solid ${(props) => props.theme.primary};
	color: ${(props) => props.theme.primary};
	width: fit-content;
	text-transform: uppercase;

	&:hover {
		background: ${(props) => props.theme.primary};
		color: ${(props) => props.theme.white};
	}
	&.big {
		padding: 20px 50px;
		font-size: 16px;
		font-weight: 700;
		border: 3px solid ${(props) => props.theme.primary};
	}
`;
