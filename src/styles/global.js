import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

    #root {
        width: 100%;
    }
    
    body {
        color: ${(props) => props.theme.gray};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }
`;

export const BasePageContainer = styled.main`
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	margin-top: 60px;
	padding-left: 10px;
	padding-right: 10px;

	@media (max-width: 1000px) {
		max-width: 800px;
	}
`;
