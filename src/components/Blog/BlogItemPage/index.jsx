import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	BlogPageItemContainer,
	OverviewContainer,
	ContentContainer,
  CommentsContainer,
  AddCommentContainer
} from './styles';
import { PageHeader } from '../PageHeader';
import { MOCK_DATA_ITEM } from '../../../mockDataItem';
import { TextArea } from '../../Inputs/TextArea';
import { TextInput } from '../../Inputs/TextInput'
import { ButtonInput } from '../../Inputs/ButtonInput';

export function BlogItemPage() {
	const params = useParams();
	const [blogItemPage, setBlogItemPage] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	async function getBlogItem() {
		// if (!params.id) return;
		// setIsLoading(true);
		// const response = await axios.get(
		//   `https://api.spoonacular.com/recipes/${params.id}/information`,
		//   { params: { apiKey: import.meta.env.VITE_API_KEY } }
		// );
		setBlogItemPage(MOCK_DATA_ITEM);
		setIsLoading(false);
	}

	useEffect(() => {
		getBlogItem();
	}, []);

	return (
		<BlogPageItemContainer>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<>
					<PageHeader title="Back to all items"  />
					<OverviewContainer>
						<img src={blogItemPage.pic} alt={blogItemPage.title} />
					</OverviewContainer>
					<ContentContainer>
						<h3>{blogItemPage.title}</h3>
						<div>
							<h4>{blogItemPage.subtitle}</h4>
              <h5>By {blogItemPage.author}</h5>
						</div>
            
						{blogItemPage.content}
					</ContentContainer>

          <CommentsContainer>
						<h3>Comments</h3>
            {blogItemPage.comments.map((comment) => {
              return (
                <div key={comment.id} className='comment'>
                  <div className='comment-pic'>
                    {comment.pic && <img src={comment.pic} alt={comment.name} />}
                  </div>
                  <div className='comment-text'>
                  <h4>{comment.title}</h4>
                  <p>{comment.content}</p>
                  <p>{comment.date} | {comment.author}</p>
                  </div>
                </div>
              );
            })}
					</CommentsContainer>
          <AddCommentContainer>
            <h3>
              Add a comment:
            </h3>
            <form>
              <TextInput type="text" placeholder="Your name" />
              <TextArea placeholder="Your comment" />
              <ButtonInput type="submit" title='Add comment' />
            </form>
          </AddCommentContainer>
				</>
			)}
		</BlogPageItemContainer>
	);
}
