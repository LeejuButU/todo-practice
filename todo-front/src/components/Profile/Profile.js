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

const NicknameStyle = styled.div`
	font-weight: 900;
	font-size: 18px;
`;

const IntroduceStyle = styled.div`
	font-size: 12px;
	color: grey;
`;

const Profile = (props) => {
  return (
    <ProfileStyle>
			<FriendButton/>
			<InfoStyle>
				<NicknameStyle>에버듀</NicknameStyle>
				<IntroduceStyle>^ㅇ^</IntroduceStyle>
			</InfoStyle>
      😀
    </ProfileStyle>
  );
};

export default Profile;
