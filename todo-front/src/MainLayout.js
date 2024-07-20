import styled from 'styled-components'
import ListArea from './ListArea';
import { useState } from 'react';

const MainLayoutStyle = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  background: white;
`;

const MainLayout = (props) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const addItem = (event) => {
    const newItems = [];

    for (let i = 0; i < items.length; i++) {
      newItems.push(items[i]);
    }

    const todoItem = {
      id: count,
      content: "content " + count,
      check: false
    };

    newItems.push(todoItem);
    setCount(count+1);
    setItems(newItems);
  }

  const removeItem = (id) => {
    const newItems = items.filter(item => {console.log(item); return item.id !== id});
    setItems(newItems);
  }

  return (
    <MainLayoutStyle>
      <h1>Todo List</h1>
      <ListArea items={items} onRemove={removeItem}/>
      <button onClick={addItem}>add</button>
    </MainLayoutStyle>
  );
};

export default MainLayout;
