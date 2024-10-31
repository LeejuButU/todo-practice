import styled from "styled-components";
import AddButton from "./AddButton";

const CategoryStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  border-radius: 16px;
  width: fit-content;
  padding: 4px 12px;
  margin: 8px 0;
  height: 28px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

const Category = (props) => {
  return (
    <CategoryStyle>
      할 일
      <AddButton onClick={props.onClick} />
    </CategoryStyle>
  );
};

export default Category;
