import styled from "styled-components";

const FriendButtonImageStyle = styled.div`
  height: 50px;
  width: 50px;
  background-color: #222222;
  border-radius: 50%;
  margin: 2px 8px;
  color: #fff;
  text-align: center;
`;

const FriendButtonImage = (props) => {
  return <FriendButtonImageStyle></FriendButtonImageStyle>;
};

export default FriendButtonImage;
