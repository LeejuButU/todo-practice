import styled from "styled-components";
import ListItem from "./ListItem";

const ListAreaStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListArea = (props) => {
  const { items, onRemove, onSave } = props;
  return (
    <ListAreaStyle>
      {items.map((item) => {
        return (
          <ListItem
            onRemove={onRemove}
            onSave={onSave}
            itemKey={item.id}
            content={item.content}
          />
        );
      })}
    </ListAreaStyle>
  );
};

export default ListArea;
