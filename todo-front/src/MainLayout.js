import styled from "styled-components";
import ListArea from "./ListArea";
import { useEffect, useState } from "react";

const MainLayoutStyle = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  background: white;
`;

const MainLayout = (props) => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const getItems = async () => {
    const data = await fetch("http://localhost:8080/todo").then((res) => {
      return res.json();
    });

    console.log(data);

    const initItems = data.map((item) => {
      return {
        id: item.itemId,
        content: item.content,
        check: item.checked,
      };
    });

    setItems(initItems);
    console.log("items");
    console.log(initItems);
    console.log(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  const addItem = (event) => {
    const newItems = [];

    for (let i = 0; i < items.length; i++) {
      newItems.push(items[i]);
    }

    const todoItem = {
      id: count,
      content: "content " + count,
      check: false,
    };

    newItems.push(todoItem);
    setCount(count + 1);
    setItems(newItems);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => {
      console.log(item.id);
      console.log(id);
      return item.id !== id;
    });
    setItems(newItems);
  };

  const saveItem = (id, newContent) => {
    const newItems = items.map((item) => item);
    newItems[id].content = newContent;
    setItems(newItems);
  };

  return (
    <MainLayoutStyle>
      <h1>Todo List</h1>
      <ListArea items={items} onRemove={removeItem} onSave={saveItem} />
      <button onClick={addItem}>add</button>
    </MainLayoutStyle>
  );
};

export default MainLayout;
