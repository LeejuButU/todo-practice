import styled from "styled-components";
import FriendButtonImage from "./FriendButtonImage";

const FriendButtonLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin: 8px 0px;
`;

const FriendButton = (props) => {
  return (
    <FriendButtonLayoutStyle>
      <FriendButtonImage />
      {props.children}
    </FriendButtonLayoutStyle>
  );
};

export default FriendButton;
