import { PaginationItemContainer } from "./styles";

export const  PaginationItem = ({ isCurrent = false, number, onPageChange })=> {
  if (isCurrent) {
    return (
      <PaginationItemContainer disabled isCurrent={true}>
        {number}
      </PaginationItemContainer>
    );
  }

  return (
    <PaginationItemContainer onClick={() => onPageChange(number)}>
      {number}
    </PaginationItemContainer>
  );
}
