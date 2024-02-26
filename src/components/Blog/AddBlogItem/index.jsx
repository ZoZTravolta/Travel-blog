import { ButtonInput } from '../../Inputs/ButtonInput';
import { TextArea } from '../../Inputs/TextArea';
import { TextInput } from '../../Inputs/TextInput';
import {
	AddCommentContainer,
	AddPic,
	BlogPageItemContainer
} from './styles';

export const AddBlogItem = ()=> {
	return (
		<BlogPageItemContainer>
			<>
					<AddPic>
							<input type="file" />
					</AddPic>
					
          <AddCommentContainer>
            <h3>
              Add a post:
            </h3>
            <form>
              <TextInput type="text" placeholder="Title" />
              <TextArea placeholder="Content" />
              <ButtonInput type="submit" title='Add post' />
            </form>
          </AddCommentContainer>
				</>
		</BlogPageItemContainer>
	);
}
