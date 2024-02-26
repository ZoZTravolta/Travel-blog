import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlogListContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
	column-gap: 76px;
	row-gap: 30px;
	margin-top: 60px;
	margin-bottom: 80px;
`;

export const BlogListItemContainer = styled(Link)`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 362px;
	border-radius: 30px;
	overflow: hidden;
	background: ${(props) => props.theme.primary};
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
	color: ${(props) => props.theme.white};

	&:nth-child(even) {
		background: ${(props) => props.theme.green};
		p {
			color: ${(props) => props.theme.primary};
		}
	}

	p {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		text-align: center;
		padding: 0 5px;
	}

	&:hover div img {
		transform: scale(1.1);
	}
`;

export const BlogListItemImageContainer = styled.div`
	width: 100%;
	height: 268px;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: 0.4s;
	}
`;
