import styled from "styled-components";

const HeaderStyle = styled.div`
  background-color: #000;
  color: #fff;
`;

const Header = (props) => {
  return (
    <HeaderStyle>
      <h1>TodoMate</h1>
    </HeaderStyle>
  );
};

export default Header;
