import styled from "styled-components";
import FriendButton from "../FriendButton/FriendButton";

const ProfileStyle = styled.div`
	display: flex;
  text-align: center;
  color: white;
	align-items: center;
`;

const InfoStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 0px 10px;
	width: 60%;
`;

const Profile = (props) => {
  return (
    <ProfileStyle>
			<FriendButton/>
			<InfoStyle>
				name
				<div>intro</div>
			</InfoStyle>
      diary icon
    </ProfileStyle>
  );
};

export default Profile;
