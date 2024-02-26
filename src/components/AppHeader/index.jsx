import { AppHeaderContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { IoPersonCircle } from "react-icons/io5";
import { ButtonInput } from '../Inputs/ButtonInput';


export const AppHeader = ({ title, subtitle, ...rest }) => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate('/');
	};

  const handleGoToAddPost = () => {
    navigate('/add-post');
  }

	return (
		<AppHeaderContainer {...rest}>
			<div className='container'>
				<div className='logo-container' onClick={handleGoBack}>
					<img className='logo' src={logo} alt='logo'  />
					Eco Smart Travels
				</div>
      <div className='profile-container' >
          <ButtonInput title='Add Post' type='button' onClick={handleGoToAddPost}/>
          <IoPersonCircle size={30}/>
      </div>
			</div>
			
		</AppHeaderContainer>
	);
};
