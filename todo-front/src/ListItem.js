import styled from "styled-components";

const ListItemStyle = styled.div`
  display: flex;
  border: solid #333333 1px;
  margin: 4px 0px;
  font-size: 20px;
`;

const ListCheckBox = styled.input`
  background-color: #222;
`;

const ListItem = (props) => {
  const { content, onRemove, itemKey, onSave } = props;
  let newContent;

  const onChange = (event) => {
    newContent = event.target.value;
  };

  return (
    <ListItemStyle>
      <ListCheckBox type="checkbox"></ListCheckBox>
      <input
        className="content-input"
        style={{ background: "#000", color: "#fff", fontWeight: "bold" }}
        type="text"
        defaultValue={content}
        onChange={onChange}
      />
      <span
        class="material-symbols-outlined"
        style={{ color: "#FC6160", cursor: "pointer" }}
        onClick={() => {
          console.log(itemKey);
          onRemove(itemKey);
        }}
      >
        delete
      </span>
      <span
        class="material-symbols-outlined"
        style={{ color: "#5683F8", cursor: "pointer" }}
      >
        check_small
      </span>
    </ListItemStyle>
  );
};

export default ListItem;
