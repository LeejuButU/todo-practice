import styled from "styled-components";

const AddButtonStyle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #333;
  margin-left: 8px;
  cursor: pointer;
`;

const AddButton = (props) => {
  return <AddButtonStyle onClick={props.onClick}>+</AddButtonStyle>;
};

export default AddButton;
