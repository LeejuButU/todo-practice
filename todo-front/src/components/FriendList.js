import styled from "styled-components";
import FriendButton from "./FriendButton/FriendButton";

const FriendListStyle = styled.div`
  display: flex;
`;

const FriendList = (props) => {
  return (
    <FriendListStyle>
      <FriendButton>me</FriendButton>
      <FriendButton />
    </FriendListStyle>
  );
};

export default FriendList;
