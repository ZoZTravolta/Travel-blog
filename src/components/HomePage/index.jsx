import {
  HomeContainer,
  HomeContentContainer,
} from "./styles";
import homeimg from "../../assets/home-img.svg";
import { ButtonInput } from "../Inputs/ButtonInput";
import { useNavigate } from 'react-router-dom';


export const  HomePage=()=> {
  const navigate = useNavigate();

  const handleGoToBlog = () => {
		navigate('/blog');
	};
  return (
    <HomeContainer>
      <HomeContentContainer>
        <div className="title-container">
          <h1>Eco Smart Travels</h1>
          <p>
          Explore the World's Wonders, Cultures, and Adventures through the Lens of Travel Enthusiasts
          </p>
           <ButtonInput onClick={handleGoToBlog} title='Find Stories' size='big'>Find stories</ButtonInput>
        </div>
        <img src={homeimg} />
      </HomeContentContainer>
    </HomeContainer>
  );
}
