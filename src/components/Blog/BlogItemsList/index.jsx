import { BlogListContainer ,  BlogListItemImageContainer, BlogListItemContainer } from './styles';


export function BlogItemsList({ blogItems }) {
	return (
		<BlogListContainer>
			{blogItems.map((blogItem) => {
				return (
					<BlogListItemContainer key={blogItem.id} to={`/blog/${blogItem.id}`}>
						<BlogListItemImageContainer>
							<img src={blogItem.image} alt={blogItem.title} />
						</BlogListItemImageContainer>
						<p>{blogItem.title}</p>
					</BlogListItemContainer>
				);
			})}
		</BlogListContainer>
	);
}
