import styled from 'styled-components';

export const InputText = styled.input`
	width: 100%;
	padding: 10px;
	border-radius: 10px;
	border: 1px solid ${(props) => props.theme.gray};
	margin-top: 20px;
	color: ${(props) => props.theme.primary};
	transition: 0.4s;

	&:focus {
		border-color: ${(props) => props.theme.primary};
		outline: none;
	}

	&::placeholder {
		color: ${(props) => props.theme.gray};
	}
`;
