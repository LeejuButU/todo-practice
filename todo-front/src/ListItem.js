import styled from "styled-components";

const ListItemStyle = styled.div`
    display: flex;
    border: solid #333333 1px;
    margin: 4px 0px;
    font-size: 20px;
`;

const ListItem = (props) => {
    const {children, onRemove, itemKey} = props;
    console.log(props);

    return <ListItemStyle>
        <div>{children}</div>
        <input type='checkbox'/>
        <button onClick={() => {console.log(itemKey); onRemove(itemKey);}}>delete</button>
    </ListItemStyle>
}

export default ListItem;