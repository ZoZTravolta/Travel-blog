import { PageHeaderContainer } from "./styles";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const PageHeader=({ title, subtitle, ...rest })=> {
  const navigate = useNavigate();

  const handleGoBack =()=> {
    navigate(-1);
  }

  return (
    <PageHeaderContainer {...rest}>
      <div onClick={handleGoBack}>
        <FaChevronLeft size={15}  />
        <h1>{title}</h1>
      </div>
      <p>{subtitle}</p>
    </PageHeaderContainer>
  );
}
