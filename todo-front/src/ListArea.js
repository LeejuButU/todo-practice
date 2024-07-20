import styled from "styled-components"
import ListItem from "./ListItem";

const ListAreaStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const ListArea = (props) => {
    const {items, onRemove} = props;
    return <ListAreaStyle>
        {items.map(item => {console.log(item.id); return <ListItem onRemove={onRemove} itemKey={item.id}>{item.content}</ListItem>})}
    </ListAreaStyle>
}

export default ListArea;