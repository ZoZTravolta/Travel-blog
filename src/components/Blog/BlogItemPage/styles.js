import styled from 'styled-components';
import { PageHeader } from '../PageHeader';
import { BasePageContainer } from '../../../styles/global';

export const BlogPageItemContainer = styled(BasePageContainer)`
	margin-bottom: 60px;

	h3 {
		color: ${(props) => props.theme.primary};
		font-size: 30px;
		margin-bottom: 0px;
	}

	h4 {
		font-weight: 500;
		font-size: 20px;
		margin-top: 0px;
	}

	h5 {
		font-weight: 400;
	}
`;

export const OverviewContainer = styled.section`
	display: flex;
	height: 350px;
	width: 100%;
	border-radius: 20px;
	overflow: hidden;
	margin-top: 60px;

	img {
		width: 100%;
		object-fit: cover;
	}
`;

export const ContentContainer = styled.section`
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media (max-width: 550px) {
		margin-top: 30px;
	}
`;

export const CommentsContainer = styled.section`
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	font-size: 12px;

	.comment {
		display: flex;
		gap: 5px;
	}
	.comment-pic {
		margin-right: 10px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.comment-text {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
`;

export const AddCommentContainer = styled.section`
	h3 {
		margin-bottom: 20px;
		margin-top: 60px;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	input,
	textarea {
		width: 100%;
		padding: 10px;
		border-radius: 10px;
		border: 1px solid ${(props) => props.theme.gray};
		color: ${(props) => props.theme.primary};
		transition: 0.4s;

		&:focus {
			border-color: ${(props) => props.theme.primary};
			outline: none;
		}

		&::placeholder {
			color: ${(props) => props.theme.gray};
		}
	}
`;
