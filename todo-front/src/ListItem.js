import styled from "styled-components";

const ListItemStyle = styled.div`
  display: flex;
  border: solid #333333 1px;
  margin: 4px 0px;
  font-size: 20px;
`;

const ListItem = (props) => {
  const { content, onRemove, itemKey, onSave } = props;
  let newContent;

  const onChange = (event) => {
    newContent = event.target.value;
  };

  return (
    <ListItemStyle>
      <input
        className="content-input"
        type="text"
        defaultValue={content}
        onChange={onChange}
      />
      <input type="checkbox" />
      <button
        onClick={() => {
          console.log(itemKey);
          onRemove(itemKey);
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          onSave(itemKey, newContent);
        }}
      >
        save
      </button>
    </ListItemStyle>
  );
};

export default ListItem;
